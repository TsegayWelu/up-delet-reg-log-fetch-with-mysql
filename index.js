const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const conn = require('./db'); // import conn from db.js

app.use(cors());
app.use(express.json());
const usercontrol = require('./controllers/userscontroller.js');
//const reg = require('./controllers/userscontroller');
//app.post('/regist', reg.register);

app.post('/regist', usercontrol.register);
app.get('/list', usercontrol.list);
app.post('/login', usercontrol.login);
app.put('/update', usercontrol.update);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
