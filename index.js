const express=require('express' )
const app = express()
const port = 3000
const cors=require("cors")
app.use(cors())
app.use(express.json())
const mysql=require('mysql')
 const conn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'info'
 });
conn.connect((err)=>{
    if(err) {
        console.log('there is an err',err)
    }
    console.log("you connected succesfully")
}); 
app.post('/regist',(req,res)=>{
    /* console.log(req.body);  if the  data is  comeing to check that
  res.send({record:req.body}); */
  // to register on database 
  const {username, email, password, country}=req.body;
  const sql = 'INSERT INTO register (username, email, password, country) VALUES (?, ?, ?, ?)';
  const values = [username, email, password, country];
  console.log({body:  req.body})
  conn.query(sql, values, (err, result) => {
    if (err) {
     console.error(err);
     return res.status(500).send('Error inserting data into the database');
   }
    console.log('Data inserted successfully');
    //res.status(200).send('Data inserted successfully');
 });
 res.send("inserted")

})

app.get('/list', (req, res) => {

    conn.query('SELECT * FROM register ', (err, results) => {
      if (err) {
        console.error(err);
        return;
      }
  
      // The results variable will contain an array of objects, where each object represents a row in the user table
      res.send(results)
    });
  })

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
app.post('/login', (req, res) => {
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


//to update user name or email
app.put('/update',(req,res)=>{
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


})








app.get('/', (req, res) => {
  res.send('be hard pleas tsegay!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/* UPDATE register
SET email = 'newemail@gmail.com'
WHERE email = 'tsega@gmail.com'; */
/* DELETE FROM register
WHERE email = 'tsega@gmail.com'; */
