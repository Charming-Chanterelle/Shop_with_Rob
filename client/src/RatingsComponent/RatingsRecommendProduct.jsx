import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const RecommendProduct = ({ label }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="product-rating-container">
      <label className="product-rating-label">Would you recommend this product?*</label>
      <div className="product-rating-icon"><FaRegThumbsUp style={{ "paddingRight": "15px", "cursor":"pointer" }}/><FaRegThumbsDown/></div>

    </div>
  );

};

export default RecommendProduct;
