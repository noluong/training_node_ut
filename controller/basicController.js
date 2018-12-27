module.exports = {
	getIndexPage: (req, res) => {
		res.send("Hey konnichiwa nha!");
	},
	getLogin: (req, res) => {
		if (req.user.isLoggedIn()) {
			return res.send("Hey konnichiwa nha!");
	    }
    	res.send("Ooops. You need to log in to access this page");
	}
}