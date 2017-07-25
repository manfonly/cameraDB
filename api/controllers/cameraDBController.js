'use strict';

var mongoose = require('mongoose'),
	cameras = mongoose.model('Cameras');

exports.list_all_cameras = function(req, res) {
	cameras.find({}).select('name').exec(function(err, camera) {
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

exports.rank_camera = function(req, res) {
	cameras.find({mobile: req.params.isMobile}).sort({score: -1})
	.limit(5).select('maker name score').exec(function(err, ranks) {
		if (err) {
			res.send(err);
		} else {
			res.json(ranks);
		}
	});
};
