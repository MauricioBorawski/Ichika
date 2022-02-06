import { getNotesFromDb } from "../../ConnectDb";

export const getNotes = () => {
  const notes = getNotesFromDb();

  const generateResponse = (): string => `${notes.map((note) => note.note)}\n`

  return { content: "Pong", ephemeral: true };
};