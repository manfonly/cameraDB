'use strict';

var mongoose = require('mongoose'),
	cameras = mongoose.model('Cameras');

exports.list_all_cameras = function(req, res) {
	cameras.find({}, function(err, camera) {
		if (err) {
			res.send(err);
		} else {
			res.json(camera);
		}
	});
};

exports.find_a_camera = function(req, res) {
	cameras.find({name: req.params.cameraName},function(err, camera) {
		if (err) {
			res.send(err);
		} else {
			res.json(camera);
		}
	});
};
