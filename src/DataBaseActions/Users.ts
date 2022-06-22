import { readFileSync, writeFileSync } from "fs";
import { getCollection } from "../DataBase";
import { User, UserData } from "../types";

interface RegisterUserReturnType {
  success: boolean;
}

export const dbPath = __dirname + "/../db.json";

export const inserUserIntoDb = (user: UserData | null) => {
  if (!user) throw Error("Hubo un error al registrarte");

  const dataBase = readFileSync(dbPath);
  const entireDb = JSON.parse(dataBase.toString());
  const usersDb = JSON.parse(dataBase.toString()).users;

  const newUser: User = {
    id: usersDb.length as number,
    userName: user.username,
    discordId: user.discordId,
    password: user.password,
  };

  entireDb.users.push(newUser);

  writeFileSync(__dirname + "/../db.json", JSON.stringify(entireDb));
};

/* Mongo Actions  */

export async function registerUser(
  user: UserData | null
): Promise<RegisterUserReturnType> {
  if (!user) throw Error("I am sorry but something happend. Please try again.");

  try {
    await getCollection("users").insertOne(user);
    return { success: true };
  } catch (error) {
    throw Error("I am sorry but I couldn't register. Please try again.");
  }
}
