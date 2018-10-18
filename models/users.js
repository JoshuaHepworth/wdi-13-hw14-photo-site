const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersSchema = new mongoose.Schema({
	username: {type: String, unique: true},
	password: {type: String, required: true}
})

module.exports = mongoose.model('User', usersSchema)