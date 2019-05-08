'use strict';

const express = require('express');
const app = express();
const pool = require('./middlewares/database');
const port = 8081;

app.get('/api/v1/listings', async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM airbnb_database LIMIT 100');
    res.send(results);
  } catch (error) {
    throw new Error(error);
  }
})

app.get('/api/v1/listings/:id', async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM airbnb_database WHERE id=${req.params.id}`);
    res.send(results);
  } catch (error) {
    throw new Error(error);
  }
})


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});