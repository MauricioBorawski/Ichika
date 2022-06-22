import { UserDataGetter } from "@/types";
import { client } from ".";

export const getUsers = async () => {
  client.connect((err) => {
    if (err) throw err;
  });

  const collection = client.db("Ichika").collection("users");

  const rawData = await collection.findOne();
  const users: Array<UserDataGetter> = rawData!.users;

  client.close();

  return users;
};
