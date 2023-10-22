const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'info'
});

conn.connect((err) => {
  if (err) {
    console.log('there is an error', err);
  }
  console.log('you connected successfully');
});

module.exports = conn;
