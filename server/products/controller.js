// eslint-disable-next-line import/extensions
const { getProducts, getProductByID, getProductStyle, getRelatedProducts } = require('./productAPI.js');

module.exports = {
  handleGetProducts: (req, res) => {
    // eslint-disable-next-line no-nested-ternary
    const query = !req.query.count ? !req.query.page ? '' : req.query : req.query;

    getProducts(query, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log(results.length);
        res.status(200).send(results);
      }
    });
  },
  handleGetProductID: (req, res) => {
    const id = !req.params.product_id ? '' : Number(req.params.product_id);

    getProductByID(id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  handleGetProductStyle: (req, res) => {
    const id = !req.params.product_id ? '' : Number(req.params.product_id);

    getProductStyle(id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  handleGetRelatedProducts: (req, res) => {
    const id = !req.params.product_id ? '' : Number(req.params.product_id);

    getRelatedProducts(id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
};