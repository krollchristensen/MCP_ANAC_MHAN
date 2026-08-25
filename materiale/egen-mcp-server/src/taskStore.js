import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentFile = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFile);
const defaultTasksFile = path.resolve(currentDirectory, "../data/tasks.json");

export class TaskStoreError extends Error {
  constructor(message) {
    super(message);
    this.name = "TaskStoreError";
  }
}

function validateTask(task) {
  const valid =
    task !== null &&
    typeof task === "object" &&
    Number.isInteger(task.id) &&
    task.id > 0 &&
    typeof task.title === "string" &&
    task.title.trim().length >= 3 &&
    typeof task.completed === "boolean";

  if (!valid) {
    throw new TaskStoreError("Taskfilen indeholder ugyldige data.");
  }

  return {
    id: task.id,
    title: task.title.trim(),
    completed: task.completed
  };
}

function normalizeTitle(title) {
  if (typeof title !== "string") {
    throw new TaskStoreError("Titlen skal være tekst.");
  }

  const normalized = title.trim();

  if (normalized.length < 3 || normalized.length > 120) {
    throw new TaskStoreError("Titlen skal være mellem 3 og 120 tegn.");
  }

  return normalized;
}

export class TaskStore {
  #tasksFile;
  #mutationQueue = Promise.resolve();

  constructor(tasksFile = defaultTasksFile) {
    this.#tasksFile = path.resolve(tasksFile);
  }

  async listTasks() {
    let content;

    try {
      content = await readFile(this.#tasksFile, "utf8");
    } catch {
      throw new TaskStoreError("Taskfilen kunne ikke læses.");
    }

    let data;

    try {
      data = JSON.parse(content);
    } catch {
      throw new TaskStoreError("Taskfilen indeholder ugyldig JSON.");
    }

    if (!Array.isArray(data)) {
      throw new TaskStoreError("Taskfilens rod skal være en liste.");
    }

    return data.map(validateTask);
  }

  async addTask(title) {
    const normalizedTitle = normalizeTitle(title);

    return this.#mutate(async tasks => {
      const nextId = tasks.reduce((highest, task) => Math.max(highest, task.id), 0) + 1;
      const task = {
        id: nextId,
        title: normalizedTitle,
        completed: false
      };

      tasks.push(task);
      return task;
    });
  }

  async completeTask(id) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new TaskStoreError("Task-id skal være et positivt heltal.");
    }

    return this.#mutate(async tasks => {
      const task = tasks.find(candidate => candidate.id === id);

      if (!task) {
        throw new TaskStoreError(`Task ${id} findes ikke.`);
      }

      task.completed = true;
      return task;
    });
  }

  async #mutate(change) {
    const operation = this.#mutationQueue.then(async () => {
      const tasks = await this.listTasks();
      const result = await change(tasks);
      await this.#writeTasks(tasks);
      return result;
    });

    this.#mutationQueue = operation.catch(() => undefined);
    return operation;
  }

  async #writeTasks(tasks) {
    const content = `${JSON.stringify(tasks, null, 2)}\n`;

    try {
      await writeFile(this.#tasksFile, content, "utf8");
    } catch {
      throw new TaskStoreError("Taskfilen kunne ikke gemmes.");
    }
  }
}
