import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri: string = process.env.MONGO_URI as string;

let _db: Db;

export const mongoConnect = (callback: () => void) => {
  MongoClient.connect(uri)
    .then((client: MongoClient) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err: Error) => {
      console.log(err);
      throw err;
    });
};

export const getDb = (): Db => {
  if (_db) {
    console.log(_db);
    return _db;
  }
  throw "No database found!";
};
