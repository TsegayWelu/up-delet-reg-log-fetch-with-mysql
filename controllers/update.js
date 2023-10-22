
const conn = require('../db'); // import conn from db.js

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
module.exports = {
    update
  };