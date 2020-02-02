const express = require('express');
const router = express.Router();

require("./routes/htmlRoutes")(router);
require("./routes/workouts")(router);
require("./routes/stats")(router);

module.exports = router