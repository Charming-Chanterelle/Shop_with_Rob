import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
const randID = Math.ceil(Math.random() * (9 - 0));

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [styles, setStyle] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(window.location);
    axios.get('/api/products/?count=10')
      .then((products) => {
        axios.get(`/api/products/${products.data[randID].id}/style`)
          .then((style) => {
            setProduct(products.data[randID]);
            setStyle(style.data.results);
          })
          .then(() => {
            setLoaded(true);
          })
          .catch((err) => {
            console.log('Product Style Error:', err);
          });
      })
      .catch((err) => {
        console.log('Product Context Error:', err);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ product, styles, loaded }}>
      { children }
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
