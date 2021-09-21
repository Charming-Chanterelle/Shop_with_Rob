import React, { useState } from 'react';
import AddReviewModal from './Add_Review_Modal/AddReviewModal.jsx';
import * as RC from './RatingsComponentStyledComponent.jsx';

const ReviewAction = ({ onAddReview, onDisplayMoreReviews, moreRatings }) => {
  const [show, setShow] = useState(false);

  const onReviewSubmit = (userReview) => {
    onAddReview(userReview);
    setShow(false);
  };

  const handleMoreReviews = (event) => {
    event.preventDefault();
    onDisplayMoreReviews();
  };

  return (
    <>
      {moreRatings
        ? (
          <RC.RatingsAndReviewAction
            onClick={(e) => handleMoreReviews(e)}
          >
            More Reviews
          </RC.RatingsAndReviewAction>
        )
        : <> </>}
      <RC.RatingsAndReviewAction
        onClick={() => setShow(true)}
      >
        Add A Review +
      </RC.RatingsAndReviewAction>
      <AddReviewModal
        onReviewSubmit={onReviewSubmit}
        show={show}
      />
    </>
  );
};

export default ReviewAction;
