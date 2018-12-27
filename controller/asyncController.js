const db = require('../model/db');
const express = require('express');
let router = express.Router();

let whereClause = {};

router.get('/', (req, res) => {
	(async () => {
	    let count = await db.comments.count();
		let comments = await db.comments.findAll({
			where: whereClause
		});
		res.status(200);
		res.json({
			'count': count,
			'comments': comments
		});
	})().catch(err) {
		res.status(err.status || 500);
  		res.json({'errors': {
		    message: err.message,
		    error: {}
	  	}});
	};
});
module.exports = router;