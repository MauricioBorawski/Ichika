import { readFileSync, writeFileSync } from "fs";
import { User, UserData } from "../types";

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
