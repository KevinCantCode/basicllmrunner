# OpenAI Agent Runner

A simple and lightweight OpenAI LLM agent runner built in JavaScript.

## Demo Files

- `agent.js` - Barebones OpenAI agent (no payment capabilities)
- `env-templete.txt` - Templete for your .env file

## Demo Flow

1. **Show the barebones agent**: Run `npm start` to demonstrate a simple chat agent
2. **Add payment capabilities**: Follow `payment-additions.md` to copy/paste the minimal code changes
3. **Result**: A payment-enabled agent that can transfer money via natural language

## Features

- 🤖 Interactive chat interface with OpenAI models
- 💬 Conversation history management
- ⚙️ Configurable model parameters
- 🔄 System prompt customization
- 📝 Clean, readable codebase

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up your API keys:**

   ```bash
   cp env-template.txt .env
   # Edit .env and add your API keys
   ```

3. **Run the agent:**
   ```bash
   npm start
   ```

## Configuration

Configure the agent by setting environment variables in your `.env` file:

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `OPENAI_MODEL`: Model to use (default: `gpt-3.5-turbo`)
- `TEMPERATURE`: Response randomness 0-1 (default: `0.7`)
- `MAX_TOKENS`: Maximum response length (default: `1000`)

## Usage

### Interactive Chat

Run `npm start` to start an interactive chat session. Type your messages and get responses from the AI. Use `quit`, `exit`, or `q` to end the conversation.

### Programmatic Usage

```javascript
import SimpleAgent from "./agent.js";

const agent = new SimpleAgent();

// Set a custom system prompt
agent.setSystemPrompt("You are a helpful coding assistant.");

// Send a single query
const response = await agent.query("Explain async/await in JavaScript");
console.log(response);

// Get conversation history
const history = agent.getHistory();
```

## Commands

- `npm start` - Start the barebones agent (for demo)
- `npm run start-payments` - Start the payment-enabled agent
- `npm install` - Install dependencies

## Requirements

- Node.js 14+ (ES modules support)
- OpenAI API key
