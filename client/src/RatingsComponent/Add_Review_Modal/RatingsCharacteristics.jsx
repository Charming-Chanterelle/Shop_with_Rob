/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import * as RAR from './AddReviewModalStyledComponent.jsx';
// import CharacterDisplay from './RatingsCharacteristicsDisplay.jsx';

const getCharacterID = (characteristics) => {
  if (Object.keys(characteristics).length === 0) {
    return null;
  }

  const characterData = {};

  for (const key in characteristics) {
    characterData[key] = characteristics[key].id;
  }
  return characterData;
};

const uniqueKey = () => {
  let key = '';
  const bank = ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '3', '4', '5', '6', '7', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '8', '9', '!', '@', '$', '#', '%', '^', '*', 'a', 'b', 'c', 'd', 'e', 'f'];
  const bankLen = bank.length;
  for (let i = 0; i < 15; i++) {
    const randID = Math.ceil(Math.random() * (bankLen - 0));
    key += bank[randID];
  }
  return key;
};

const RatingsCharacteristics = ({ getCharacteristic }) => {
  const { meta, productID, loaded } = useContext(ProductContext);
  const [characters, setCharacter] = useState([]);
  const [characterID, setCharacterID] = useState({});
  const [charScores, setCharScores] = useState([]);
  const data = {};
  const characterBank = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
  };

  useEffect(() => {
    if (loaded) {
      const { characteristics } = meta;
      setCharacterID(getCharacterID(characteristics));
      setCharacter(Object.keys(characteristics));
    }
  }, [productID]);

  const characterData = (name, value, index) => {
    const key = characterID[name];
    data[key] = value;

    const newData = [];
    newData[index] = data;

    getCharacteristic(newData);
  };

  return (
    <>
      {characters.map((character, count) => (
        <>
          <RAR.RatingsCharacterContainer>
            <RAR.RatingsCharacteristicText
              key={characterBank[character]
                .concat(uniqueKey(), count, characterBank[character][count])}
            >
              {character}
              <RAR.BodyRequired>*</RAR.BodyRequired>
              :
            </RAR.RatingsCharacteristicText>
            <RAR.RatingsCharacterRadioContainer>
              <RAR.RatingsCharacteristicRadioInput
                type="range"
                name={character}
                min="1"
                max="5"
                step="1"
                defaultValue="0"
                onChange={(event) => characterData(event.target.name, event.target.value, count)}
              />
            </RAR.RatingsCharacterRadioContainer>
            <RAR.RatingsCharacterDescContainer>
              <RAR.RatingsCharacterFirstText>
                {characterBank[character][0]}
              </RAR.RatingsCharacterFirstText>
              <RAR.RatingsCharacterMiddleText>
                {characterBank[character][2]}
              </RAR.RatingsCharacterMiddleText>
              <RAR.RatingsCharacterLastText>
                {characterBank[character][4]}
              </RAR.RatingsCharacterLastText>
            </RAR.RatingsCharacterDescContainer>
          </RAR.RatingsCharacterContainer>
        </>
      ))}
    </>
  );
};

export default RatingsCharacteristics;

{ /* <>
<RAR.RatingsCharacterContainer>
  <RAR.RatingsCharacteristicText
    key={characterBank[character]
      .concat(uniqueKey(), count, characterBank[character][count])}
  >
    {character}
    <RAR.BodyRequired>*</RAR.BodyRequired>
    :
  </RAR.RatingsCharacteristicText>
  <RAR.RatingsCharacterRadioContainer>
    {characterBank[character].map((currentCharacter, index) => (
      <CharacterDisplay
        key={uniqueKey().split('').reverse().join('')
          .concat(index)}
        currentCount={index + 1}
        currentCharacter={character}
        currentCharacteristics={currentCharacter}
        onChangeCharacteristic={characterData}
      />
    ))}
  </RAR.RatingsCharacterRadioContainer>
</RAR.RatingsCharacterContainer>
</> */ }
