import React, { createContext, useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductContext.jsx';
import axios from 'axios';

export const ProductStyleContext = createContext();

const ProductStyleContextProvider = ({ children }) => {
  // const { product } = useContext(ProductContext);
  // const { id } = product;
  const [styles, setStyle] = useState({});

  useEffect(() => {
    axios.get(`/api/products/48439/style`)
      .then((style) => {
        setStyle(style.data.results);
      })
      .catch((err) => {
        console.log('Product Style Context Error:', err);
      });
  }, []);

  return (
    <ProductStyleContext.Provider value={{ styles }}>
      { children }
    </ProductStyleContext.Provider>
  );
};

export default ProductStyleContextProvider;
