const express = require('express');
const bodyParser = require('body-parser');
const basicController = require('./controller/basicController');
const commentsController = require('./controller/commentsController');
// const asyncController = require('./controller/asyncController');

var app = express();

app.use(bodyParser.json());

//routes
// connect DB
// how to mock DB
app.use('/comments', commentsController);

// how to test async
// app.use('/async', asyncController);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen( 3000, function(){
  console.log('Listening on port 3000');
});