import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { TaskStore, TaskStoreError } from "../src/taskStore.js";

async function createStore() {
  const directory = await mkdtemp(path.join(os.tmpdir(), "mcp-study-tasks-"));
  const tasksFile = path.join(directory, "tasks.json");
  const seed = [
    { id: 1, title: "Læs om MCP", completed: false },
    { id: 2, title: "Test serveren", completed: false }
  ];

  await writeFile(tasksFile, `${JSON.stringify(seed, null, 2)}\n`, "utf8");

  return {
    directory,
    tasksFile,
    store: new TaskStore(tasksFile)
  };
}

test("læser tasks fra JSON-filen", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  const tasks = await fixture.store.listTasks();

  assert.equal(tasks.length, 2);
  assert.equal(tasks[0].title, "Læs om MCP");
});

test("opretter en task med næste id", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  const task = await fixture.store.addTask("  Forklar et tool  ");
  const saved = JSON.parse(await readFile(fixture.tasksFile, "utf8"));

  assert.deepEqual(task, {
    id: 3,
    title: "Forklar et tool",
    completed: false
  });
  assert.equal(saved.length, 3);
});

test("markerer en eksisterende task som færdig", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  const task = await fixture.store.completeTask(2);

  assert.equal(task.completed, true);
  assert.equal((await fixture.store.listTasks())[1].completed, true);
});

test("afviser et ukendt task-id", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  await assert.rejects(
    fixture.store.completeTask(99),
    error => error instanceof TaskStoreError && error.message === "Task 99 findes ikke."
  );
});

test("afviser en for kort titel", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  await assert.rejects(
    fixture.store.addTask("x"),
    error => error instanceof TaskStoreError
  );
});

test("sætter samtidige ændringer i kø", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  const [first, second] = await Promise.all([
    fixture.store.addTask("Første samtidige task"),
    fixture.store.addTask("Anden samtidige task")
  ]);

  assert.deepEqual([first.id, second.id], [3, 4]);
  assert.equal((await fixture.store.listTasks()).length, 4);
});

test("afviser ugyldig JSON i taskfilen", async t => {
  const fixture = await createStore();
  t.after(() => rm(fixture.directory, { recursive: true, force: true }));

  await writeFile(fixture.tasksFile, "ikke gyldig JSON", "utf8");

  await assert.rejects(
    fixture.store.listTasks(),
    error =>
      error instanceof TaskStoreError &&
      error.message === "Taskfilen indeholder ugyldig JSON."
  );
});
