var bodyParser = require('body-parser'),
	cors = require('cors');

module.exports.middleware = function(app,express) {
	app.use(cors());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../../dist'));
};
