//this is for registration

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


//this is for log in
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


//this is for update 
function update(req,res){
  const email=req.body.email;
const password=req.body.password;
const sql = `UPDATE register SET password = '${password}' WHERE email = '${email}'`;
conn.query(sql, function(err, result) {
  if (err) {
    console.error(err);
    res.status(500).send('Error updating name');
  } 
  else {
    
    console.log('passowrd updated successfully');
    res.send({msg: 'password updated successfully',result});
  }
  });
}


//this is for list
function list(req,res){

  conn.query('SELECT * FROM register ', (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
  
      // The results variable will contain an array of objects, where each object represents a row in the user table
      res.send(results)
    });


}
module.exports = {
  list,register,update,login
}; 

