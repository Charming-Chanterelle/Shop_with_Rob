import React from 'react';
import * as RB from './ReviewBreakdownStyledComponent.jsx';

const RatingsSliderDisplay = ({ scores, characteristic }) => {
  const { key, value } = scores;
  return (
    <>
      <RB.ProductCharacterContainer>
        <RB.CharacteristicName>
          {key}
        </RB.CharacteristicName>
        <RB.Slider
          type="range"
          name={key}
          min="1"
          max="5"
          value={value}
          step="any"
          readOnly
        />
        {/* <RB.TickContainer>
          <RB.TickMark />
          <RB.TickMark />
        </RB.TickContainer> */}
        <RB.SliderTextContainer>
          <RB.SliderTextOne>
            {characteristic[0]}
          </RB.SliderTextOne>
          <RB.SliderTextTwo>
            {characteristic[1]}
          </RB.SliderTextTwo>
          <RB.SliderTextThree>
            {characteristic[2]}
          </RB.SliderTextThree>
        </RB.SliderTextContainer>
      </RB.ProductCharacterContainer>
    </>
  );
};

export default RatingsSliderDisplay;
