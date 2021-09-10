const axios = require('axios');
// eslint-disable-next-line import/extensions
const config = require('/Users/jaylee/Shop_with_Rob/config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews';

module.exports = {
  getReviews: (query, callback) => {
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