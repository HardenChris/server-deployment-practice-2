'use strict';

const express = require('express');

//express() ->  singleton pattern, returns an object that can be modified. is only ran once or separate apps will be started.
const app = express();

const messages = [];

class Message {
  constructor(text, author) {
    this.text = text;
    this.author = author;
  }
}




// 2 things
// Route - String routes
// Callback func. - tells the route to do, using 2 params: Request and the Response
app.get('/message', (request, response) => {
  console.log('Someone sent a request!: ' + request.method);
  // create a message and send it back?

  response.send(messages);
});// this method/ func modifies out app singleton

// app.get('/message', (request, response) => {
//
// });

function createMessage(request, response, next) {
  const messageText = request.query.text;
  const authorName = request.query.author;

  console.log('Message is created');

  if (!messageText || !authorName) {
    next('Missing text or author value');
  } else {
    const message = new Message(messageText, authorName);// creates the message
    request.message = message;
    next();
  }
}

function saveMessage(request, response, next) {
  console.log('We can see any data that was added to the request', request.message);
  let message = request.message;
  messages.push(message);
  next();
}
//old way old creating a  message and saving it
// // POST -> http://localhost:3000/message?text=SomeString&author=Chris
// app.post('/message', (request,response, next) => {
//   //create message and send it back?

//   const messageText = request.query.text;
//   const authorName= request.query.author;

//   next('an error has occurred');


//   const message = new Message(messageText, authorName);// creates the message
//   messages.push(message);
//   response.send(message);
// });


// POST -> http://localhost:3000/message?text=SomeString&author=Chris
app.post('/message', createMessage, saveMessage, (request,response, next) => {

  response.send(messages);
});


app.use(function (error, request, response, next) {
  console.log(error);
  response.send('Error Handler hit!');
});

app.use(function(request, response) {
  response.status(404).send('Incorrect pathway');
});





// module.exports = app;


module.exports = {
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on : ' + port);
    });
  },
  app,
};
