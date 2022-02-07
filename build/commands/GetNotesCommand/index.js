"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNotes = exports.getNoteCommand = void 0;
const builders_1 = require("@discordjs/builders");
const ConnectDb_1 = require("../../ConnectDb");
exports.getNoteCommand = new builders_1.SlashCommandBuilder()
    .setName("notes")
    .setDescription("Displays the list for all of your notes.");
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
