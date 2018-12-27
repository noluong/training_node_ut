const db = require('../model/db');
const express = require('express');
let router = express.Router({mergeParams: true});

let whereClause = {nickname: 'nola'};

router.get('/', function(req, res) {
	try {
		let comments = db.comments.findAll({ where: whereClause }).then(comments => {
	  		JSON.stringify(comments);
		})

		res.status(200);
		res.json({
			'comments': comments
		});
	} catch(err) {
		res.status(err.status || 500);
	  	res.json({'errors': {
		    message: err.message,
		    error: {}
	  	}});
	} 
});

module.exports = router;