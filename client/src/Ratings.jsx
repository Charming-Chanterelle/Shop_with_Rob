/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import * as R from './RatingsStyledComponents.jsx';
import { ProductContext } from './contexts/ProductContext.jsx';
import ReviewAction from './RatingsComponent/ReviewAction.jsx';
import RatingsFilter from './RatingsComponent/RatingsFilter.jsx';
import RatingsContent from './RatingsComponent/RatingsContent.jsx';
import RatingsStarHeader from './RatingsComponent/RatingsStarHeader.jsx';
import RatingsProductBreakdown from './RatingsComponent/RatingsProductBreakdown.jsx';
import * as RC from './RatingsComponent/RatingsComponentStyledComponent.jsx';
// Number(window.location.hash.replace('#', ''))
const Ratings = ({ reference }) => {
  const { productID, loaded, ratingsScore } = useContext(ProductContext);

  const [ratings, setRatings] = useState([]);
  const [ratingsCopy, setRatingsCopy] = useState([]);
  const [starFilter, setStarFilter] = useState([]);
  const [totalRatings, setTotalRatings] = useState(0);
  // total_ratings_count: 26,
  const [showMoreRatings, setShowMoreRatings] = useState(true);
  const [count, setCount] = useState(2);

  const getProductRatings = (currentCount = 2, sort = 'relevant') => {
    // 48487
    // 48445
    axios.get('/api/reviews/', {
      params: {
        product_id: productID,
        count: currentCount,
        sort,
      },
    })
      .then(({ data }) => {
        setRatings(data.results);
        setRatingsCopy(data.results);
      })
      .catch((err) => {
        console.log('Error in getting review data', err);
      });
  };

  useEffect(() => {
    getProductRatings();
  }, [productID]);

  useEffect(() => {
    setTotalRatings(ratingsScore.numberOfRatings);
  }, [ratingsScore]);

  useEffect(() => {
    getProductRatings(count);
  }, [count]);

  const handleFilterData = (sort) => {
    getProductRatings(count, sort);
  };

  const onDisplayMoreReviews = () => {
    let newCount = count + 2;
    if (newCount > totalRatings) {
      newCount = totalRatings;
      setShowMoreRatings(!showMoreRatings);
    }
    setCount(newCount);
  };

  const onAddReview = (obj) => {
    console.log('In the ratings component');
    console.log(obj);
    // Create post request to send back data.
  };

  const onUpdateReview = (id, action) => {
    console.log(id);
    axios.put(`/api/reviews/${id}/${action}`)
      .catch((err) => {
        console.log('Error in updating the review action', err);
      });
  };

  const onStarFilter = (starRating, isClicked) => {
    const updatedFilterList = [...starFilter];
    const indexOfRating = updatedFilterList.indexOf(starRating);
    if (starFilter.length === 0 || indexOfRating === -1) {
      updatedFilterList.push(starRating);
    } else if (isClicked[starRating]) {
      updatedFilterList.push(starRating);
    } else {
      updatedFilterList.splice(indexOfRating, 1);
    }

    setStarFilter(updatedFilterList);
  };

  const updateFilteredRatings = () => {
    const filteredRatings = ratingsCopy.filter((ratingsObj) => {
      const currentRating = starFilter.some((rating) => (
        ratingsObj.rating === rating
      ));
      return currentRating;
    });
    setRatings(filteredRatings);
  };

  useEffect(() => {
    updateFilteredRatings();
  }, [starFilter]);

  const onStarUnfilter = () => {
    setRatings(ratingsCopy);
    setStarFilter([]);
  };

  if (ratings.length !== 0) {
    return (
      <>
        <RC.RatingsAndReviewTitle>
          Ratings & Reviews
        </RC.RatingsAndReviewTitle>
        <R.Container ref={reference}>
          <R.Stars>
            <RatingsStarHeader />
          </R.Stars>
          <R.Filter>
            <RatingsFilter
              totalRatings={totalRatings}
              handleFilterData={handleFilterData}
            />
          </R.Filter>
          <R.Reviews>
            <RatingsProductBreakdown
              onStarFilter={onStarFilter}
              onStarUnfilter={onStarUnfilter}
            />
          </R.Reviews>
          <R.Content>
            <RatingsContent
              ratingsList={ratings}
              productID={productID}
              onUpdateReview={onUpdateReview}
            />
          </R.Content>
          <R.ReviewAction>
            <ReviewAction
              moreRatings={showMoreRatings}
              onAddReview={onAddReview}
              onDisplayMoreReviews={onDisplayMoreReviews}
            />
          </R.ReviewAction>
        </R.Container>
      </>
    );
  }
  return <div>No Reviews</div>;
};

export default Ratings;
