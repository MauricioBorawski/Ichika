"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoggin = exports.registerUser = exports.insertNoteIntoDb = exports.getUserList = exports.getNotesFromDb = void 0;
const fs_1 = require("fs");
const dbPath = __dirname + "/../db.json";
const db = (0, fs_1.readFileSync)(dbPath);
const getDb = () => JSON.parse(db.toString());
const getNotesFromDb = () => {
    const dataBase = (0, fs_1.readFileSync)(dbPath);
    return JSON.parse(dataBase.toString()).notes;
};
exports.getNotesFromDb = getNotesFromDb;
const getUserList = () => {
    const dataBase = (0, fs_1.readFileSync)(dbPath);
    return JSON.parse(dataBase.toString()).users;
};
exports.getUserList = getUserList;
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
const registerUser = (intereaction) => {
    if (!intereaction.isCommand())
        return;
    const entireDb = getDb();
    const usersDb = (0, exports.getUserList)();
    const newUser = {
        id: usersDb.length,
        userName: intereaction.user.username,
        discordId: intereaction.user.id,
        password: "",
    };
    entireDb.users.push(newUser);
    (0, fs_1.writeFileSync)(__dirname + "/../db.json", JSON.stringify(entireDb));
};
exports.registerUser = registerUser;
const checkLoggin = () => { };
exports.checkLoggin = checkLoggin;
