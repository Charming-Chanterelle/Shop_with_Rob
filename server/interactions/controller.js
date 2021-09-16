const { createInteraction } = require('./interactionsAPI.js');

module.exports = {
  handlePostInteraction: (req, res) => {
    const { body } = req;

    createInteraction(body, (err, results) => {
      if (err) {
        res.status(422).send('UNPROCESSABLE ENTITY');
      } else {
        // results will be a string of CREATED
        res.status(201).send(results);
      }
    });
  },
};