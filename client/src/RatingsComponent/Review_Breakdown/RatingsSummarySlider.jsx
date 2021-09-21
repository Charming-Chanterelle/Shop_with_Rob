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

const RatingsSummarySlider = () => {
  const { meta, loaded } = useContext(ProductContext);
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
  }, [loaded]);
  if (loaded) {
    return (
      <>
        {characterScores.map((score) => <RatingsSliderDisplay key={score} scores={score} characteristic={characterBank[score.key]} />)}
      </>
    );
  }
  return null;
};

export default RatingsSummarySlider;
// characterScores.