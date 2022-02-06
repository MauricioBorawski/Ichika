import { SlashCommandBuilder } from "@discordjs/builders";
import { Interaction } from "discord.js";
import { insertNoteIntoDb } from "../../ConnectDb";

export const createNote = () => {};

const createNoteCommand = new SlashCommandBuilder()
  .setName("create")
  .setDescription("creates a new note.")
  .addStringOption((option) =>
    option.setName("add_note").setDescription("note:").setRequired(true)
  );

export const test = {
  data: createNoteCommand,
  async execute(interaction: Interaction) {
    console.log("Funciono :v");
  },
};
