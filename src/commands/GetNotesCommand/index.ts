import { SlashCommandBuilder } from "@discordjs/builders";
import { getNotesFromDb } from "../../ConnectDb";

export const getNoteCommand = new SlashCommandBuilder()
  .setName("notes")
  .setDescription("Displays the list for all of your notes.");

export const getNotes = () => {
  const notes = getNotesFromDb();

  const generateResponse = (): string => {
    const arr: string[] = [];

    notes.map(({ note }, i) => {
      const editedNote = `${i + 1}. ` + note;

      arr.push(editedNote);
    });

    return arr.join("\r\n");
  };

  return { content: generateResponse(), ephemeral: true };
};
