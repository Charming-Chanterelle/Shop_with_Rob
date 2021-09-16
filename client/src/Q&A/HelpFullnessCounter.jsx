import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HelpFullnessCounter = ({ yesCounter, noCounter }) => {

  const Interactions = styled.div`
  display: flex;
  flex-direction: row;
  font-size: small;
  text-align: right;
  position: relative;
  left: 470px;
  top: 50px;
  text-transform: uppercase;
  padding-top: 10px;
`;
  return (
    <div>
      <Interactions>
        <div>
          Helpful?&nbsp;
        </div>
        <span>
          YES (
          {yesCounter}
          )
          <strong>&nbsp;</strong>
        </span>
        <span>
          || YES (
          {noCounter}
          )
        </span>
      </Interactions>
    </div>
  );
};

HelpFullnessCounter.propTypes = {
  yesCounter: PropTypes.number.isRequired,
  noCounter: PropTypes.number.isRequired,
};

export default HelpFullnessCounter;
