const axios = require('axios');

module.exports.getRatings = () => (
  axios.get('/api/reviews/?product_id=48487')
    .then((results) => (
      results
    ))
    .catch((err) => {
      throw err;
    })
);
