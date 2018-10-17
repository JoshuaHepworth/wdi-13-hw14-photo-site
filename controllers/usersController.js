const express = require('express')
const router = express.Router()
const User = require('../models/users')

//index
router.get('/', (req, res) => {
	User.find({}, (err, foundUsers) => {
		res.render('users/index.ejs', {
			users: foundUsers
		})
	})
})
//new
router.get('/new', (req, res) => {
	res.render('users/new.ejs')
})
//show
router.get('/:id', async (req, res) => {
	try {
	const foundUser = await Users.findById(req.params.id)
	res.render('users/show.ejs', {
		user: foundUser
	});
	} catch(err){
		res.send(err)
	}
})
//edit

//post
router.post('/', (req, res) => {
	User.create(req.body, (err, newUser) =>  {
		if(err){
			console.log(err)
		} else {
			console.log(newUser)
		}
		res.redirect('/users')
	})
})
//new

//edit put

//delete



























module.exports = router;