import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();
const randID = Math.ceil(Math.random() * (9 - 0));
const ProductContextProvider = ({ children }) => {
  const [product, setProducts] = useState({});
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get('/api/products/?count=10')
      .then((products) => {
        axios.get(`/api/products/${products.data[randID].id}/style`)
          .then((style) => {
            setProducts(products.data[randID]);
            setStyles(style.data.results);
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
    <ProductContext.Provider value={{ product, styles }}>
      { children }
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
