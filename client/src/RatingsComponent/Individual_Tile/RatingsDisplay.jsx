import React, { useState, useEffect, useContext } from 'react';
import { FaCheck, FaRegGem } from 'react-icons/fa';
import RatingsStarDisplay from '../RatingsStarDisplay.jsx';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import RatingsImageModal from './RatingsImageModal.jsx';

const getBodyText = (text, onSeeMore = false) => {
  let bodyData = {};
  // Array of words
  const bodyWords = text.split(' ');
  const wordLimit = 25;


  // Check to see if the amount of words in the body is less than 25
  // and we have not already clicked on see more
  if (bodyWords.length <= wordLimit || onSeeMore) {
    bodyData = {
      isSeeMore: false,
      bodyText: text,
    };
    return bodyData;
  }

  if (bodyWords.length > wordLimit && !onSeeMore) {
    bodyData = {
      isSeeMore: true,
      bodyText: bodyWords.slice(0, wordLimit).join(' '),
    };
    return bodyData;
  }

  if (bodyWords.length > wordLimit && onSeeMore) {
    bodyData = {
      isSeeMore: false,
      bodyText: text,
    };
    return bodyData;
  }

  return bodyData;
};

const RatingsDisplay = ({ ratingList, onUpdateReview, starKey }) => {
  const { review_id, rating, reviewer_name,
    summary, body, helpfulness, recommend, response, photos,
  } = ratingList;
  const { product, loaded } = useContext(ProductContext);

  const [seeMore, setSeeMore] = useState(false);
  const [fullBody, setFullBody] = useState('');
  const [imageShow, setImageShow] = useState(false);
  const [currentPhoto, setPhoto] = useState('');
  const [isReported, setIsReported] = useState(false);
  const [isHelpful, setIsHelpful] = useState(false);

  useEffect(() => {
    if (loaded) {
      const { isSeeMore, bodyText } = getBodyText(body);
      setSeeMore(isSeeMore);
      setFullBody(bodyText);
    }
  }, [loaded]);
  const onUserUpdate = (action) => {
    onUpdateReview(review_id, action);
    if (action === 'helpful') {
      setIsHelpful(true);
    } else if (action === 'report') {
      setIsReported(true);
    }
  };

  if (loaded) {
    return (
      <>
        <div className="ratings-content-container">
          <div className="ratings-content-stars">
            <RatingsStarDisplay stars={{ width: '15', height: '15' }} id={starKey} starRatings={rating} />
          </div>
          <div className="ratings-content-username">
          <FaRegGem /><span style={{ "margin": "4px"}}>{reviewer_name}</span>
            </div>
          <div className="ratings-content-summary">{summary}</div>
          <div className="ratings-content-body">
            {body}{seeMore ?
            <span style={{ "cursor": "pointer"}} onClick={()=> {
              const { isSeeMore, bodyText } = getBodyText(body, true);
              setSeeMore(isSeeMore);
              setFullBody(bodyText);
            }
            }>
              <u> ...Read More</u></span> : null }
          </div>
          { recommend ? <div className="ratings-content-recommend"><FaCheck style={{ fill: "green", paddingRight: "10px"}} /><span>I recommend this product</span></div> : null }
          {!response ? null : <div className="ratings-content-response"><span>Response:</span><div>{response}</div></div>}
          {photos.length !== 0
          ? <div className="ratings-content-image-container">
              {
                photos.map(
                  photo =>
                <>
                  <img key={photo.id} src={photo.url} className="ratings-content-image" style={{ "cursor": "pointer"}}
                  onClick={() => {
                    setImageShow(true)
                    setPhoto(photo.url)
                  }}/>
                  <RatingsImageModal className="ratings-modal-image"  onSubmit={() => setImageShow(false)} url={currentPhoto} imageShow={imageShow}/>
                </>
                )
              }
            </div>
          : null}
          <div className="ratings-content-helpful">Helpful? {isHelpful ? <span>Yes</span> : <span style={{ "cursor": "pointer"}} onClick={() => onUserUpdate('helpful')}><u>Yes</u></span>}({helpfulness})<span style={{ "paddingLeft": "4px", "paddingRight": "4px"}}>|</span>
          {isReported ? <span>Report</span> : <span style={{ "cursor": "pointer"}} onClick={() => onUserUpdate('report')}><u>Report</u></span>}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div>loading...</div>
    )
  }
};

{/* <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> */}
// The text submitted as part of the review will be between 50 and 1000 characters long.

// Users should be able to submit up to 5 images along with a single review.

// By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.

// Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window.

// Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.


export default RatingsDisplay;
