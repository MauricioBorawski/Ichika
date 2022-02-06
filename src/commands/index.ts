import { Interaction } from "discord.js";
import { getNotes } from "./GetNotesCommand";
import {} from "./CreateNoteCommand"

export type Command = "notes" | "register";

// TypeGuards
function isCommand(command: string): command is Command {
  return command === "notes" || command === "register";
}

export interface Commands {
  name: Command;
  description: string;
  response: any;
}

export const commands: any[] = [];

const responses: Record<Command, Pick<Commands, "response">> = {
  notes: {
    response: getNotes(),
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
export const respondInteraction = (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  if (isCommand(commandName))
    interaction.reply(responses[commandName].response);
};
