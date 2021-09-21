import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import CharacterDisplay from './RatingsCharacteristicsDisplay.jsx'

const getCharacterID = (characteristics) => {
  if (Object.keys(characteristics).length === 0) {
    return null;
  }

  let characterData = {};

	for(let key in characteristics) {
    characterData[key] = characteristics[key].id;
	}
	return characterData;
};

const RatingsCharacteristics = ({getCharacteristic}) => {
  const { meta, loaded } = useContext(ProductContext);
  const [characters, setCharacter] = useState([]);
  const [characterID, setCharacterID] = useState({});
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
  }, [loaded, meta]);

  const characterData = (name, value) => {
    const key = characterID[name];
    data[key] = value;

    getCharacteristic(data);
  };
  if (loaded) {
    return (
      <>
        {characters.map((character) => (
          <>
            <p key={characterBank[character]}>
              {character}
              :
            </p>
            <div className="modal-ratings-characteristics">
              {characterBank[character].map((currentCharacter, index) => (
                <CharacterDisplay
                  key={character + currentCharacter}
                  currentCount={index + 1}
                  currentCharacter={character}
                  currentCharacteristics={currentCharacter}
                  onChangeCharacteristic={characterData}
                />
              ))}
            </div>
          </>
        ))}
      </>
    );
  }
  return null;
};

export default RatingsCharacteristics;
