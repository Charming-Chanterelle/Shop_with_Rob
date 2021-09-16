/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import Questions from './Questions.jsx';
import Answers from './Answers.jsx';
import HelpFullnessCounter from './HelpFullnessCounter.jsx';

const QandAitems = ({ yesCounter, noCounter }) => (
  <>
    <HelpFullnessCounter yesCounter={yesCounter} noCounter={noCounter} />
    <Questions />
    <Answers />
  </>
);

QandAitems.propTypes = {
  yesCounter: PropTypes.number.isRequired,
  noCounter: PropTypes.number.isRequired,
};

export default QandAitems;
