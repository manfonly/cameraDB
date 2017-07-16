'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cameraSchema = new Schema({
	name: {
		type: String,
		Required: 'Camera Name, key word'
	},
	score: {
		type: Number,
		max: 150
	}
});

module.exports = mongoose.model('Camera', cameraSchema);

