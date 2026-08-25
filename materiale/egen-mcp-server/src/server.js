import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";
import { TaskStore, TaskStoreError } from "./taskStore.js";

const store = new TaskStore();

function createServer() {
  const server = new McpServer({
    name: "study-tasks",
    version: "1.0.0"
  });

  server.registerResource(
    "all-tasks",
    "tasks://all",
    {
      title: "Alle studieopgaver",
      description: "Den aktuelle taskliste fra serverens JSON-fil",
      mimeType: "application/json"
    },
    async uri => {
      const tasks = await store.listTasks();

      return {
        contents: [
          {
            uri: uri.href,
            mimeType: "application/json",
            text: JSON.stringify(tasks, null, 2)
          }
        ]
      };
    }
  );

  server.registerTool(
    "add_task",
    {
      title: "Opret task",
      description: "Opretter én ny task med en kort titel",
      inputSchema: z.object({
        title: z
          .string()
          .trim()
          .min(3, "Titlen skal være mindst 3 tegn")
          .max(120, "Titlen må højst være 120 tegn")
          .describe("Titlen på den nye task")
      }),
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false
      }
    },
    async ({ title }) => executeTool(async () => {
      const task = await store.addTask(title);
      return `Task ${task.id} blev oprettet: ${task.title}`;
    })
  );

  server.registerTool(
    "complete_task",
    {
      title: "Afslut task",
      description: "Markér en eksisterende task som færdig ud fra dens id",
      inputSchema: z.object({
        id: z
          .number()
          .int("Task-id skal være et heltal")
          .positive("Task-id skal være positivt")
          .describe("Id på den task, der skal afsluttes")
      }),
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: true
      }
    },
    async ({ id }) => executeTool(async () => {
      const task = await store.completeTask(id);
      return `Task ${task.id} er markeret som færdig: ${task.title}`;
    })
  );

  server.registerPrompt(
    "plan_next_work_session",
    {
      title: "Planlæg næste arbejdssession",
      description: "Opretter en arbejdsprompt baseret på de åbne tasks",
      argsSchema: z.object({
        duration: z
          .enum(["30", "60", "90"])
          .describe("Arbejdssessionens længde i minutter")
      })
    },
    ({ duration }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text:
              `Læs resourcen tasks://all. Lav derefter en realistisk plan for en ` +
              `arbejdssession på ${duration} minutter. Prioritér kun tasks, der ikke er færdige. ` +
              `Du må ikke ændre tasks.`
          }
        }
      ]
    })
  );

  return server;
}

async function executeTool(action) {
  try {
    const message = await action();
    return {
      content: [{ type: "text", text: message }]
    };
  } catch (error) {
    const message =
      error instanceof TaskStoreError
        ? error.message
        : "Serveren kunne ikke udføre handlingen.";

    console.error("Tool-fejl:", error);

    return {
      content: [{ type: "text", text: message }],
      isError: true
    };
  }
}

void serveStdio(createServer);

console.error("Study Tasks MCP-server kører over stdio.");
