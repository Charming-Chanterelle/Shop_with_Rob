import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import RatingsCharacteristics from './RatingsCharacteristics.jsx'
import ModalStarRating from './ModalStarRating.jsx';
// Use HTML Data valid first. CSS first
const AddReviewModal = ({ show, onReviewSubmit }) => {
  const stars = [1, 2, 3, 4, 5];
  const starText = ['1 star - “Poor”', '2 stars - “Fair”', '3 stars - “Average”', '4 stars - “Good”', '5 stars - “Great”'];

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSumary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [onHoverStarRating, setHoverStarRating] = useState(0);
  const [rating, setStarRating] = useState(0);
  const [displayStarText, setDisplayText] = useState(false);
  const [characteristics, setCharacteristic] = useState({});

  // Figure a way to make this a ternary operation.
  const [thumbsUp, setThumbsUp] = useState('black');
  const [thumbsDown, setThumbsDown] = useState('black');

  const submitReview = (event) => {
    event.preventDefault();
    const newReview = {
      nickname,
      email,
      recommend,
      rating,
      summary,
      body,
      photos,
      characteristics,
    };

    onReviewSubmit(newReview);
    setNickname('');
    setEmail('');
    setSumary('');
    setBody('');
    setRecommend(false);
    setHoverStarRating(0);
    setStarRating(0);
    setDisplayText(false);
    setThumbsUp('black');
    setThumbsDown('black');
    setPhotos([]);
  };

  const onThumbsUp = () => {
    setRecommend(true);
    setThumbsUp('blue');
    setThumbsDown('black');
  };

  const onThumbsDown = () => {
    setRecommend(false);
    setThumbsUp('black');
    setThumbsDown('blue');
  };

  const onMouseEnter = (index) => {
    setHoverStarRating(index);
    setDisplayText(false);
  };

  const onMouseLeave = () => {
    setHoverStarRating(0);
  };

  const onSaveRating = (index) => {
    setStarRating(index);
    setDisplayText(true);
  };

  const getCharacteristic = (productCharacteristics) => {
    setCharacteristic(productCharacteristics);
  };

  return (
    <>
      <div className={`modal ${show ? 'show' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Write Your Review</h2>
            <h3 className="modal-subtitle">About the product</h3>
          </div>
          <div className="modal-body">
            <div className="input-text-container">
              <label htmlFor={name}>Nickname*</label>
              <input
                type="text"
                maxLength="60"
                value={nickname}
                placeholder="Example: jackson11!"
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="input-text-container">
              <label htmlFor={name}>Email*</label>
              <input
                type="text"
                name="email"
                maxLength="60"
                value={email}
                placeholder="Example: jackson11@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="product-rating-container">
              <label className="product-rating-label">Would you recommend this product?*</label>
              <div className="product-rating-icon">
                <FaRegThumbsUp
                  style={{ paddingRight: '15px', cursor: 'pointer', fill: thumbsUp }}
                  onClick={onThumbsUp}
                />
                <FaRegThumbsDown
                  style={{ cursor: 'pointer', fill: thumbsDown }}
                  onClick={onThumbsDown}
                />
              </div>
            </div>
            <div className="product-rating-container">
              <label className="product-rating-label">Overall rating*</label>
              <div className="product-star-icon">
                {stars.map((star) => (
                  <ModalStarRating
                    key={star}
                    index={star}
                    starRating={rating}
                    hoverStarRating={onHoverStarRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating}
                  />
                ))}
                {displayStarText ? <span style={{ paddingLeft: '15px' }}>{starText[rating - 1]}</span> : null}
              </div>
            </div>
            <RatingsCharacteristics getCharacteristic={getCharacteristic} />
            <div className="input-text-container">
              <label htmlFor={name}>Review Summary*</label>
              <textarea
                type="text"
                rows="3"
                columns="50"
                minLength="0"
                maxLength="60"
                value={summary}
                placeholder="Example: Best purchase ever!"
                onChange={(e) => setSumary(e.target.value)}
              />
            </div>
            <div className="input-text-container">
              <label htmlFor={name}>Review Body*</label>
              <textarea
                type="text"
                rows="8"
                columns="50"
                minLength="50"
                maxLength="1000"
                value={body}
                placeholder="Why did you like the product or not?"
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="input-text-container">
              <label htmlFor={name}>Upload your photos</label>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                multiple
                onChange={(e) => setPhotos(e.target.files)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="submitButton"
              style={{ "cursor":"pointer" }}
              onClick={submitReview}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
};

export default AddReviewModal;
