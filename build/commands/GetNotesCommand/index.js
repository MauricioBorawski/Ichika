"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = void 0;
const ConnectDb_1 = require("../../ConnectDb");
const getNotes = () => {
    const notes = (0, ConnectDb_1.getNotesFromDb)();
    const generateResponse = () => {
        const arr = [];
        notes.map(({ note }, i) => {
            const editedNote = `${i + 1}. ` + note;
            arr.push(editedNote);
        });
        return arr.join("\r\n");
    };
    return { content: generateResponse(), ephemeral: true };
};
exports.getNotes = getNotes;
