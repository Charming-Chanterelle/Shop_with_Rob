import React, { useState } from 'react';
import AddReviewModal from './Add_Review_Modal/AddReviewModal.jsx';

const ReviewAction = ({ onAddReview, onDisplayMoreReviews, moreRatings}) => {
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
      {moreRatings ? <button type="button" style={{ "margin": "15px", "cursor":"pointer" }} onClick={(e) => handleMoreReviews(e)}>More Reviews</button> : <> </>}
      {/* <button type="button" style={{ "cursor":"pointer" }} onClick={() => setShow(true)}>Add A Review +</button>
      <AddReviewModal onReviewSubmit={onReviewSubmit} show={show} /> */}
    </>
  );
};

export default ReviewAction;
