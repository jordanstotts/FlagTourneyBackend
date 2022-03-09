// require('dotenv').config();
// const mongoose = require("mongoose");

// const mongoURI = process.env.DATABASE_URL; 
// const db = mongoose.connection;
// // console.log(mongoURI);

// mongoose.connect(mongoURI);

// // Connection Error/Success messages

// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
// db.on('connected', () => console.log('mongo connected at: remote database in .env'));
// db.on('disconnected', () => console.log('mongo disconnected'));

// // Open the Connection
// db.on('open', () => {
// 	console.log('✅ mongo connection made! 🐉 🌟');
// });

// // now, our mongoose instance has a configured connection to our local db, in addition
// // to its model configuration and can be exported to other files
// module.exports = mongoose;

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("InsightToNextYear");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
};