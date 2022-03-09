const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
const Prediction =require("..models/Prediction")

// This will help us connect to the database
const dbo = require("../db/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
router.route("/InsightToNextYear").get(function (req, res) {
  let db_connect = dbo.getDb("InsightToNextYear");
  db_connect
    .collection("predictions")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// This section will help you get a single record by id
router.route("/InsightToNextYear/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("predictions")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
router.route("/InsightToNextYear/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
      boot: req.body.boot_winner,
      second: req.body.second_place,
      third: req.body.third_place,
      fourth: req.body.fourth_place,
      fifth: req.body.fifth_place,
      flag: req.body.flag_winner,
  };
  db_connect.collection("predictions").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
router.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
        boot_winner: req.body.boot_winner,
        second_place: req.body.second_place,
        third_place: req.body.third_place,
        fourth_place: req.body.fourth_place,
        fifth_place: req.body.fifth_place,
        flag_winner: req.body.flag_winner,
    },
  };
  db_connect
    .collection("predictions")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
router.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("predictions").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = router;