'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cameraSchema = new Schema({
	name: {
		type: String,
		Required: 'Camera Name, key word'
	},
	size: {
		type: String,
		Required: 'Camera Sensor Size'
	},
	lens: {
		type: String,
		Required: 'lens focus length'
	},
	score: {
		type: Number,
		max: 150
	},
	resolution: {
		type: String,
		Required: 'CMOS resolution'
	},
	maker: {
		type: String,
		Required: 'Camera Maker Name'
	},
	mobile: {
		type: Boolean,
		Required: 'This is a mobile device or not'
	}
});

module.exports = mongoose.model('Cameras', cameraSchema);

