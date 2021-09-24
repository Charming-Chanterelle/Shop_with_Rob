const axios = require('axios');
const config = require('../../config.js');
const Redis = require('redis');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';
const answersUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers';
const TTL = 3600;

const client = Redis.createClient();

module.exports = {
  getQuestions: (query, callback) => {
    const { product_id } = query;

    client.get(`quesions_productID_${product_id}`, (error, question) => {
      if (error) {
        callback(error);
      } else if (question !== null) {
        callback(null, JSON.parse(question));
      } else {
        const options = {
          url: `${url}/`,
          headers: {
            Authorization: config.TOKEN,
          },
          params: query,
        };
        axios(options)
          .then((results) => {
            client.setex(`quesions_productID_${product_id}`, TTL, JSON.stringify(results.data));
            callback(null, results.data);
          })
          .catch((err) => {
            callback(err);
          });
      }
    });
  },
  getAnswers: (question_id, query, callback) => {
    client.get(`answers_questionID_${question_id}`, (error, question) => {
      if (error) {
        callback(error);
      } else if (question !== null) {
        callback(null, JSON.parse(question));
      } else {
        const options = {
          url: `${url}/${question_id}/answers`,
          headers: {
            Authorization: config.TOKEN,
          },
          params: query,
        };
        axios(options)
          .then((results) => {
            client.setex(`answers_questionID_${question_id}`, TTL, JSON.stringify(results.data));
            callback(null, results.data);
          })
          .catch((err) => {
            callback(err);
          });
      }
    });
  },
  createQuesion: (data, callback) => {
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
  createAnswer: (data, question_id, callback) => {
    const options = {
      method: 'post',
      url: `${url}/${question_id}/answers`,
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
  helpfulQuestion: (question_id, callback) => {
    const options = {
      method: 'put',
      url: `${url}/${question_id}/helpful`,
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
  reportQuestion: (question_id, callback) => {
    const options = {
      method: 'put',
      url: `${url}/${question_id}/report`,
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
  helpfulAnswer: (answer_id, callback) => {
    const options = {
      method: 'put',
      url: `${answersUrl}/${answer_id}/helpful`,
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
  reportAnswer: (answer_id, callback) => {
    const options = {
      method: 'put',
      url: `${answersUrl}/${answer_id}/report`,
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
