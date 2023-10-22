const conn = require('../db'); // import conn from db.js
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
    list
  };