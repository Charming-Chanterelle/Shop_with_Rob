const cartRouter = require('express').Router();
const { handleGetCart, handleAddItem } = require('./controller.js');

cartRouter.get('/', handleGetCart);
cartRouter.post('/', handleAddItem);

module.exports = cartRouter;
