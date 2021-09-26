/* eslint-disable import/extensions */
import React from 'react';
import * as RAR from './AddReviewModalStyledComponent.jsx';

const CharacterDisplay = ({
  currentCount, currentCharacter, currentCharacteristics, onChangeCharacteristic,
}) => (
  <>
    <RAR.RatingsCharacteristicRadioContainer>
      <RAR.RatingsCharacteristicRadioInput
        type="range"
        name={currentCharacter}
        value={currentCount}
        onChange={(event) => onChangeCharacteristic(event.target.name, event.target.value)}
      />
    </RAR.RatingsCharacteristicRadioContainer>
  </>
);

export default CharacterDisplay;
