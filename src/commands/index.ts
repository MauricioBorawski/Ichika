import { Interaction } from "discord.js";
import { getNotes, getNoteCommand } from "./GetNotesCommand";
import { createNote, createNoteCommand } from "./CreateNoteCommand";

export type Command = "notes" | "create";

// TypeGuards
function isCommand(command: string): command is Command {
  return command === "notes" || command === "create";
}

export interface Commands {
  name: Command;
  description: string;
  response: any;
}

export const commands: any[] = [
  getNoteCommand.toJSON(),
  createNoteCommand.toJSON(),
];

const responses: Record<Command, Pick<Commands, "response">> = {
  notes: {
    response: () => getNotes(),
  },
  create: {
    response: createNote,
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
  if (isCommand(commandName))
    interaction.reply(responses[commandName].response(interaction.options));
};
