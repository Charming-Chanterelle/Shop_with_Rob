import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
const randID = Math.ceil(Math.random() * (9 - 0));

const getAverageRating = ({ ratings }) => {
  // We want to get the total reviews and the average of the reviews.
  const weight = Object.keys(ratings);
  if (weight.length === 0) {
    return {
      avgRating: 0,
      numberOfRatings: 0,
      ratingsPercent: 0,
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

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [styles, setStyle] = useState([]);
  const [meta, setMeta] = useState({});
  const [ratingsScore, setRatingScore] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [productID, setproductID] = useState(48445);
  // 48434
  const testID = (test) => {
    setproductID(test);
  };

  useEffect(() => {
    // console.log(window.location);
    // console.log(productID);
    window.location.hash = productID;
    console.log('This is the product ID', productID)
    axios.get(`/api/products/${productID}`)
      .then((response) => {
        const currentProduct = response.data;
        console.log('current: ', currentProduct);
        setProduct(currentProduct);
        // return [currentProduct, currentProduct.id];
        return currentProduct;
      })
      .then(() => {
        axios.all([
          axios.get(`/api/products/${productID}/style`),
          axios.get(`/api/reviews/meta/?product_id=${productID}`),
        ])
          .then(axios.spread((style, metaReview) => {
            console.log('im meta', metaReview.data);
            // setProduct(currentProduct);
            setStyle(style.data.results);
            setMeta(metaReview.data);
            setRatingScore(getAverageRating(metaReview.data));
            // console.log('hash: ', window.location.hash);
            // window.location.hash = '48445';
          }))
          .then(() => {
            setLoaded(true);
          })
          .catch((err) => {
            console.log('here is error', err);
          });
      })
      .catch((err) => {
        console.log('error in client styles/ratings GET', err);
      });
  }, [productID]);

  return (
    <ProductContext.Provider value={{
      product, styles, meta, ratingsScore, loaded, productID, testID,
    }}
    >
      { children }
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
