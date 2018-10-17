const express = require('express')
const router = express.Router()

//index
router.get('/', (req, res) => {
	res.render(req.body)
})
//new
router.get('/new', (req, res) => {
	res.render('users/new.ejs')
})
//show

//edit

//new

//edit put

//delete



























module.exports = router;