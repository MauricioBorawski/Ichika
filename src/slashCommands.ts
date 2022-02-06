import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { config } from "dotenv";
import { commands } from "./commands";

config();

const { CLIENT_ID, GUILD_ID, TOKEN } = process.env;

const rest = new REST({ version: "9" }).setToken(TOKEN || "");

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID || "", GUILD_ID || ""),
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
