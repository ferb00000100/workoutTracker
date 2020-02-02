const path = require('path');

module.exports = function (router) {

	router.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../../public/index.html'));
	});

	router.get('/exercise', (req, res) => {
		res.sendFile(path.join(__dirname, '../../public/exercise.html'));
	});

	router.get("/stats", function(req, res){
		res.sendFile(path.join(__dirname, "../../public/stats.html"));
	});


}
