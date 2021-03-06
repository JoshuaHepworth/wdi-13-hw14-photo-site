const mongoose = require('mongoose');
const mongooseUrl = require('mongoose-type-url')
const Schema = mongoose.Schema

const photosSchema = new mongoose.Schema({
	title: String,
	urls: [{type: mongoose.SchemaTypes.Url}]
})

module.exports = mongoose.model('Photo', photosSchema)