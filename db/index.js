"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = exports.mongoConnect = void 0;
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const Db = require('mongodb').Db;
const uri = process.env.MONGO_URI;
let _db;
const mongoConnect = (callback) => {
    MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((client) => {
        console.log('Connected!');
        _db = client.db();
        callback();
    })
        .catch((err) => {
        console.log(err);
        throw err;
    });
};
exports.mongoConnect = mongoConnect;
const getDb = () => {
    if (_db) {
        console.log(_db);
        return _db;
    }
    throw 'No database found!';
};
exports.getDb = getDb;
