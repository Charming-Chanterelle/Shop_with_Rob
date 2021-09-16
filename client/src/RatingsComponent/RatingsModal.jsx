import React from 'react';
import InputTextBox from './RatingsTextInput.jsx';
import InputTextAreaBox from './RatingsTextAreaInput.jsx';
import InputFile from './RatingsFileInput.jsx';
import ProductRating from './ProductRating.jsx';
import RecommendProduct from './RatingsRecommendProduct.jsx';
import RatingsCharacteristics from './RatingsCharacteristics.jsx'

const RatingsModal = (props) => {

  return (
    <>
      <div className={`modal ${props.show ? 'show' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Write Your Review</h2>
            <h3 className="modal-subtitle">About the product</h3>
          </div>
          <div className="modal-body">
          <InputTextBox label="Nickname*" maxlength="60" placeholder="Example: jackson11!"/>
          <InputTextBox label="Email*" maxlength="60" placeholder="Example: jackson11@email.com"/>
          <ProductRating />
          <RecommendProduct label="Email*" maxlength="60" placeholder="Example: jackson11@email.com"/>
          <RatingsCharacteristics />
          <InputTextAreaBox
            label="Review Summary*"
            rows="3"
            cols="50"
            minlength="0"
            maxlength="60"
            placeholder="Example: Best purchase ever!"
          />
          <InputTextAreaBox
            label="Review Body*"
            rows="8"
            cols="50"
            minlength="50"
            maxlength="1000"
            placeholder="Why did you like the product or not?"
          />
          <InputFile />
          </div>
          <div className="modal-footer">
            <button className="submitButton" style={{ "cursor":"pointer" }} onClick={props.onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default RatingsModal;
