import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteractionOptionResolver } from "discord.js";
import { insertNoteIntoDb } from "../../DbActions";

export const createNoteCommand = new SlashCommandBuilder()
  .setName("create")
  .setDescription("Create a new note.")
  .addStringOption((option) =>
    option.setName("add_note").setDescription("note:").setRequired(true)
  );

export const createNote = (interaction: CommandInteractionOptionResolver) => {
  const userInput = interaction.getString("add_note");

  insertNoteIntoDb(userInput);

  return { content: "Note created", ephemeral: true };
};
