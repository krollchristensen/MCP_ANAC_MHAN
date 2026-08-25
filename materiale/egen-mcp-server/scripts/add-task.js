#!/usr/bin/env node
import { TaskStore } from '../src/taskStore.js';

async function main() {
  const store = new TaskStore();
  try {
    const task = await store.addTask('Test MCP-serveren fra GitHub Copilot');
    console.log(`Oprettet task ${task.id}: ${task.title}`);
  } catch (err) {
    console.error('Fejl:', err instanceof Error ? err.message : String(err));
    process.exitCode = 1;
  }
}

void main();
