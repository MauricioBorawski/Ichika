import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteractionOptionResolver } from "discord.js";
import { inserUserIntoDb } from "@db/Users";
import { UserData } from "@/types";

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
  interaction: CommandInteractionOptionResolver
) => {
  const password = interaction.getString("password");
  const username = interaction.getUser("username")?.username;
  const discordId = interaction.getUser("username")?.id;

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
