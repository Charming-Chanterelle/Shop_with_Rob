const express = require('express');


 productRouter = express.Router();


const endPoint = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/';

productRouter.get('/', function(req, res) {
  res.send('GET handler for /dogs route.');
});

productRouter.get('/:product_id/styles', function(req, res) {
  res.send('GET hello route.');
});

productRouter.get('/:product_id/related', function(req, res) {
  res.send('GET hello route.');
});

module.exports = productRouter;