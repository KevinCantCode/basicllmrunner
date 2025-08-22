import OpenAI from "openai";
import { createInterface } from "readline";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function askLLM(userInput) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: `You are a helpful assistant.`,
      },
      { role: "user", content: userInput },
    ],
  });

  return completion.choices[0].message.content;
}

// Simple runner
const rl = createInterface({ input: process.stdin, output: process.stdout });

async function runAgent() {
  console.log("🤖 Simple LLM Agent Ready!");

  while (true) {
    const input = await new Promise((r) => rl.question("\nYou: ", r));
    if (input.toLowerCase() === "exit") break;

    const response = await askLLM(input);
    console.log(`\nAgent: ${response}`);
  }

  rl.close();
}

runAgent();
