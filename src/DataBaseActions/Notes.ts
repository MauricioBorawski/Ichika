import { readFileSync, writeFileSync } from "fs";
import { Note } from "@/types";

export const dbPath = __dirname + "/../db.json";

export const getNotesFromDb = (userId?: string): Note[] => {
  const dataBase = readFileSync(dbPath);

  return JSON.parse(dataBase.toString()).notes.filter(
    (id: Note) => id.userId === userId
  );
};

export const insertNoteIntoDb = (note: Pick<Note, "note" | "userId">) => {
  if (!note) throw new Error("Hubo un error al cargar la nota");

  const dataBase = readFileSync(dbPath);
  const entireDb = JSON.parse(dataBase.toString());
  const allNotes = JSON.parse(dataBase.toString()).notes;

  const newNote: Note = {
    id: allNotes.length,
    note: note.note,
    userId: note.userId,
  };

  entireDb.notes.push(newNote);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};
