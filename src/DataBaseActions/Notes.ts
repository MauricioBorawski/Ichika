import { readFileSync, writeFileSync } from "fs";
import { Note } from "@/types";
import { getCollection } from "../DataBase";
import { CommandInteraction } from "discord.js";

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
    note: note.note,
    userId: note.userId,
  };

  entireDb.notes.push(newNote);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};

/*  MongoDB actions   */

export async function registerNewNote(
  note: Pick<Note, "note" | "userId">
): Promise<void> {
  try {
    if (!note) throw new Error("Error while creating note. No note was given.");

    const newNote: Note = {
      note: note.note,
      userId: note.userId,
    };

    await getCollection("notes").insertOne(newNote);
  } catch {
    throw new Error(
      "Error while creating note. There was an error in our server."
    );
  }
}
