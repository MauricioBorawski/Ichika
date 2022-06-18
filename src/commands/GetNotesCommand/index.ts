import { CommandResponseSuccess } from "@/types";
import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { getNotesFromDb } from "../../DataBaseActions/Notes";

export const getNoteCommand = new SlashCommandBuilder()
  .setName("notes")
  .setDescription("Displays the list for all of your notes.");

export const getNotes = (
  interaction: CommandInteraction
): CommandResponseSuccess => {
  if (!interaction.member) throw Error("Unexpected error;");

  const notes = getNotesFromDb(interaction.member.user.id);

  const generateResponse = (): string => {
    const arr: string[] = [];

    notes.map(({ note }, i) => {
      const editedNote = `${i + 1}. ` + note;

      arr.push(editedNote);
    });

    return arr.length >= 1 ? arr.join("\r\n") : "Please create a note.";
  };

  return { content: generateResponse(), ephemeral: true };
};
