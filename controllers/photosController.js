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

router.get('/new', (req, res) => {
	User.find({}, (err, allUsers) => {
		res.render('photos/new.ejs', {
			users: allUsers
		})
	})
})

router.get('/:id', (req, res)=>{
  Photo.findById(req.params.id, (err, foundPhoto)=>{
    User.findOne({'photos._id': req.params.id}, (err, foundUser) => {
        res.render('photos/show.ejs', {
          photo: foundPhoto,
          user: foundUser
      });
    });
  });
});
router.get('/:id/edit', (req, res) => {
	Photo.findById(req.params.id, (err, editPhoto) => {
		res.render('photos/edit.ejs', {
			photo: editPhoto
		})
	})
})

router.post('/', (req, res) => {
	Photo.create(req.body, (err, createdPhoto) => {
		if(err){
			console.log(err)
		} else {
			res.redirect('/photos')
		}
	})
})
router.put('/:id', (req, res) => {
	 Photo.findByIdAndUpdate(req.params.id, req.body, (err, updatePhoto) => {
    res.redirect('/photos');
  });
});

router.delete('/:id', (req, res)=>{
  Photo.findByIdAndRemove(req.params.id, (err, deletedPhoto)=>{
    // User.findOne({'photos._id': req.params.id}, (err, foundUser) => {
      // foundUser.photos.id(req.params.id).remove();
      // foundUser.save((err, data) => {
         res.redirect('/photos');
      });
    })
  // });
// });





















module.exports = router;