import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { registerNewNote } from "../../DataBaseActions/Notes";

export const createNoteCommand = new SlashCommandBuilder()
  .setName("create")
  .setDescription("Create a new note")
  .addStringOption((option) =>
    option.setName("note").setDescription("Insert note").setRequired(true)
  );

export const createNote = (interaction: CommandInteraction) => {
  const userInput = interaction.options.getString("note");
  const userId = interaction.member?.user.id;

  if (!userInput || !userId) {
    interaction.reply({
      embeds: [
        {
          description: `There was an error with the input of the note. Please try again.`,
          color: "RED",
        },
      ],
      ephemeral: true,
    });

    return;
  }

  registerNewNote({
    note: userInput,
    userId: userId,
  }).then(() => {
    interaction.reply({
      ephemeral: true,
      embeds: [{ color: "GREEN", description: "Note succesfuly created" }],
    });
  });
};
