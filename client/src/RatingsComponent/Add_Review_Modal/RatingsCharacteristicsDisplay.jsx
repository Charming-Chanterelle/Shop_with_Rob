import React from 'react';

const CharacterDisplay = ({
  currentCount, currentCharacter, currentCharacteristics, onChangeCharacteristic,
}) => (
  <>
    <div className="modal-ratings-characteristics-radio">
      <label htmlFor={currentCharacter}>{ currentCharacteristics }</label>
      <input
        type="radio"
        name={currentCharacter}
        value={currentCount}
        onChange={(event) => onChangeCharacteristic(event.target.name, event.target.value)}
      />
    </div>
  </>
);

export default CharacterDisplay;
