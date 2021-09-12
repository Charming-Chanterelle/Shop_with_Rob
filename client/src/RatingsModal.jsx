import React from 'react';

const RatingsModal = (props) => {

  return (
    <>
      <div className={`modal ${props.show ? 'show' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Write Your Review</h4>
            <h5 className="modal-subtitle">About the product</h5>
          </div>
          <div className="modal-body">
            <form>
              <label className="bigText">
                Overall Rating:*
                <input type="text" />
              </label>
              <div>
                <label>
                  Do you recommend this product?*
                  <label>
                    Yes
                    <input type="radio" />
                  </label>
                  <label>
                    No
                    <input type="radio" />
                  </label>
                </label>
              </div>
              <div>
                <label>
                  Characteristics*
                  <label>
                    Yes
                    <input type="radio" />
                  </label>
                  <label>
                    No
                    <input type="radio" />
                  </label>
                </label>
              </div>
              <div>
                <label>
                  Review summary*
                  <textarea
                  name="summary"
                  rows="5"
                  cols="50"
                  maxLength="60"
                  placeholder="Example: Best purchase ever!" />
                </label>
              </div>
              <div>
                <label>
                  Review Body*
                  <textarea
                  name="body"
                  rows="12"
                  cols="50"
                  minLength="50"
                  maxLength="1000"
                  placeholder="Why did you like the product or not?" />
                </label>
                <label>
                  Counter
                </label>
              </div>
              <label className="bigText">
                Nickname:*
                <input type="text" maxLength="60" placeholder="Example: jackson11!"/>
              </label>
              <label className="bigText">
                Your Email:*
                <input type="text" maxLength="60" placeholder="Example: jackson11@email.com"/>
              </label>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={props.onSubmit} className="button">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
};

export default RatingsModal;
