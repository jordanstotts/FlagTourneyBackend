// const express = require('express');
// // const { requireToken } = require('../middleware/authorization');

// const router = express.Router()
// const Prediction = require('../models/Prediction')
// // console.log(Trip)
// // const { requireToken } =require('../middleware/authorization')
// // const res = require('express/lib/response')
// // add require token in after all route testing and  authorization built Stretch

// //get all trips add requireToken after figuring out how to store token in a cookie,
// router.get("/", async (req, res, next) => {
//     try{
//         const prediction = await Prediction.find({});
//         res.json(prediction); 
//     } catch (err) {
//         next(err);
//     }
// });

// //Get one trip by id
// router.get("/:id", async (req, res, next) => {
//     try {
//         const onePrediction = await Prediction.findById(req.params.id);
//         res.json(onePrediction);
//     } catch (err){
//         next(err);
//     }
// });

// //Add a new trip based on the body of the request
// router.post("/", async (req, res, next) => {
//     try {
//         const newPrediction = await Prediction.create(req.body);
//         res.status(201).json(newPrediction);
//     } catch (err) {
//         next(err);
//     }
// });

// //Updating trip data, specify which one by ID
// router.put("/:id", async (req, res, next) => {
//     try {
//         const predictionToUpdate = await Prediction.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {new:true}
//         );
//         res.status(200).json(predictionToUpdate);
//     } catch (err) {
//         next(err);
//     }
// });

// router.patch("/:id", async (req, res, next) => {

//     try {
//         const predictionToUpdate = await Prediction.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {new:true}
//         );
//         res.status(200).json(predictionToUpdate);
//     } catch (err) {
//         next(err);
//     }
// });

// //Delete a trip, specify which one by ID
// router.delete("/:id", async (req, res, next) => {
//     try {
//         const predictionToDelete = await Prediction.findByIdAndDelete(
//             req.params.id
//         );
//         if(predictionToDelete) {
//             res.sendStatus(204); 
//         } else {
//             res.sendStatus(404);
//         }
//     } catch (err) {
//         next(err);
//     }
// });

// module.exports = router