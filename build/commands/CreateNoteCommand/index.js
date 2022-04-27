"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNote = exports.createNoteCommand = void 0;
const builders_1 = require("@discordjs/builders");
const DbActions_1 = require("../../DbActions");
exports.createNoteCommand = new builders_1.SlashCommandBuilder()
    .setName("create")
    .setDescription("Create a new note.")
    .addStringOption((option) => option.setName("add_note").setDescription("note:").setRequired(true));
const createNote = (interaction) => {
    const userInput = interaction.getString("add_note");
    (0, DbActions_1.insertNoteIntoDb)(userInput);
    return { content: "Note created", ephemeral: true };
};
exports.createNote = createNote;
