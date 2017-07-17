'use strict';

var mongoose = require('mongoose'),
	cameras = mongoose.model('cameras');

exports.list_all_cameras = function(req, res) {
	cameras.find({}, function(err, camera) {
		if (err) {
			res.send(err);
		} else {
			res.json(camera);
		};
	})
};


