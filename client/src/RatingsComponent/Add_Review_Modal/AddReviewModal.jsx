/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import * as RAR from './AddReviewModalStyledComponent.jsx';
import RatingsCharacteristics from './RatingsCharacteristics.jsx';
import ModalStarRating from './ModalStarRating.jsx';
import ErrorModule from './ErrorModule.jsx';
import ThumbsUp from './ThumbsUp.jsx';
import ThumbsDown from './ThumbsDown.jsx';
// Use HTML Data valid first. CSS first
const AddReviewModal = ({ show, onReviewSubmit }) => {
  const stars = [1, 2, 3, 4, 5];
  const starText = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

  const { productID, product } = useContext(ProductContext);

  const [productName, setProductName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSumary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(false);
  const [isRecommendSelected, setIsRecommendSelected] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [onHoverStarRating, setHoverStarRating] = useState(0);
  const [rating, setStarRating] = useState(0);
  const [displayStarText, setDisplayText] = useState(false);
  const [characteristics, setCharacteristic] = useState([]);
  const [bodyWordCount, setBodyWordCount] = useState(0);
  const [dataChecker, setDataChecker] = useState(true);
  const [textBlank, setTextBlank] = useState(false);
  const [errorShow, setErrorShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Figure a way to make this a ternary operation.
  const [thumbsUp, setThumbsUp] = useState('black');
  const [thumbsDown, setThumbsDown] = useState('black');
  const [bodyCountColor, setBodyCountColor] = useState('red');

  const errorBank = [
    'A mandatory field is blank',
    'The review body is less than 50 characters',
    'The email address provided is not in correct email format',
    'The images selected are invalid or unable to be uploaded.',
  ];

  useEffect(() => {
    const { name } = product;
    setProductName(name);
  }, [productID]);

  const canSubmitReview = () => {
    // const dataChecker = [];
    let isDataCorrect = true;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const correctEmail = emailRegex.test(email);
    console.log('in the add review modal');
    console.log(characteristics);
    // if (nickname.length === 0 || email.length === 0 || body.length < 50 || rating === 0) {
    //   isDataCorrect = false;
    //   setErrorMessage(errorBank[0]);
    //   return isDataCorrect;
    // }

    // if (body.length < 50) {
    //   isDataCorrect = false;
    //   setErrorMessage(errorBank[1]);
    //   return isDataCorrect;
    // }

    // if (correctEmail) {
    //   isDataCorrect = false;
    //   setErrorMessage(errorBank[2]);
    //   return isDataCorrect;
    // }
    // console.log(email);

    // return isDataCorrect;
  };

  const onWriteBody = ({ target }) => {
    const { value } = target;
    const lastChar = value.charAt(value.length - 1);
    const bodyLen = value.split(' ').length - 1;
    if (lastChar === ' ') {
      setBody(value);
      setBodyWordCount(bodyLen);
    } else {
      setBody(value);
    }

    if (bodyLen <= 50) {
      setBodyCountColor('red');
    } else {
      setBodyCountColor('green');
    }
  };

  const submitReview = (event) => {
    event.preventDefault();

    if (canSubmitReview()) {
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
    } else {
      setErrorShow(true);
    }
  };

  const onThumbsUp = () => {
    setRecommend(true);
    setIsRecommendSelected(true);
    setThumbsUp('blue');
    setThumbsDown('black');
  };

  const onThumbsDown = () => {
    setRecommend(false);
    setIsRecommendSelected(true);
    setThumbsUp('black');
    setThumbsDown('red');
  };

  const onMouseEnter = (index) => {
    setHoverStarRating(index);
  };

  const onMouseLeave = () => {
    setHoverStarRating(0);
  };

  const onSaveRating = (index) => {
    setStarRating(index);
    setDisplayText(true);
  };

  const getCharacteristic = (productCharacteristics) => {
    const newCharacteristics = [...characteristics, productCharacteristics[productCharacteristics.length - 1]];
    setCharacteristic(newCharacteristics);
  };

  const onErrorModuleClose = () => {
    setErrorShow(false);
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
              About the
              { ' ' }
              { productName }
            </RAR.Subtitle>
          </RAR.Header>
          <RAR.Body>
            <RAR.BodyTextNickname>
              <RAR.Label
                htmlFor={name}
              >
                Nickname
                <RAR.BodyRequired>*</RAR.BodyRequired>
              </RAR.Label>
              <RAR.BodyTextInput
                type="blank"
                minLength="2"
                maxLength="60"
                value={nickname}
                placeholder="Example: jackson11!"
                onChange={(e) => {
                  // testFunction(e);
                  setNickname(e.target.value);
                }}
              />
              <RAR.BodyTextWarning>
                For privacy reasons, do not use your full name or email address
              </RAR.BodyTextWarning>
            </RAR.BodyTextNickname>
            <RAR.BodyTextEmail>
              <RAR.Label
                htmlFor={name}
              >
                Email
                <RAR.BodyRequired>*</RAR.BodyRequired>
              </RAR.Label>
              <RAR.BodyTextInput
                show={textBlank}
                type="text"
                name="email"
                maxLength="60"
                value={email}
                placeholder="Example: jackson11@email.com"
                onChange={(e) => { setEmail(e.target.value); setTextBlank(true); }}
              />
              <RAR.BodyTextWarning>
                For authentication reasons, you will not be emailed
              </RAR.BodyTextWarning>
            </RAR.BodyTextEmail>
            <RAR.BodyRecommend>
              <RAR.Label>
                Would you recommend this product?
                <RAR.BodyRequired>*</RAR.BodyRequired>
              </RAR.Label>
              <RAR.BodyRecommendIcon>
                <span
                  style={{ paddingRight: '20px' }}
                  onClick={onThumbsUp}
                >
                  <ThumbsUp
                    style={{ cursor: 'pointer' }}
                    fill={thumbsUp}
                  />
                </span>
                <span
                  onClick={onThumbsDown}
                >
                  <ThumbsDown
                    style={{ cursor: 'pointer' }}
                    fill={thumbsDown}
                  />
                </span>
              </RAR.BodyRecommendIcon>
            </RAR.BodyRecommend>
            <RAR.BodyRating>
              <RAR.Label>
                Overall rating
                <RAR.BodyRequired>*</RAR.BodyRequired>
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
                Review Summary
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
                Review Body
                <RAR.BodyRequired>*</RAR.BodyRequired>
              </RAR.Label>
              <RAR.BodyFullReviewText
                type="text"
                rows="8"
                columns="50"
                minLength="50"
                maxLength="1000"
                value={body}
                placeholder="Why did you like the product or not?"
                onChange={(e) => onWriteBody(e)}
              />
              {bodyWordCount > 0 ? (
                <span style={{ color: bodyCountColor }}>
                  Word Count
                  {bodyWordCount < 50 ? (' (min 50 words required)') : null}
                  <RAR.BodyRequired>*</RAR.BodyRequired>
                  {' '}
                  :
                  {' '}
                  {bodyWordCount}
                </span>
              ) : <></> }
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
      <ErrorModule show={errorShow} message={errorMessage} onClose={onErrorModuleClose} />
    </>
  );
};

export default AddReviewModal;
