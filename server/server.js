// Atelier API Overview
// Base API: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo

const express = require('express');

const app = express();
const port = 3000;

//  const { productRouter } = require('./products');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
