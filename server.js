const express = require('express');
const app = express();

//DB
require('./db/db');

//CONTROLLER
const usersController = require('./controllers/usersController');

//MIDDLEWARE
app.use('./users', usersController);





app.get('/', (req, res) => {
	res.render('users/index.ejs')
});



















app.listen(3000, () => {
	console.log('app listening on port 3000')
});