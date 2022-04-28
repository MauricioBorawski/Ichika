import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteractionOptionResolver } from "discord.js";
import { insertNoteIntoDb } from "../../DataBaseActions/Notes";
import { ApiResponse } from "@/types";

export const createNoteCommand = new SlashCommandBuilder()
  .setName("create")
  .setDescription("Create a new note.")
  .addStringOption((option) =>
    option.setName("create").setDescription("note:").setRequired(true)
  );

export const createNote = (interaction: CommandInteractionOptionResolver): ApiResponse => {
  const userInput = interaction.getString("create");

  insertNoteIntoDb(userInput);

  return { content: "Note created", ephemeral: true };
};
