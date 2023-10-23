const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const conn = require('./db'); // import conn from db.js

app.use(cors());
app.use(express.json());
const { usercontroller } = require('./controllers/userscontroller');
const UserController = new usercontroller();
//const reg = require('./controllers/userscontroller');
//app.post('/regist', reg.register);

app.post('/regist', UserController.register);
app.get('/list', UserController.list);
app.post('/login', UserController.login);
app.put('/update', UserController.update);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
