"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNoteIntoDb = exports.getNotesFromDb = void 0;
const fs_1 = require("fs");
const db = (0, fs_1.readFileSync)(__dirname + "/../db.json");
const getDb = () => JSON.parse(db.toString());
const getNotesFromDb = () => JSON.parse(db.toString()).notes;
exports.getNotesFromDb = getNotesFromDb;
const insertNoteIntoDb = (note) => {
    if (!note)
        throw new Error("Hubo un error al cargar la nota");
    const entireDb = getDb();
    const allNotes = (0, exports.getNotesFromDb)();
    const newNote = {
        id: allNotes.length,
        note: note,
    };
    entireDb.notes.push(newNote);
    (0, fs_1.writeFileSync)(__dirname + "/../db.json", JSON.stringify(entireDb));
};
exports.insertNoteIntoDb = insertNoteIntoDb;
