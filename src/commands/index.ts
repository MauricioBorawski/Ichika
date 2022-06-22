import { Interaction } from "discord.js";
import { getNotes, getNoteCommand } from "./GetNotesCommand";
import { createNote, createNoteCommand } from "./CreateNoteCommand";
import { registerCommand, registerUserCommand } from "./CreateUserCommand";

export type Command = "notes" | "create" | "register";

// TypeGuards
function isCommand(command: string): command is Command {
  return command === "notes" || command === "create" || command === "register";
}

export interface Commands {
  name: Command;
  description: string;
  response: any;
}

export const commands: any[] = [
  getNoteCommand.toJSON(),
  createNoteCommand.toJSON(),
  registerUserCommand.toJSON(),
];

const responses: Record<Command, Pick<Commands, "response">> = {
  notes: {
    response: getNotes,
  },
  create: {
    response: createNote,
  },
  register: {
    response: registerCommand,
  },
};

/**
 * Handles the interactions for the commands.
 * @param interaction The interaction object that is received from Discord
 * @returns void
 */
export const respondInteraction = (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (isCommand(commandName)) responses[commandName].response(interaction);
};
