const axios = require('axios');
// eslint-disable-next-line import/extensions
const config = require('/Users/jaylee/Shop_with_Rob/config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/cart'

module.exports = {
  getCartItems: (callback) => {
    const options = {
      url,
      headers: {
        Authorization: config.TOKEN,
      },
    };

    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addToCart: (data, callback) => {
    const options = {
      method: 'post',
      url: `${url}`,
      headers: {
        Authorization: config.TOKEN,
      },
      data,
    };

    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
};