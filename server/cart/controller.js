const { getCartItems, addToCart } = require('./cartAPI.js');

module.exports = {
  handleGetCart: (req, res) => {
    getCartItems((err, results) => {
      if (err) {
        res.status(404).send(400);
      } else {
        res.status(200).send(results);
      }
    });
  },
  handleAddItem: (req, res) => {
    const { body } = req;
    addToCart(body, (err, results) => {
      if (err) {
        res.status(422).send('UNPROCESSABLE ENTITY');
      } else {
        // results will be a string of CREATED
        res.status(201).send(results);
      }
    });
  },
};
