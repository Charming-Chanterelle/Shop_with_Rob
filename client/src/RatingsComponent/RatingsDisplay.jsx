import React, { Component } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegGem } from 'react-icons/fa';

class RatingsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: props.ratingList
    }
  }

  render() {
    const { reviews } = this.state;
    const { rating, reviewer_name, summary, body, helpfulness, response } = reviews;
    const bodyLen = body.split(' ').length;
    console.log(bodyLen);
    return (
      <>
        <div className="ratings-content-container">
          <div className="ratings-content-stars">
            <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
          </div>
          <div className="ratings-content-username">
          <FaRegGem /><span style={{ "margin": "4px"}}>{reviewer_name}</span>
            </div>
          <div className="ratings-content-summary">{summary}</div>
          <div className="ratings-content-body">{body}</div>
          {!response ? <></> : <div className="ratings-content-response"><span>Response:</span><div>{response}</div></div>}
          <div className="ratings-content-helpful">Helpful? <span><u>Yes </u></span>({helpfulness})<span style={{ "margin": "8px"}}>|</span><span style={{ "margin": "2px"}}><u>Report</u></span></div>
        </div>
      </>
    )
  }

};

// The text submitted as part of the review will be between 50 and 1000 characters long.

// Users should be able to submit up to 5 images along with a single review.

// By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.

// Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window.

// Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.


export default RatingsDisplay;
