import React, { useState } from 'react';
import { FaRegStar } from 'react-icons/fa';

const ProductRating = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="product-rating-container">
      <label className="product-rating-label">Overall rating*</label>
      <div className="product-rating-icon">
        <FaRegStar className="review-product-star"/><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
        </div>

    </div>
  );

};

export default ProductRating;
