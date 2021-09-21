import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import * as RAR from './AddReviewModalStyledComponent.jsx';
import RatingsCharacteristics from './RatingsCharacteristics.jsx';
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
      <RAR.AddReviewContainer show={show}>
        <RAR.Content>
          <RAR.Header>
            <RAR.Title>
              Write Your Review
            </RAR.Title>
            <RAR.Subtitle>
              About the product
            </RAR.Subtitle>
          </RAR.Header>
          <RAR.Body>
            <RAR.BodyTextInputContainer>
              <RAR.Label
                htmlFor={name}
              >
                Nickname*
              </RAR.Label>
              <RAR.BodyTextInput
                type="text"
                maxLength="60"
                value={nickname}
                placeholder="Example: jackson11!"
                onChange={(e) => setNickname(e.target.value)}
              />
            </RAR.BodyTextInputContainer>
            <RAR.BodyTextInputContainer>
              <RAR.Label
                htmlFor={name}
              >
                Email*
              </RAR.Label>
              <RAR.BodyTextInput
                type="text"
                name="email"
                maxLength="60"
                value={email}
                placeholder="Example: jackson11@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </RAR.BodyTextInputContainer>
            <RAR.BodyRecommend>
              <RAR.Label>
                Would you recommend this product?*
              </RAR.Label>
              <RAR.BodyRecommendIcon>
                <FaRegThumbsUp
                  style={{ paddingRight: '15px', cursor: 'pointer', fill: thumbsUp }}
                  onClick={onThumbsUp}
                />
                <FaRegThumbsDown
                  style={{ cursor: 'pointer', fill: thumbsDown }}
                  onClick={onThumbsDown}
                />
              </RAR.BodyRecommendIcon>
            </RAR.BodyRecommend>
            <RAR.BodyRating>
              <RAR.Label>
                Overall rating*
              </RAR.Label>
              <RAR.BodyRatingIcon>
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
                {displayStarText ? (
                  <RAR.BodyRatingText>
                    {starText[rating - 1]}
                  </RAR.BodyRatingText>
                ) : null }
              </RAR.BodyRatingIcon>
            </RAR.BodyRating>
            <RatingsCharacteristics getCharacteristic={getCharacteristic} />
            <RAR.BodySummary>
              <RAR.Label htmlFor={name}>
                Review Summary*
              </RAR.Label>
              <RAR.BodySummaryText
                type="text"
                rows="3"
                columns="50"
                minLength="0"
                maxLength="60"
                value={summary}
                placeholder="Example: Best purchase ever!"
                onChange={(e) => setSumary(e.target.value)}
              />
            </RAR.BodySummary>
            <RAR.BodyFullReview>
              <RAR.Label htmlFor={name}>
                Review Body*
              </RAR.Label>
              <RAR.BodyFullReviewText
                type="text"
                rows="8"
                columns="50"
                minLength="50"
                maxLength="1000"
                value={body}
                placeholder="Why did you like the product or not?"
                onChange={(e) => setBody(e.target.value)}
              />
            </RAR.BodyFullReview>
            <RAR.BodyImageContainer>
              <RAR.Label htmlFor={name}>
                Upload your photos
              </RAR.Label>
              <RAR.BodyImageInput
                type="file"
                accept=".png, .jpg, .jpeg"
                multiple
                onChange={(e) => setPhotos(e.target.files)}
              />
            </RAR.BodyImageContainer>
          </RAR.Body>
          <RAR.Footer>
            <RAR.SubmitReview
              onClick={submitReview}
            >
              Submit
            </RAR.SubmitReview>
          </RAR.Footer>
        </RAR.Content>
      </RAR.AddReviewContainer>
    </>
  );
};

export default AddReviewModal;
