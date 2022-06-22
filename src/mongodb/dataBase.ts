import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

config();

const { DATA_BASE_PASS, DATA_BASE_USER } = process.env;

const uri = `mongodb+srv://${DATA_BASE_USER}:${DATA_BASE_PASS}@cluster0.rmzmbmd.mongodb.net/?retryWrites=true&w=majority`;

export const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

export const connectToDb = () => {
  client.connect(async (err) => {
    const collection = client.db("Ichika").collection("users");
    if (err) console.log(err);

    const result: any[] = [];

    // perform actions on the collection object
    const users = await collection.findOne();

    console.log(users!.users);

    client.close();
  });
};
