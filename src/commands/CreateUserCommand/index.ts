import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";
import { inserUserIntoDb } from "../../DataBaseActions/Users";
import { UserData, ApiResponse } from "@/types";

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

export const registerCommand = (
  interaction: CommandInteraction
): ApiResponse => {
  const password = interaction.options.getString("password");
  const username = interaction.options.getUser("username")?.username;
  const discordId = interaction.options.getUser("username")?.id;

  if (!password || !username || !discordId)
    throw Error("Hubo un error al cargar los datos");

  const userData: UserData = {
    username,
    password,
    discordId,
  };

  inserUserIntoDb(userData);

  return { content: "Thanks for registering ♥", ephemeral: true };
};
