"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = void 0;
const ConnectDb_1 = require("../../ConnectDb");
const getNotes = () => {
    const notes = (0, ConnectDb_1.getNotesFromDb)();
    const generateResponse = () => `${notes.map((note) => note.note)}\n`;
    return { content: "Pong", ephemeral: true };
};
exports.getNotes = getNotes;
