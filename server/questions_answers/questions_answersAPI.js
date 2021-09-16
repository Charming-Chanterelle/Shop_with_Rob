const axios = require('axios');
const config = require('../../config.js');

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions';
const answersUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/answers';

module.exports = {
  getQuestions: (query, callback) => {
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
  getAnswers: (question_id, query, callback) => {
    const options = {
      url: `${url}/${question_id}/answers`,
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
