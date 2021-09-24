const { getReviews, getMeta, addReview, markHelpful, markReport } = require('./reviewsAPI.js');

module.exports = {
  handleGetReviews: (req, res) => {
    const query = !req.query.product_id ? '' : req.query;

    if (query === '') {
      res.status(406).send('Needs a valid product id');
      return;
    }

    getReviews(query, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log(results.length);
        res.status(200).send(results);
      }
    });
  },
  handleGetMeta: (req, res) => {
    const product_id = !req.query.product_id ? '' : req.query;

    if (product_id === '') {
      res.status(406).send('Needs a valid product id');
      return;
    }

    getMeta(product_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  handleAddReview: (req, res) => {
    const { body } = req;

    addReview(body, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  },
  handleHelpfulReview: (req, res) => {
    const { review_id } = req.params;

    markHelpful(review_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
  handleReportReview: (req, res) => {
    const { review_id } = req.params;

    markReport(review_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
};