"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondInteraction = exports.commands = void 0;
const GetNotesCommand_1 = require("./GetNotesCommand");
const CreateNoteCommand_1 = require("./CreateNoteCommand");
// TypeGuards
function isCommand(command) {
    return command === "notes" || command === "create";
}
exports.commands = [
    GetNotesCommand_1.getNoteCommand.toJSON(),
    CreateNoteCommand_1.createNoteCommand.toJSON(),
];
const responses = {
    notes: {
        response: () => (0, GetNotesCommand_1.getNotes)(),
    },
    create: {
        response: CreateNoteCommand_1.createNote,
    },
};
/**
 * Handles the interactions for the commands.
 * @param interaction The interaction object that is received from Discord
 * @returns void
 */
const respondInteraction = (interaction) => {
    if (!interaction.isCommand())
        return;
    const { commandName } = interaction;
    if (isCommand(commandName))
        interaction.reply(responses[commandName].response(interaction.options));
};
exports.respondInteraction = respondInteraction;
