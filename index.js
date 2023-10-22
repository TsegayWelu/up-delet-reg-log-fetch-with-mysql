const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const conn = require('./db'); // import conn from db.js

app.use(cors());
app.use(express.json());

const lister = require('./controllers/list');
app.get('/list', lister.list);

const log = require('./controllers/login');
app.post('/login', log.login);

const updater = require('./controllers/update');
app.put('/update', updater.update);

const reg = require('./controllers/allfunction');
app.post('/regist', reg.register);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});















/* app.get('/list', (req, res) => {

    conn.query('SELECT * FROM register ', (err, results) => {
      if (err) {
        console.error(err);
        return;
      }

      // The results variable will contain an array of objects, where each object represents a row in the user table
      res.send(results)
    });
  }) */

//to login compare email and password from databases 
/* app.post('/login',(req,res)=>{
//   console.log(req.body); to check if data is comming
//  res.send({record:req.body});
 const password = req.body.password
const email = req.body.email  //ezi be bhade malet eyu
//const{email,password}=req.body//email,password ms html mare ykun tekeyrkayo ayserhn
console.log({email,password})
//const {password, name} = req.body
})  */
/* app.post('/login', (req, res) => {
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
      return res.status(200).send('Login successful');
    } else {
      // Email and password do not match
      return res.status(401).send('Invalid email or password');
    }
  });
});
 */

//to update user name or email
/* app.put('/update',(req,res)=>{
  const email=req.body.email;
  const password=req.body.password;

  console.log(email+password);
  //res.send({record:req.body});



  const sql = `UPDATE register SET password = '${password}' WHERE email = '${email}'`;
  conn.query(sql, function(err, result) {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating name');
    } else {

      console.log('passowrd updated successfully');
      res.send({msg: 'password updated successfully',result});
    }
  });


}) */