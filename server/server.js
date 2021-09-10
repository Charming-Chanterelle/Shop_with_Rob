// Atelier API Overview
// Base API: https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo

const express = require('express');
// const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const productRouter = require('./products/server.js');
const cartRouter = require('./cart/server.js');
const q_aRouter = require('./questions_answers/server.js');
const interactionRouter = require('./interactions/server.js');
const reviewsRouter = require('./reviews/server.js');

// app.use(express.static(path.join(__dirname,'/../react-client/dist')));

// console.log(path.join(__dirname, 'client/public'));

app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/qa', q_aRouter);
app.use('/api/interactions', interactionRouter);
app.use('/api/reviews', reviewsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
