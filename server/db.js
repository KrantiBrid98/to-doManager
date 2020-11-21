const sql = require('mysql2');
require('dotenv').config();

const connection = sql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = connection;
