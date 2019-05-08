'use strict';

const mysql = require('mysql');
const util = require('util');
const keys = require('../config/keys');

const pool = mysql.createPool({
    host: keys.HOST,
    port: keys.PORT,
    user: keys.USER,
    password: keys.PASSWORD,
    database: keys.DATABASE,
  });

// promisify pool.query to use async/await
pool.query = util.promisify(pool.query);

pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
      if (err) {
          console.log(err);
      }
  }
  if (connection) connection.release()
  return
})

module.exports = pool