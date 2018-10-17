const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//DB
require('./db/db');

//CONTROLLER
const usersController = require('./controllers/usersController');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', usersController);





app.get('/', (req, res) => {
	res.send('Welcome Home')
});



















app.listen(3000, () => {
	console.log('app listening on port 3000')
});