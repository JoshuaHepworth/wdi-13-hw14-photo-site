const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Photo = require('./photos')

const usersSchema = new mongoose.Schema({
	username: {type: String, unique: true},
	password: {type: String, required: true},
	userPhotos: [Photo.schema]
})

module.exports = mongoose.model('User', usersSchema)