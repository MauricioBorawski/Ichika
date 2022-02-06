import { Interaction } from "discord.js";

export type Command = "new" | "register";

// TypeGuards
function isCommand(command: string): command is Command {
  return command === "new" || command === "register";
}

export interface Commands {
  name: Command;
  description: string;
  response: string;
}

export const commands: Pick<Commands, "name" | "description">[] = [
    {
        name: "new",
        description: "Creates a new note."
    },
]

const responses: Record<Command, Pick<Commands, "response">> = {
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
export const respondInteraction = (interaction: Interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  if (isCommand(commandName))
    interaction.reply(responses[commandName].response);
};
