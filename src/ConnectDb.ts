import { readFileSync } from "fs";
import { Note } from "./types"; 

const db = readFileSync(__dirname + "/../db.json");

export const getNotesFromDb = (): Note[] => JSON.parse(db.toString()).notes;
