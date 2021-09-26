const axios = require('axios');
const Redis = require('redis');
// eslint-disable-next-line import/extensions
const config = require('../../config.js');
const client = Redis.createClient();

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews';
const TTL = 3600;

module.exports = {
  getReviews: (query, callback) => {
    const { product_id } = query;
    const count = !query.count ? 0 : query.count;
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
  getMeta: (query, callback) => {
    const options = {
      url: `${url}/meta/`,
      headers: {
        Authorization: config.TOKEN,
      },
      params: query,
    };
    axios(options)
      .then((results) => {
        // client.setex(`meta_productID_${product_id}`, TTL, JSON.stringify(results.data));
        callback(null, results.data);
      })
      .catch((err) => {
        callback(err);
      });
  },
  addReview: (data, callback) => {
    const options = {
      method: 'post',
      url: `${url}/`,
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
  markHelpful: (review_id, callback) => {
    const options = {
      method: 'put',
      url: `${url}/${review_id}/helpful`,
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
  markReport: (review_id, callback) => {
    const options = {
      method: 'put',
      url: `${url}/${review_id}/report`,
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
