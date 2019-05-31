//FUNCTIONS FOR ROUTING WHICH INCLUDES THE LOGIC FOR EACH ROUTE

var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

//ROUTE FOR THE ROOT FILE /
router.get('/', function(req, res) {
	res.redirect('/burgers');
});

//ROUTE FOR THE /BURGERS WHICH CREATES AN OBJECT WITH THE BURGERS DATA AND RENDERS IN USING HANDLEBARS IN INDEX.HANDLEBARS FILE
router.get('/burgers', function(req, res) {
	burgers.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		//console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.post('/burgers/create', function(req, res) {
	console.log(req.body.name);
	console.log(req.body.devoured);
	burgers.create(['name', 'devoured'], [req.body.name, req.body.devoured], function() {
		res.redirect('/burgers');
	});
});




module.exports = router;
