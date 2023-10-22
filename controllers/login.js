
const conn = require('../db'); // import conn from db.js

function login(req,res){

  const password = req.body.password;
  const email = req.body.email;

  // Execute a SELECT query to check if the email and password match
  const query = `SELECT * FROM register WHERE email = ? AND password = ?`;
  conn.query(query, [email, password], (err, results) => {
    if (err) {
      console.log('Error executing query', err);
      return res.status(500).send('Internal Server Error');
    }

    // Check if a matching record was found
    if (results.length > 0) {
      // Email and password match
      console.log("you are loging in ")
      return res.status(200).send('Login successful');
      
     
    } else {
      // Email and password do not match
      return res.status(401).send('Invalid email or password');
    }
  });
}

module.exports = {
  login
};