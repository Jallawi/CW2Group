const express = require('express');
const app = express();
const port = 3000;

//lessons data
const lessons = [
  { topic: 'math', location: 'Hendon', price: 100 },
  { topic: 'math', location: 'Colindale', price: 80 },
  { topic: 'math', location: 'Brent Cross', price: 90 },
  { topic: 'math', location: 'Golders Green', price: 120 }
];


// user data
const User = [{
    "Email":  "abc@gmail.com",
    "password": "123$$$123",
}]


//lessons get request 
app.get('/lessons', (req, res) => {
   // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.json(lessons);
  });


  //users get request 
  app.get('/user', (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
     res.json(User);
   });
  

   //assigning port to server 
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/lessons`);
  });