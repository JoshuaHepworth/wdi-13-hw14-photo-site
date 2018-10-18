const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//DB
require('./db/db');

//CONTROLLER
const usersController = require('./controllers/usersController');
const photosController = require('./controllers/photosController');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/users', usersController);
app.use('/photos', photosController)





app.get('/', (req, res) => {
	res.send('Welcome Home')
});



















app.listen(4000, () => {
	console.log('app listening on port 3000')
});