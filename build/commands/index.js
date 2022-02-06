"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respondInteraction = exports.commands = void 0;
// TypeGuards
function isCommand(command) {
    return command === "new" || command === "register";
}
exports.commands = [
    {
        name: "new",
        description: "Creates a new note ✏."
    },
];
const responses = {
    new: {
        response: "Pong",
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
