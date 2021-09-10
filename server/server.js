// Atelier API Overview
// Base API: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//  const { productRouter } = require('./products');
app.use(express.static(path.join(__dirname,'/../react-client/dist')));

console.log(path.join(__dirname, 'client/public'));

app.get('/api', (req, res) => {
  res.send('Hello Today!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
