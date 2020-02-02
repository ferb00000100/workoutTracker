const path = require('path');
const Workout = require('../../models/workout')

module.exports = function (router) {

	router.get("/stats", function(req, res){
		res.sendFile(path.join(__dirname, "../../public/stats.html"));
	});


	router.get("/api/workouts/range", function(req, res){
		console.log(req.body);
		Workout.find({}, (error, results) => {
			if (error) {
				console.log(error);
			} else {
				res.json(results);
			}
		});
	});

}