const path = require('path');

module.exports = function (router) {

	router.get('/exercise', (req, res) => {
		res.sendFile(path.join(__dirname, '../../public/exercise.html'));
	});

}
