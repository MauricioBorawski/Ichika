"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = exports.getNoteCommand = void 0;
const builders_1 = require("@discordjs/builders");
const DbActions_1 = require("../../DbActions");
exports.getNoteCommand = new builders_1.SlashCommandBuilder()
    .setName("notes")
    .setDescription("Displays the list for all of your notes.");
const getNotes = () => {
    const notes = (0, DbActions_1.getNotesFromDb)();
    const generateResponse = () => {
        const arr = [];
        notes.map(({ note }, i) => {
            const editedNote = `${i + 1}. ` + note;
            arr.push(editedNote);
        });
        return arr.length >= 1 ? arr.join("\r\n") : "Please create a note.";
    };
    return { content: generateResponse(), ephemeral: true };
};
exports.getNotes = getNotes;
