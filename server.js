const express = require("express");
const mongoose = require("mongoose");
const api = require('./api')
const bodyParser = require("body-parser");
const app = express();

app.set('port', (process.env.PORT || 8080))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', api)
app.use(function (req, res) {
	const err = new Error('Route Not Found')
	err.status = 404;
	res.json(err);
})

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
// 	useNewUrlParser: true
// });
// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'));

app.listen(app.get('port'),function() {
	console.log('Now listening on port:' +  app.get('port'));
});

