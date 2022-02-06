"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondInteraction = exports.commands = void 0;
const GetNotesCommand_1 = require("./GetNotesCommand");
// TypeGuards
function isCommand(command) {
    return command === "notes" || command === "register";
}
exports.commands = [];
const responses = {
    notes: {
        response: (0, GetNotesCommand_1.getNotes)(),
    },
    register: {
        response: "Pong x2",
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
        interaction.reply(responses[commandName].response);
};
exports.respondInteraction = respondInteraction;
