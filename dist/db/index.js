import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGO_URI;
let _db;
export const mongoConnect = (callback) => {
    MongoClient.connect(uri)
        .then((client) => {
        console.log("Connected!");
        _db = client.db();
        callback();
    })
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
export const getDb = () => {
    if (_db) {
        console.log(_db);
        return _db;
    }
    throw "No database found!";
};
