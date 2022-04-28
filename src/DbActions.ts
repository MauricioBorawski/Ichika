import { readFileSync, writeFileSync } from "fs";
import { Note, User, UserData } from "./types";

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

  const dataBase = readFileSync(dbPath);
  const entireDb = JSON.parse(dataBase.toString());
  const allNotes = JSON.parse(dataBase.toString()).notes;

  const newNote: Note = {
    id: allNotes.length,
    note: note,
  };

  entireDb.notes.push(newNote);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};

export const inserUserIntoDb = (user: UserData | null) => {
  if (!user) throw Error("Hubo un error al registrarte");

  const dataBase = readFileSync(dbPath);
  const entireDb = JSON.parse(dataBase.toString());
  const usersDb = JSON.parse(dataBase.toString()).users;

  const newUser: User = {
    id: usersDb.length as number,
    userName: user.username,
    discordId: user.discordId,
    password: user.password,
  };

  entireDb.users.push(newUser);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};

export const checkLoggin = () => {};
