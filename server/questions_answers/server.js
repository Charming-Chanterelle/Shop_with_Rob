// test server = https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/?product_id=48488
// Sample Question ID = "question_id": 407154, 407159,

const q_aRouter = require('express').Router();
const { handleGetQuestions, handleGetAnswers, handleAskQuestion, handleCreateAnswer, handleHelpfulQuestion, handleReportQuestion, handleHelpfulAnswer, handleReportAnswer } = require('./controller.js');

q_aRouter.get('/questions', handleGetQuestions);
q_aRouter.get('/questions/:question_id/answers', handleGetAnswers);
q_aRouter.post('/questions', handleAskQuestion);
q_aRouter.post('/questions/:question_id/answers', handleCreateAnswer);
q_aRouter.put('/questions/:question_id/helpful', handleHelpfulQuestion);
q_aRouter.put('/questions/:question_id/report', handleReportQuestion);
q_aRouter.put('/answers/:question_id/helpful', handleHelpfulAnswer);
q_aRouter.put('/answers/:question_id/report', handleReportAnswer);

module.exports = q_aRouter;
