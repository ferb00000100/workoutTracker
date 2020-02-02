const Workout = require('../../models/workout')

module.exports = function (router) {

	router.get("/api/workouts", (req, res) => {
		Workout.find({}, (error, results) => {
			if (error) {
				console.log(error);
			} else {
				res.json(results);
			}
		});
	});

	router.post("/api/workouts", function (req, res) {
		// console.log('you are at /api/workouts');
		Workout.create({})
			.then(data => res.json(data))
			.catch(err => {
				console.log("err", err)
				res.json(err)
			})
	});

	router.put("/api/workouts/:id", ({ body, params }, res) => {
		// console.log('you are at /api/workouts/:id');
		Workout.findByIdAndUpdate(
			params.id,
			{ $push: { exercises: body } },
			{ new: true, runValidators: true }
		)
			.then(data => res.json(data))
			.catch(err => {
				console.log("err", err)
				res.json(err)
			})
	});
}