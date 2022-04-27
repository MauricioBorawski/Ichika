import { Interaction } from "discord.js";
import { readFileSync, writeFileSync } from "fs";
import { Note, User } from "./types";

const dbPath = __dirname + "/../db.json";

const db = readFileSync(dbPath);

const getDb = () => JSON.parse(db.toString());

export const getNotesFromDb = (): Note[] => {
  const dataBase = readFileSync(dbPath);

  return JSON.parse(dataBase.toString()).notes;
};

export const getUserList = () => {
  const dataBase = readFileSync(dbPath);

  return JSON.parse(dataBase.toString()).users;
};

export const insertNoteIntoDb = (note: string | null) => {
  if (!note) throw new Error("Hubo un error al cargar la nota");

  const entireDb = getDb();
  const allNotes = getNotesFromDb();

  const newNote: Note = {
    id: allNotes.length,
    note: note,
  };

  entireDb.notes.push(newNote);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};

export const registerUser = (intereaction: Interaction) => {
  if (!intereaction.isCommand()) return;

  const entireDb = getDb();
  const usersDb = getUserList();

  const newUser: User = {
    id: usersDb.length as number,
    userName: intereaction.user.username,
    discordId: intereaction.user.id,
    password: "",
  };

  entireDb.users.push(newUser);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};

export const checkLoggin = () => {};
