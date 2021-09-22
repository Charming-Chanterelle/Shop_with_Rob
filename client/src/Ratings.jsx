/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';
import * as R from './RatingsStyledComponents.jsx';

import ReviewAction from './RatingsComponent/ReviewAction.jsx';
import RatingsFilter from './RatingsComponent/RatingsFilter.jsx';
import RatingsContent from './RatingsComponent/RatingsContent.jsx';
import RatingsStarHeader from './RatingsComponent/RatingsStarHeader.jsx';
import RatingsProductBreakdown from './RatingsComponent/RatingsProductBreakdown.jsx';

class Ratings extends Component {
  constructor() {
    super();
    this.state = {
      product_id: 48445,
      ratings: [],
      ratingsCopy: [],
      starFilter: [],
      total_ratings_count: 26,
      count: 2,
      showMoreRatings: true,
    };
    this.onDisplayMoreReviews = this.onDisplayMoreReviews.bind(this);
    this.getProductRatings = this.getProductRatings.bind(this);
    this.handleFilterData = this.handleFilterData.bind(this);
    this.onAddReview = this.onAddReview.bind(this);
    this.onUpdateReview = this.onUpdateReview.bind(this);
    this.onStarFilter = this.onStarFilter.bind(this);
    this.onStarUnfilter = this.onStarUnfilter.bind(this);
  }

  componentDidMount() {
    this.getProductRatings();
  }

  handleFilterData(sort) {
    const { count } = this.state;

    this.getProductRatings(count, sort);
  }

  onDisplayMoreReviews() {
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

  onAddReview(obj) {
    // console.log('In the ratings component')
    // console.log(obj);
    // Create post request to send back data.
  }

  onUpdateReview(id, action){
    axios.put(`/api/reviews/${id}/${action}`)
    .catch((err) => {
      console.log('Error in updating the review action', err);
    })
  };

  onStarFilter(starRating, isClicked) {
    const { ratingsCopy, starFilter } = this.state;
    const updatedFilterList = [...starFilter];
    const indexOfRating = updatedFilterList.indexOf(starRating);
    if (starFilter.length === 0 || indexOfRating === -1) {
      updatedFilterList.push(starRating);
    } else if (isClicked[starRating]) {
      updatedFilterList.push(starRating);
    } else {
      updatedFilterList.splice(indexOfRating, 1);
    }

    const filteredRatings = ratingsCopy.filter((ratingsObj) => {
      const currentRating = updatedFilterList.some((rating) => (
        ratingsObj.rating === rating
      ));
      return currentRating;
    });

    this.setState({
      ratings: filteredRatings,
      starFilter: updatedFilterList,
    });
  }

  onStarUnfilter() {
    const { ratingsCopy } = this.state;

    this.setState({
      ratings: ratingsCopy,
      starFilter: [],
    });
  }

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
          ratingsCopy: results.data.results,
          count,
        });
      })
      .catch((err) => {
        console.log('Error in getting review data', err);
      });
  }

  render() {
    const { ratings, product_id, total_ratings_count, showMoreRatings } = this.state;
    return (
      <>
        <R.Container>
          <R.Stars>
            <RatingsStarHeader />
          </R.Stars>
          <R.Filter>
            <RatingsFilter
              totalRatings={total_ratings_count}
              handleFilterData={this.handleFilterData}
            />
          </R.Filter>
          <R.Reviews>
            <RatingsProductBreakdown
              onStarFilter={this.onStarFilter}
              onStarUnfilter={this.onStarUnfilter}
            />
          </R.Reviews>
          <R.Content>
            <RatingsContent
              ratingsList={ratings}
              productID={product_id}
              onUpdateReview={this.onUpdateReview}
            />
          </R.Content>
          <R.ReviewAction>
            <ReviewAction
              moreRatings={showMoreRatings}
              onAddReview={this.onAddReview}
              onDisplayMoreReviews={this.onDisplayMoreReviews}
            />
          </R.ReviewAction>
        </R.Container>
      </>
    );
  }
}

export default Ratings;
