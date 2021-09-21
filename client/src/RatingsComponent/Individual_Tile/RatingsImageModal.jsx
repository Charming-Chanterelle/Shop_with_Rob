import React from 'react';

const RatingsImageModal = (props) => {

  return (
    <>
      <div className={`modal-image ${props.imageShow ? 'show' : ''}`}>
        <div className="modal-image-content">
          <div className="modal-image-body">
            <img src={props.url} className="ratings-modal-image"/>
          </div>
          <div className="modal-image-footer">
            <button className="submitButton" style={{ "cursor":"pointer" }} onClick={props.onSubmit}>Close</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default RatingsImageModal;
