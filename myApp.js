const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}))
// Serve static assets
app.use(express.static(__dirname + '/public'));

// Logger
app.use('*', (req,res,next) => {
	console.log(req.method +" "+req.path+" - "+req.ip);
	next();
});

// Serve a simple html file
app.get('/', (req,res) => {
	res.sendFile( __dirname + '/views/index.html')
});

//path for json output
app.get('/json', (req,res) => {
	res.json({"message": "Hello json"});
});
// response depending on  .env variables
// app.get('/json', (req,res) => {
// 	if(process.env.MESSAGE_STYLE==="uppercase"){
// 		res.json({"message": "HELLO JSON"});
// 	} else {
// 			res.json({"message": "Hello json"});
// 	}
// });

// "/now" route middleware func responding with current time
app.get('/now', (req,res,next) => {
	req.time = new Date().toString();
	next();
}, (req,res) => {
	res.json({"time":req.time});
});

// Get Route Parameter Input from the Client
app.get('/:word/echo', (req,res,next) => {
	res.json({
		"echo":req.params.word
	});
});

// Get Query Parameter Input from the Client
app.get('/name', (req,res,next) => {
	res.json({
		"name": req.query.first+" "+req.query.last
	});
});

// Use body-parser to Parse POST Requests






 module.exports = app;
