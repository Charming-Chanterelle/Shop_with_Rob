import React, { Component } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegGem } from 'react-icons/fa';

class RatingsDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      reviews: props.ratingList
    }
  }

  render() {
    const { reviews } = this.state;
    const { rating, reviewer_name, summary, body, helpfulness, response } = reviews;

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

export default RatingsDisplay;
