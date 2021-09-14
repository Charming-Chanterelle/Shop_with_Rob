import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewAction from './RatingsComponent/ReviewAction.jsx';
import RatingsSearch from './RatingsComponent/RatingsSearch.jsx';
import RatingsContent from './RatingsComponent/RatingsContent.jsx';
import RatingsStarHeader from './RatingsComponent/RatingsStarHeader.jsx';
import RatingsSummaryReview from './RatingsComponent/RatingsSummaryReview.jsx';
const { data } = require('./RatingsComponent/RatingsDummyData.js');

let newData = data.slice(0,2);

class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: newData,
      ratingsCount: 2,
      showMoreRatings: true,
    };
    this.onAddMoreReviews = this.onAddMoreReviews.bind(this);
  }

  // componentDidMount() {
  //   axios.get('/api/reviews/?product_id=48487')
  //     .then((results) => {
  //       this.setState({
  //         reviews: results.data.results,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  onAddMoreReviews() {
    const { ratingsCount } = this.state;

    let newRatingsCount = ratingsCount + 2;
    let anyMoreRatings = true;

    if (data.length < newRatingsCount) {
      newRatingsCount = data.length;
      anyMoreRatings = false;
    }

    const newListings = data.slice(0, newRatingsCount);

    this.setState({
      ratings: newListings,
      ratingsCount: newRatingsCount,
      showMoreRatings: anyMoreRatings,
    });
  };

  render() {
    const { ratings, showMoreRatings } = this.state;

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

Ratings.propTypes = {
  reviews: PropTypes.any,
};

export default Ratings;
