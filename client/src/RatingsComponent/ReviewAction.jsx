import React, { useState } from 'react';
import RatingsModal from './RatingsModal.jsx';

const ReviewAction = ({onAddMoreReviews, moreRatings}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {moreRatings ? <button type="button" style={{ "margin": "15px", "cursor":"pointer" }} onClick={() => onAddMoreReviews()}>More Reviews</button> : <> </>}
      <button type="button" style={{ "cursor":"pointer" }} onClick={() => setShow(true)}>Add A Review +</button>
      <RatingsModal onSubmit={() => setShow(false)} show={show} />
    </>
  );
};

export default ReviewAction;
