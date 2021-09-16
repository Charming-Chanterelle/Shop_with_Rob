import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
const randID = Math.ceil(Math.random() * (9 - 0));

const getAverageRating = ({ ratings }) => {
  // We want to get the total reviews and the average of the reviews.
  const weight = Object.keys(ratings);
  if (weight.length === 0) {
    return {};
  }
  const rating = Object.values(ratings);

  let numberOfRatings = 0;
  let avgRating = 0;

  for (let i = 0; i < weight.length; i++) {
    const currentRating = Number(rating[i]);
    const currentWeight = Number(weight[i]);

    if (currentRating !== 0) {
      numberOfRatings += currentRating;
      avgRating += (currentRating * currentWeight);
    }
  }
  avgRating /= numberOfRatings;

  const ratingsObj = {
    avgRating,
    numberOfRatings,
  };

  return ratingsObj;
};

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [styles, setStyle] = useState([]);
  const [meta, setMeta] = useState({});
  const [ratingsScore, setRatingScore] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(window.location);
    axios.get('/api/products/?count=10')
      .then((products) => {
        const currentProduct = products.data[randID];
        return [currentProduct, currentProduct.id];
      })
      .then(([currentProduct, ID]) => {
        axios.all([
          axios.get(`/api/products/${ID}/style`),
          axios.get(`/api/reviews/meta/?product_id=${ID}`),
        ])
          .then(axios.spread((style, metaReview) => {
            console.log(currentProduct);
            setProduct(currentProduct);
            setStyle(style.data.results);
            setMeta(metaReview.data);
            setRatingScore(getAverageRating(metaReview.data));
          }))
          .catch((err) => {
            console.log('here is error', err);
          });
      })
      .then(() => {
        setLoaded(true);
      })
      .catch((err) => {
        console.log('error in client styles/ratings GET', err);
      });
  }, []);

  return (
    <ProductContext.Provider value={{
      product, styles, meta, ratingsScore, loaded,
    }}
    >
      { children }
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

// .then((products) => {
//   axios.get(`/api/products/${products.data[randID].id}/style`)
//     .then((style) => {
//       setProduct(products.data[randID]);
//       setStyle(style.data.results);
//     })
//     .then(() => {
//       setLoaded(true);
//     })
//     .catch((err) => {
//       console.log('Product Style Error:', err);
//     });
// })
// .catch((err) => {
//   console.log('Product Context Error:', err);
// });
