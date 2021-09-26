import React, { useEffect, useState, useContext } from 'react';
import RatingsSliderDisplay from './RatingsSliderDisplay.jsx';
import { ProductContext } from '../../contexts/ProductContext.jsx';

const getCharacterScore = ({ characteristics }) => {
  const characterScores = [];
  if (Object.keys(characteristics).length === 0) {
    return null;
  }
  // eslint-disable-next-line guard-for-in
  // eslint-disable-next-line no-restricted-syntax
  for (const key in characteristics) {
    const characterData = {};
    characterData.key = key;
    characterData.value = parseFloat(characteristics[key].value).toFixed(2);
    characterScores.push(characterData);
  }
  return characterScores;
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

const RatingsSummarySlider = () => {
  const { meta, productID, loaded } = useContext(ProductContext);
  const [characterScores, setCharacterScore] = useState([]);

  const characterBank = {
    Size: ['A size too small', 'Perfect', 'A size too wide'],
    Width: ['Too narrow', 'Perfect', 'Too wide'],
    Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
    Quality: ['Poor', 'What I expected', 'Perfect'],
    Length: ['Runs Short', 'Perfect', 'Runs long'],
    Fit: ['Runs tight', 'Perfect', 'Runs long'],
  };

  useEffect(() => {
    if (loaded) {
      const score = getCharacterScore(meta);
      setCharacterScore(score);
    }
  }, [productID]);

  return (
    <>
      {
        characterScores.map((score) => (
          <RatingsSliderDisplay
            key={uniqueKey()}
            scores={score}
            characteristic={characterBank[score.key]}
          />
        ))
      }
    </>
  );
};

export default RatingsSummarySlider;
