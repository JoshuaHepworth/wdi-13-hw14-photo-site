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
	const foundUser = await User.findById(req.params.id)
	res.render('users/show.ejs', {
		user: foundUser
	});
	} catch(err){
		res.send(err)
	}
})
//edit
router.get('/:id/edit', (req, res) => {
	User.findById(req.params.id, (err, editUser) => {
		res.render('users/edit.ejs', {
			user: editUser
		})
	})
})

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


// put
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, (err, updateUser) => {
    res.redirect('/users');
  });
});
//delete
router.delete('/:id', (req, res) => {
  User.findOneAndDelete(req.params.id, (err, deletedUser) => {
    const photosIds = [];

    for (let i = 0; i < deletedUser.photos.length; i++){
      photoIds.push(deletedUser.photos[i].id);
    }
    Photo.deleteMany({
      _id: {
        $in: photoIds
      }
    }, (err, data) => {
      res.redirect('/users');
    });
  });
});

module.exports = router;