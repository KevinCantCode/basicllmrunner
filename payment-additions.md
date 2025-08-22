# Adding Payment Capabilities - Copy/Paste Demo

run npm install transferai

## Step 1: Add Import

Add this import after the existing imports:

```javascript
import { createTransferAI } from "transferai";
```

## Step 2: Initialize TransferAI

Copy this after the `dotenv.config();` line:

```javascript
const transferAI = createTransferAI(
  process.env.TRANSFERAI_API_KEY,
  "https://transferai.io"
);
const instructions = transferAI.getSystemPromptInstructions();
```

## Step 3: Update System Message

Replace this line:

```javascript
content: `You are a helpful assistant.`,
```

With:

```javascript
content: `You are a helpful assistant. ${instructions}`,
```

## Step 4: Add Tools to OpenAI Call

Add these two lines to the OpenAI completion call (after the messages array):

```javascript
tools: transferAI.getOpenAITools(), tool_choice: "auto",
```

## Step 5: Handle Tool Calls

Before the return completion line in ask LLM, put this:

```javascript
if (completion.choices[0].message.tool_calls) {
  const toolCall = completion.choices[0].message.tool_calls[0];
  const args = JSON.parse(toolCall.function.arguments);
  return await transferAI.handleToolCall(toolCall.function.name, args);
}
```

---

**That's it! Your agent now has payment capabilities with just a few lines of code.**
