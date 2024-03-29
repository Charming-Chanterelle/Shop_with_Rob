const axios = require('axios');
// eslint-disable-next-line import/extensions
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/interactions';

module.exports = {
  createInteraction: (data, callback) => {
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
