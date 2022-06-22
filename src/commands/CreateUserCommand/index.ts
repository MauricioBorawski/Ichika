import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { registerUser } from "../../DataBaseActions/Users";
import { CommandResponseSuccess } from "@/types";
import { isNativeError } from "util/types";

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

  registerUser({ username, discordId, password })
    .then((res) => {
      if (!isNativeError(res)) return res;
    })
    .then(() => {
      interaction.reply({
        content: "Your register has been completed. Thanks for the register.",
        ephemeral: true,
      });
    })
    .catch((err) => {
      interaction.reply({
        content:
          "I am sorry but I couldn't complete the register. Please try again.",
        ephemeral: true,
      });
      console.log(err);
    });
};
