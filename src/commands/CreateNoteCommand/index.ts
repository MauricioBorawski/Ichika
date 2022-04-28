import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { insertNoteIntoDb } from "../../DataBaseActions/Notes";
import { ApiResponse, Note } from "@/types";

export const createNoteCommand = new SlashCommandBuilder()
  .setName("create")
  .setDescription("Create a new note.")
  .addStringOption((option) =>
    option.setName("create").setDescription("note:").setRequired(true)
  );

export const createNote = (interaction: CommandInteraction): ApiResponse => {
  const userInput = interaction.options.getString("create");
  const userId = interaction.member?.user.id;

  if (!userInput || !userId) throw Error("There was an unexpeted error");

  const generatedNote: Pick<Note, "note" | "userId"> = {
    note: userInput,
    userId: userId,
  };

  insertNoteIntoDb(generatedNote);

  return { content: "Note created", ephemeral: true };
};
