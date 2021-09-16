/* eslint-disable import/extensions */
import React, { Component, useContext } from 'react';
import axios from 'axios';
import { ProductContext } from './contexts/ProductContext.jsx';

import ReviewAction from './RatingsComponent/ReviewAction.jsx';
import RatingsSearch from './RatingsComponent/RatingsSearch.jsx';
import RatingsContent from './RatingsComponent/RatingsContent.jsx';
import RatingsStarHeader from './RatingsComponent/RatingsStarHeader.jsx';
import RatingsSummaryReview from './RatingsComponent/RatingsSummaryReview.jsx';



class Ratings extends Component {

  constructor() {
    super();
    this.state = {
      product_id: 48445,
      ratings: [],
      total_ratings_count: 26,
      count: 2,
      showMoreRatings: true,
    };
    this.onAddMoreReviews = this.onAddMoreReviews.bind(this);
    this.getProductRatings = this.getProductRatings.bind(this);
    this.handleFilterData = this.handleFilterData.bind(this);
  }
  componentDidMount() {
    this.getProductRatings();
  }

  handleFilterData(sort) {
    const { count } = this.state;

    this.getProductRatings(count, sort);
  }

  onAddMoreReviews() {
    const { total_ratings_count, showMoreRatings } = this.state;
    let { count } = this.state;
    count += 2;

    if (count > total_ratings_count) {
      count = total_ratings_count;
      this.setState({
        showMoreRatings: !showMoreRatings,
      });
    }
    this.getProductRatings(count);
  }
  // look into retis
  // elastic search db
  //
  getProductRatings(count = 2, sort = 'relevant') {
    const { product_id } = this.state;

    // 48487
    // 48445
    axios.get('/api/reviews/', {
      params: {
        product_id,
        count,
        sort,
      },
    })
      .then((results) => {
        this.setState({
          ratings: results.data.results,
          count,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { ratings, total_ratings_count, showMoreRatings } = this.state;

    return (
      <>
        <div className="ratingsContainer">
          <div className="stars">
            <RatingsStarHeader />
          </div>
          <div className="filter">
            <RatingsSearch
              totalRatings={total_ratings_count}
              handleFilterData={this.handleFilterData}
            />
          </div>
          <div className="reviews">
            <div>
              <RatingsSummaryReview />
            </div>
          </div>
          <div className="temp" />
          <div className="content">
            <RatingsContent ratingsList={ratings} />
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
