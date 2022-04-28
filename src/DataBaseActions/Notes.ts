import { readFileSync, writeFileSync } from "fs";
import { Note } from "@/types";

export const dbPath = __dirname + "/../db.json";

export const getNotesFromDb = (): Note[] => {
  const dataBase = readFileSync(dbPath);

  return JSON.parse(dataBase.toString()).notes;
};

export const insertNoteIntoDb = (note: string | null) => {
  if (!note) throw new Error("Hubo un error al cargar la nota");

  const dataBase = readFileSync(dbPath);
  const entireDb = JSON.parse(dataBase.toString());
  const allNotes = JSON.parse(dataBase.toString()).notes;

  const newNote: Note = {
    id: allNotes.length,
    note: note,
    userId: "",
  };

  entireDb.notes.push(newNote);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};
