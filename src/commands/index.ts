import { CommandInteractionOptionResolver, Interaction } from "discord.js";
import { getNotes } from "./GetNotesCommand";
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

export const commands: any[] = [createNoteCommand.toJSON()];

const responses: (
  interaction: any
) => Record<Command, Pick<Commands, "response">> = (interaction: any) => ({
  notes: {
    response: getNotes(),
  },
  create: {
    response: createNote(interaction),
  },
});

/**
 * Handles the interactions for the commands.
 * @param interaction The interaction object that is received from Discord
 * @returns void
 */
export const respondInteraction = (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  if (isCommand(commandName))
    interaction.reply(
      responses(interaction.options ? interaction.options : null)[commandName]
        .response
    );
};
