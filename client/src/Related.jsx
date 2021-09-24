/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react';
import { FaRegStar, FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import axios from 'axios';
import RelatedItems from './RelatedComponents/RelatedItems';
import ComparisonModal from './RelatedComponents/ComparisonModal.jsx';
import * as s from './RelatedComponents/RelatedStyles.jsx';
import { ProductContext } from './contexts/ProductContext.jsx';

const Related = (props) => {
  // const { items } = RelatedItems;
  const { show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  // const [overviewID, setOverviewID] = useState(productID);
  const [relatedItems, setRelatedItems] = useState([]);

  const { productID, changeHash } = useContext(ProductContext);

  useEffect(() => {
    setLength(relatedItems.length);
  }, [relatedItems]);




  const getRelatedProducts = () => {
    // axios.get(`/api/products/${productID}/related`)
    axios.get(`/api/products/${productID}/related`)
      .then((response) => {
        const productIDs = response.data;
        return productIDs.map((id) => (
          [axios.get(`/api/products/${id}`), axios.get(`/api/products/${id}/style`), axios.get(`api/reviews/meta/?product_id=${id}`)]

        ));
      })
      .then((second) =>
        // starting with an array of three nested arrays
        // end with a singular array
        Promise.all(second.map((promises) => Promise.all(promises))))
      .then((resolved) =>
        // have array of arrays
        // need data from nested array
        // eslint-disable-next-line implicit-arrow-linebreak
        resolved.map((array) => [array[0].data, array[1].data.results, array[2].data.ratings]))
      .then((fourth) => fourth.map((array) => ({
        product: array[0],
        styles: array[1],
        reviews: getAverageRating(array[2]).avgRating,
      })))
      .then((fifth) => {
        console.log(fifth.length);
        setRelatedItems(fifth);
      })

    // have array of IDs
    // create array of promises with style request and product request
    // resolve promises
    // manipulate into desired format
    // want array of item objects and style objects

      .catch((err) => {
        console.log('error getting related items: ', err);
      });
  };

  const [length, setLength] = useState(relatedItems.length);


  useEffect(() => {
    getRelatedProducts();
  }, [productID]);



  // useEffect(getRelatedProducts, []);
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

  return (
    <>
      <div className="carousel-container">
        <h1 className="bigText">Related Items</h1>
        <div className="carousel-wrapper">
          {
                  currentIndex > 0
                  && (
                  <s.RoundButton type="button" onClick={prev} className="left-arrow">
                  <FaChevronCircleLeft></FaChevronCircleLeft>
                  </s.RoundButton>
                  )
              }
          <s.CardWrapper
            className="carousel-content-wrapper"
            data-testid="carousel-content-wrapper"
          >
            <div
              className={`carousel-content show-${show}`}
              style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
            >
              {/* start of item info */}
              {relatedItems.map((item) => (
                <s.Card key={item.product.name} onClick={() => changeHash(item.product.id)}>
                  <div>
                    <div>
                      <s.RoundButton onClick={() => setShowModal(true)} type="button">
                        <FaRegStar />
                      </s.RoundButton>
                      <ComparisonModal
                        onClose={() => setShowModal(false)}
                        showModal={showModal}
                      />
                    </div>
                    <img src={item.styles[0].photos[0].thumbnail_url} className="carouselImage" alt="related-item" />
                    <s.CardText>
                      <div className="bigText">
                        <b>
                          {item.product.name}
                        </b>
                      </div>
                      <div className="bigText">
                        Category:
                        {` ${item.product.category}`}
                      </div>
                      <div className="bigText">
                        Price:
                        {` $${item.product.default_price}`}
                      </div>
                      <div className="bigText">
                        Rating:
                        {` ${item.reviews.toPrecision(3)}`}
                      </div>
                    </s.CardText>
                  </div>
                </s.Card>
              ))}

              {/* end of item info  */}
            </div>
          </s.CardWrapper>
          {
                  (currentIndex < (length - show) && relatedItems.length >= show)
                  && (
                  <s.RoundButton type="button" onClick={next} className="right-arrow">
                    <FaChevronCircleRight></FaChevronCircleRight>
                  </s.RoundButton>
                  )
              }
        </div>
      </div>
    </>
  );
};

const getAverageRating = (ratings) => {
  // We want to get the total reviews and the average of the reviews.
  const weight = Object.keys(ratings);
  if (weight.length === 0) {
    return {
      avgRating: 0,
      numberOfRatings: 0,
    };
  }
  const rating = Object.values(ratings);

  let numberOfRatings = 0;
  let avgRating = 0;
  const ratingsPercent = {};

  for (let i = 0; i < weight.length; i++) {
    const currentRating = Number(rating[i]);
    const currentWeight = Number(weight[i]);

    if (currentRating !== 0) {
      numberOfRatings += currentRating;
      avgRating += (currentRating * currentWeight);
    }
  }

  for (let j = 0; j < weight.length; j++) {
    const ratingPercent = Number(rating[j]);
    const weightPercent = weight[j];
    if (ratingPercent !== 0) {
      ratingsPercent[weightPercent] = parseFloat(ratingPercent / numberOfRatings).toFixed(2);
    }
  }
  avgRating /= numberOfRatings;

  const ratingsObj = {
    avgRating,
    numberOfRatings,
    ratingsPercent,
  };

  return ratingsObj;
};

export default Related;

// // eslint-disable-next-line max-len
// console.log('object: ', obj);
// const sum = 1 * obj.reviews[1] + 2 * obj.reviews[2] + 3 * obj.reviews[3] + 4 * obj.reviews[4] + 5 * obj.reviews[5];
// // eslint-disable-next-line max-len
// console.log('sum: ', sum);
// // eslint-disable-next-line max-len
// const avg = sum / (obj.reviews[1] + obj.reviews[2] + obj.reviews[3] + obj.reviews[4] + obj.reviews[5]);
// console.log('avg: ', avg);
// obj.reviews = avg;
