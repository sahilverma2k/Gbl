//const mongoose = require("mongoose");
//const config = require("./config");
//const uri = `mongodb://${config.development.mongodb.hostname}:${config.development.mongodb.port}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let MongoClient = require("mongodb").MongoClient;
//Create a database named "mydb":
let url = "mongodb+srv://sahilverma2k:janakpuri@cluster0.fiivibo.mongodb.net/?retryWrites=true&w=majority";
let _db;

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, client) {
      _db = client.db("GBL_data");
      if (err) throw err;
      resolve();
      console.log("Database created!");
    });
  });
}

function getDB() {
  console.log("entered getDB");
  return _db;
}
module.exports = {
  connect,
  getDB,
};
