import { getCollection } from "../DataBase";
import { UserData } from "../types";

export async function registerUser(user: UserData | null): Promise<void> {
  if (!user) throw Error("I am sorry but something happend. Please try again.");

  try {
    const newUser = { ...user, enabled: true };

    await getCollection("users").insertOne(newUser);
  } catch (error) {
    throw Error("I am sorry but I couldn't register. Please try again.");
  }
}

export async function deleteUser(discordId: string) {
  if (!discordId) throw Error();

  await getCollection("users").updateOne(
    { discordId: discordId },
    {
      $set: {
        enabled: false,
      },
    }
  );
}
