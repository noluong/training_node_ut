// reference: https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs
// Unit Testing Cheat-sheet: https://gist.github.com/inadarei/0f4fefa5dda2c4d5a8176ca7ef7d4e14
// cung cap thu vien de check expected
const { expect, assert } = require('chai');

// Spies: are fake methods, used to get information about function calls:
// 		  	how many times a function was called,
// 		  	what arguments each call had,
// 		  	what values were returned,
// 		  	what errors were thrown, 
// 		  	checking the order of function calls, etc.
// Stubs: are like spies, except in that they replace the target function.
//			Stubs can be used to replace problematic code, i.e. the code that makes writing tests difficult. 
//			This is often caused by something external - a network connection, a database, or some other non-JavaScript system...
// Mocks: are fake methods, that have pre-programmed behavior and pre-programmed expectations.
// 		 	A mock will fail your test if it is not used as expected.
// 
// thu vien de tao spies, stubs, mocks.
const sinon = require('sinon');

const hello = require('../../controller/basicController');

describe("hello world", function() {
	it("check vu vo", function(){
		expect(true).to.be.true;
		assert.equal(true, true);
	});

	// test function 
	it('return message hello', function(){
		let req = {};
		let res = {
			// send: function(){}
			send: sinon.spy() // spy la gi? 
		};
		hello.getIndexPage(req, res);

		// `res.send` called once
    	expect(res.send.calledOnce).to.be.true;
    	expect(res.send.firstCall.args[0]).to.equal("Hey konnichiwa nha!");
	});

	// test function
	it('check login', function(){
		let user = {
        	isLoggedIn: function(){}
      	}
      	const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(false);

		let req = {user:user};
		let res = {
			// send: function(){}
			send: sinon.spy() // spy la gi? 
		};
		hello.getLogin(req, res);

		// `res.send` called once
    	expect(res.send.calledOnce).to.be.true;
    	// expect(res.send.firstCall.args[0]).to.equal("Hey konnichiwa nha!");
	    expect(res.send.firstCall.args[0]).to.equal("Ooops. You need to log in to access this page");


    	// assert that the stub is logged in at least once
      	expect(isLoggedInStub.calledOnce).to.be.true;
	});
	
});

