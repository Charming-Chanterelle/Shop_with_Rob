const reviewsRouter = require('express').Router();
const { handleGetReviews, handleGetMeta, handleAddReview, handleHelpfulReview, handleReportReview } = require('./controller.js');

reviewsRouter.get('/', handleGetReviews);
reviewsRouter.get('/meta', handleGetMeta);
reviewsRouter.post('/meta', handleAddReview);
reviewsRouter.put('/:review_id/helpful', handleHelpfulReview);
reviewsRouter.put('/:review_id/report', handleReportReview);

module.exports = reviewsRouter;
