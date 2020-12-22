const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'))

// Serve a simple html file
app.get('/', (req,res) => {
	res.sendFile( __dirname + '/views/index.html')
});

app.get('/json', (req,res) => {
	res.json({"message": "Hello json"});
});















 module.exports = app;
