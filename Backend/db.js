const mysql = require('mysql');
require('dotenv').config(); // Load environment variables

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

conn.connect(err => {
  if (err) {
    console.error('DB connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL DB.');
});

module.exports = conn;