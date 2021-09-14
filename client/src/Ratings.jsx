/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';

import ReviewAction from './RatingsComponent/ReviewAction.jsx';
import RatingsSearch from './RatingsComponent/RatingsSearch.jsx';
import RatingsContent from './RatingsComponent/RatingsContent.jsx';
import RatingsStarHeader from './RatingsComponent/RatingsStarHeader.jsx';
import RatingsSummaryReview from './RatingsComponent/RatingsSummaryReview.jsx';

class Ratings extends Component {
  constructor() {
    super();
    this.state = {
      ratingsStorage: [],
      limitedRatings: [],
      ratingsCount: 2,
      showMoreRatings: true,
    };
    this.onAddMoreReviews = this.onAddMoreReviews.bind(this);
  }

  componentDidMount() {
    this.getProductRatings();
  }

  onAddMoreReviews() {
    const { ratingsStorage, ratingsCount } = this.state;
    const ratingStorageLen = ratingsStorage.length;

    let newRatingsCount = ratingsCount + 2;
    let anyMoreRatings = true;

    if (ratingStorageLen < newRatingsCount) {
      newRatingsCount = ratingStorageLen;
      anyMoreRatings = false;
    }

    const newListings = ratingsStorage.slice(0, newRatingsCount);

    this.setState({
      limitedRatings: newListings,
      ratingsCount: newRatingsCount,
      showMoreRatings: anyMoreRatings,
    });
  }

  getProductRatings() {
    axios.get('/api/reviews/?product_id=48487')
      .then((results) => {
        this.setState({
          ratingsStorage: results.data.results,
          limitedRatings: results.data.results.slice(0, 2),
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { limitedRatings, showMoreRatings } = this.state;

    return (
      <>
        <div className="ratingsContainer">
          <div className="stars">
            <RatingsStarHeader />
          </div>
          <div className="filter">
            <RatingsSearch />
          </div>
          <div className="reviews">
            <div>
              <RatingsSummaryReview />
            </div>
          </div>
          <div className="temp" />
          <div className="content">
            <RatingsContent ratingsList={limitedRatings} />
          </div>
          <div className="reviewAction">
            <ReviewAction moreRatings={showMoreRatings} onAddMoreReviews={this.onAddMoreReviews} />
          </div>
        </div>
      </>
    );
  }
}

export default Ratings;
