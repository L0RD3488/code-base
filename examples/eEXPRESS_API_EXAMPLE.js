// REST API JSON-DATA GET and POST EXAPLE
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');


// Define valid API keys
const validApiKeys = ['3488', '3434', '4242'];

// Middleware to check API key in header
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['api-key'] || req.query['api-key'];
  if (!apiKey) {
    return res.status(401).send({ message: 'Missing API key' });
  }

  if (!validApiKeys.includes(apiKey)) {
    return res.status(403).send({ message: 'Invalid API key' });
  }
  next(); // Proceed to the next middleware or route handler
};

app.use(checkApiKey); // Apply middleware to all routes
app.use(bodyParser.json()); // Parse JSON data from POST requests
app.get('/state', (req, res) => {
  res.send('Hello STATE is OK Node.js server!');
});

app.post('/datasend', (req, res) => {
  const data = req.body;
  console.log(data); // Access the JSON data from the request body
  res.send('Data received successfully!');
  const jsonString = JSON.stringify(data);
  fs.writeFileSync('data.json', jsonString);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
