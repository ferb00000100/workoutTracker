const path = require('path');
const Workout = require('../../models/workout')

module.exports = function (router) {


	router.get("/api/workouts/range", function(req, res){
		Workout.find({}, (error, results) => {
			if (error) {
				console.log(error);
			} else {
				res.json(results);
			}
		});
	});

}