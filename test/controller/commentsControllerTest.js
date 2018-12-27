// cung cap thu vien de check expected
const { expect, assert } = require('chai');

// thu vien de tao spies, stubs, mocks.
const sinon = require('sinon');

// integration test
const comments = require('../../controller/commentsController');

describe("check comments", function() {
	beforeEach(function() {
	    sinon.stub(db.comments, 'findAll');
	});

	afterEach(function() {
	    db.comments.findAll.restore();
	});

	it('return error message', function(){
		// express router

	});
	
});

