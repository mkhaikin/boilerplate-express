const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

// Serve a simple html file
app.get('/', (req,res) => {
	res.sendFile( __dirname + '/views/index.html')
});

app.get('/json', (req,res) => {
	if(process.env.MESSAGE_STYLE==="uppercase"){
		res.json({"message": "HELLO JSON"});
	} else {
			res.json({"message": "Hello json"});
	}
});















 module.exports = app;
