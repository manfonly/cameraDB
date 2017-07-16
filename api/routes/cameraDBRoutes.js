'use strict';
module.exports = function(app) {
	var cameraDB = require('../controllers/cameraDBController');

	// Camera DB Routes
	app.route('/cameras')
		.get(cameraDB.list_all_cameras);
};
