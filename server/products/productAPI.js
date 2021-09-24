const axios = require('axios');
const Redis = require('redis');
// eslint-disable-next-line import/extensions
const config = require('../../config.js');

const client = Redis.createClient();

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products';
const TTL = 3600;

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
    client.get(`productID_${id}`, (error, product) => {
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
            client.setex(`productID_${id}`, TTL, JSON.stringify(results.data));
            callback(null, results.data);
          })
          .catch((err) => {
            callback(err);
          });
      }
    });
  },
  getProductStyle: (id, callback) => {
    client.get(`product_style_${id}`, (error, style) => {
      if (error) {
        callback(error);
      } else if (style !== null) {
        callback(null, JSON.parse(style));
      } else {
        const options = {
          url: `${url}/${id}/styles`,
          headers: {
            Authorization: config.TOKEN,
          },
        };
        axios(options)
          .then((results) => {
            client.setex(`product_style_${id}`, TTL, JSON.stringify(results.data));
            callback(null, results.data);
          })
          .catch((err) => {
            callback(err);
          });
      }
    });
  },
  getRelatedProducts: (id, callback) => {
    client.get(`related_product_${id}`, (error, related) => {
      if (error) {
        callback(error);
      } else if (related !== null) {
        callback(null, JSON.parse(related));
      } else {
        const options = {
          url: `${url}/${id}/related`,
          headers: {
            Authorization: config.TOKEN,
          },
        };
        axios(options)
          .then((results) => {
            client.setex(`related_product_${id}`, TTL, JSON.stringify(results.data));
            callback(null, results.data);
          })
          .catch((err) => {
            callback(err);
          });
      }
    });
  },
};
