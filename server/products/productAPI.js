const axios = require('axios');
const Redis = require('redis');
// eslint-disable-next-line import/extensions
const config = require('../../config.js');

const client = Redis.createClient();

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products';

module.exports = {
  getProducts: (query, callback) => {
    const options = {
      url: `${url}/`,
      headers: {
        Authorization: config.TOKEN,
      },
      params: query,
    };

    axios(options)
      .then((results) => {
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  getProductByID: (id, callback) => {
    client.get(`product_id-${id}`, (error, product) => {
      if (error) {
        callback(error);
      } else if (product !== null) {
        callback(null, JSON.parse(product));
      } else {
        const options = {
          url: `${url}/${id}`,
          headers: {
            Authorization: config.TOKEN,
          },
        };
        axios(options)
          .then((results) => {
            // 48432
            // 48433
            // 48434
            // 48435
            client.setex(`product_id-${id}`, 3600, JSON.stringify(results.data));
            callback(null, results.data);
          })
          .catch((err) => {
            callback(err);
          });
      }
    });
  },
  getProductStyle: (id, callback) => {
    const options = {
      url: `${url}/${id}/styles`,
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
  getRelatedProducts: (id, callback) => {
    const options = {
      url: `${url}/${id}/related`,
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
};
