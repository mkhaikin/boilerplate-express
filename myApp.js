const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))
// Logger
app.use('*', (req,res,next) => {
	console.log(req.method +" "+req.path+" - "+req.ip);
	next();
})
// Serve a simple html file
app.get('/', (req,res) => {
	res.sendFile( __dirname + '/views/index.html')
});

//path for json output
app.get('/json', (req,res) => {
	res.json({"message": "Hello json"});
});
// response depending on  .enc variables
// app.get('/json', (req,res) => {
// 	if(process.env.MESSAGE_STYLE==="uppercase"){
// 		res.json({"message": "HELLO JSON"});
// 	} else {
// 			res.json({"message": "Hello json"});
// 	}
// });















 module.exports = app;
