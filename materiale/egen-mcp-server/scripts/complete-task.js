#!/usr/bin/env node
import { TaskStore } from '../src/taskStore.js';

async function main() {
  const store = new TaskStore();
  try {
    const task = await store.completeTask(5);
    console.log(`Opdateret task ${task.id}: ${task.title} - completed=${task.completed}`);
  } catch (err) {
    console.error('Fejl:', err instanceof Error ? err.message : String(err));
    process.exitCode = 1;
  }
}

void main();
