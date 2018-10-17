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
	users.create(req.body, () =>  {
		
	})
})
//new

//edit put

//delete



























module.exports = router;