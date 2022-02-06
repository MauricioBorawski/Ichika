// Require the necessary discord.js classes
import { config } from "dotenv";
import { Client ,Intents } from "discord.js";
import { respondInteraction } from "./commands";

config();

const { TOKEN } = process.env;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  respondInteraction(interaction);
});

// Login to Discord with your client's token
client.login(TOKEN);
