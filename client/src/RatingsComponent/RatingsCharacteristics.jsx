import React, { useState } from 'react';
import { FaSlidersH } from 'react-icons/fa';

const RatingsCharacteristics = ({ label }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="product-rating-container">
      <label className="product-rating-label">Product Characteristics*</label>
      <div className="product-rating-icon"><FaSlidersH style={{ "paddingLeft": "15px", "cursor":"pointer" }} /></div>

    </div>
  );

};

export default RatingsCharacteristics;