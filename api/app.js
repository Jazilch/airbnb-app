'use strict';

const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('Im working');
});


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});