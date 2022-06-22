import { config } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import { CollectionName } from "@/types";

config();

const { DATA_BASE_PASS, DATA_BASE_USER } = process.env;

const uri = `mongodb+srv://${DATA_BASE_USER}:${DATA_BASE_PASS}@cluster0.rmzmbmd.mongodb.net/?retryWrites=true&w=majority`;

//TODO: Remove export client

export const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

export function getCollection(collectionName: CollectionName) {

  return client.db("Ichika").collection(collectionName);
}
