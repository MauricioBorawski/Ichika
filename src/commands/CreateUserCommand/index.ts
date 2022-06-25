import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { registerUser } from "../../DataBaseActions/Users";
import { formatDate } from "./utils";


// TODO Add validation for password
// TODO Add security for password

export const registerUserCommand = new SlashCommandBuilder()
  .setName("register")
  .setDescription("Register as a new user.")
  .addUserOption((option) =>
    option
      .setName("username")
      .setDescription("Please enter your username, like this @username")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("password")
      .setDescription("Please enter your password:")
      .setRequired(true)
  );

/**
 * RegisterCommand is a function that takes a CommandInteraction as a parameter and returns nothing.
 * @param {CommandInteraction} interaction - CommandInteraction
 * @returns a promise.
 */
export const registerCommand = (interaction: CommandInteraction) => {
  const password = interaction.options.getString("password");
  const username = interaction.options.getUser("username")?.username;
  const discordId = interaction.options.getUser("username")?.id;

  if (!password || !username || !discordId) {
    interaction.reply({
      content:
        "I couldn't complete the registration due to a bad credencials. Please check the credentials.",
      ephemeral: true,
    });
    return;
  }

  registerUser({ username, password, discordId })
    .then(() => {
      interaction.reply({
        content: "Your register has been completed. Thanks for the register.",
        ephemeral: true,
      });
    })
    .catch((err: Error) => {
      interaction.reply({
        ephemeral: true,
        embeds: [{ color: "RED", description: err.message }],
      });

      console.error({
        description: `Register user error`,
        discordId: `${discordId}`,
        time: formatDate(new Date()),
      });
    });
};
