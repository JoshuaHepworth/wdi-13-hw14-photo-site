const express = require('express')
const router = express.Router()
const User = require('../models/users')
const Photo = require('../models/photos')


router.get('/', (req, res) => {
	Photo.find({}, (err, foundPhotos) => {
		res.render('photos/index.ejs', {
			photos: foundPhotos
		});
	});
});




























module.exports = router;