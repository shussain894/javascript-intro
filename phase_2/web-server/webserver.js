const express = require('express');
const app = express();
const port = 3000;

let counter = 0;

app.get('/', (req, res) => {
  res.send('Hello, SHAH!');
});

app.post('/counter', (req, res) => {
  counter++;
  res.send();
});

app.get('/counter', (req, res) => {
  res.send(`${counter}`);
});




console.log(`Server listening on localhost:${port}`);
app.listen(port);
