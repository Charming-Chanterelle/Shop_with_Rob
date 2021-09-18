import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import axios from 'axios';
import RelatedItems from './RelatedComponents/RelatedItems';
import ComparisonModal from './RelatedComponents/ComparisonModal.jsx';
import * as s from './RelatedComponents/RelatedStyles.jsx';

const Related = (props) => {
  const { items } = RelatedItems;
  const { show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);
  const [showModal, setShowModal] = useState(false);
  const [overviewID, setOverviewID] = useState('48445');
  // const [relatedIDs, setRelatedIDs] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    setLength(items.length);
  }, [items]);

  const getRelatedProductIds = () => {
    // const related = [];
    // const promises = [];
    axios.get(`/api/products/${overviewID}/related`)
      .then((response) => {
        console.log(response.data);
        // setRelatedIDs(response.data);
        const productIDs = response.data;
        return productIDs.map((id) => (
          [axios.get(`/api/products/${id}`), axios.get(`/api/products/${id}/style`)]

        ));
      })
      .then((second) => {
        console.log('second: ', second);
        // starting with an array of three nested arrays
        // create empty starting array
        // map over second
        // concatenate with starting array
        // end with a singular array
        second.map((promise) => {

        });
        const merged = [].concat.spread([], second);
        console.log(merged);
        return merged;
      })


    // have array of IDs
    // create array of promises with style request and product request
    // resolve promises
    // manipulate into desired format
    // want array of item objects and style objects

      .catch((err) => {
        console.log('error');
      });
  };

  useEffect(getRelatedProductIds, []);
  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  // const clicked = () => {
  //   console.log('clicked');
  //   setShowModal(true);
  // };

  return (
    <>
      <h1 className="bigText">Related Items</h1>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {
                  currentIndex > 0
                  && (
                  <button type="button" onClick={prev} className="left-arrow">
                    &lt;
                  </button>
                  )
              }
          <s.CardWrapper
            className="carousel-content-wrapper"
          >
            <div
              className={`carousel-content show-${show}`}
              style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
            >
              {/* start of item info */}
              {items.map((item) => (
                <s.Card>
                  <div>
                    <div>
                      <button onClick={() => setShowModal(true)} type="button">
                        <FaRegStar />
                      </button>
                      <ComparisonModal
                        onClose={() => setShowModal(false)}
                        showModal={showModal}
                      />
                    </div>
                    <img src={item.image} className="carouselImage" alt="related-item" />
                    <div>
                      {/* Name: */}
                      {item.name}
                    </div>
                    <div>
                      Category:
                      {item.category}
                    </div>
                    <div>
                      Price:
                      {`$${item.price}`}
                    </div>
                    <div>
                      Rating:
                      {item.rating}
                    </div>
                  </div>
                </s.Card>
              ))}

              {/* end of item info  */}
            </div>
          </s.CardWrapper>
          {
                  currentIndex < (length - show)
                  && (
                  <button type="button" onClick={next} className="right-arrow">
                    &gt;
                  </button>
                  )
              }
        </div>
      </div>
    </>
  );
};

export default Related;
