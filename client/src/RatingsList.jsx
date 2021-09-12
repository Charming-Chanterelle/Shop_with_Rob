import React, { useState } from 'react';
import RatingsModal from './RatingsModal.jsx';

const Ratings = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button type="button" style={{ "margin": "15px" }}>More Reviews</button><button type="button" onClick={() => setShow(true)}>Add A Review +</button>
      <RatingsModal onClose={() => setShow(false)} show={show} />
    </>
  )
};

export default Ratings;
