const interactionRouter = require('express').Router();
const { handlePostInteraction } = require('./controller.js');

interactionRouter.post('/', handlePostInteraction);

module.exports = interactionRouter;
