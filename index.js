const express = require('express');
const app = express();

// Import your routes
const routes = require('./routes/route');
app.use(express.json());

// Use the routes as middleware
app.use('/', routes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
