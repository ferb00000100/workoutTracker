const router = require("express").Router();

const db = require("../models");
	// This route works!
	router.get("/api/workouts", (req, res) => {
		db.Workout.find({}, (error, results) => {
			if (error) {
				console.log(error);
			} else {
				res.json(results);
			}
		});
	});

	router.post("/api/workouts/:id", ({body}, res) => {
		const myDate = new Date();
		console.log(body);
		console.log(myDate);
		const exercise = body;
		body.read = false;
		db.Workout.create(exercise, (error, saved) => {
			if (error) {
				console.log(error);
			} else {
				res.send(saved);
			}
		});
	});

// router.post("/api/transaction/bulk", ({ body }, res) => {
// 	Transaction.insertMany(body)
// 		.then(dbTransaction => {
// 			res.json(dbTransaction);
// 		})
// 		.catch(err => {
// 			res.status(400).json(err);
// 		});
// });


	module.exports = router;


