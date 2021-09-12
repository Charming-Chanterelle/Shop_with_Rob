const { getQuestions, getAnswers, createQuesion, createAnswer, helpfulQuestion, reportQuestion, helpfulAnswer, reportAnswer } = require('./questions_answersAPI');

module.exports = {
  handleGetQuestions: (req, res) => {
    const query = !req.query.product_id ? '' : req.query;

    if (query === '') {
      res.status(406).send('Needs a valid product id');
    }

    getQuestions(query, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  handleGetAnswers: (req, res) => {
    const query = !req.query.count ? !req.query.page ? '' : req.query : req.query;

    createQuesion(question_id, query, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  },
  handleAskQuestion: (req, res) => {
    const { body } = req;

    getAnswers(body, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  },
  handleCreateAnswer: (req, res) => {
    const { body } = req;
    const { question_id } = req.params;

    createAnswer(body, question_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  },
  handleHelpfulQuestion: (req, res) => {
    const { question_id } = req.params;

    helpfulQuestion(question_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
  handleReportQuestion: (req, res) => {
    const { question_id } = req.params;

    reportQuestion(question_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
  handleHelpfulAnswer: (req, res) => {
    const { answer_id } = req.params;

    helpfulAnswer(answer_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
  handleReportAnswer: (req, res) => {
    const { answer_id } = req.params;

    reportAnswer(answer_id, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(204).send(results);
      }
    });
  },
};