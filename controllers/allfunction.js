const conn = require('../db'); // import conn from db.js

function register(req, res) {
  const { username, email, password, country } = req.body;
  const sql = 'INSERT INTO register (username, email, password, country) VALUES (?, ?, ?, ?)';
  const values = [username, email, password, country];
  console.log({ body: req.body });
  conn.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error inserting data into the database');
    }
    console.log('Data inserted successfully');
    //res.status(200).send('Data inserted successfully');
  });
  res.send("inserted");
}

module.exports = {
  register
};
