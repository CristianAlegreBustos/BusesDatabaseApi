require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const Db=require('mongodb').Db

const uri:string = process.env.MONGO_URI as string;

let _db:typeof Db;

export const mongoConnect = (callback:()=>void) => {
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
.then((client: typeof MongoClient) => {
    console.log('Connected!');
    _db = client.db();
    callback();
})
.catch((err:Error) => {
    console.log(err);
    throw err;
});
};
export const getDb = (): typeof Db => {
  if (_db) {
    console.log(_db)
    return _db;
  }
  throw 'No database found!';
};