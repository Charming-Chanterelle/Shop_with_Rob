const productRouter = require('express').Router();
const { handleGetProducts, handleGetProductID, handleGetProductStyle, handleGetRelatedProducts } = require('./controller.js');

productRouter.get('/', handleGetProducts);
productRouter.get('/:product_id', handleGetProductID);
productRouter.get('/:product_id/style', handleGetProductStyle);
productRouter.get('/:product_id/related', handleGetRelatedProducts);

module.exports = productRouter;

// test product ids: 48487, 48488c