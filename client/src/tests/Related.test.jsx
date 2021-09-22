<<<<<<< HEAD
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import axios from 'axios';
import Related, { getRelatedProducts } from "../Related.jsx"
// import 'jest-dom/extend-expect';
import 'regenerator-runtime/runtime';
=======
// import React from 'react';

// import { render, screen, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
// import Related from '../Related';
>>>>>>> e8a9447b4edc2ae996c16ed1ebe26d89deac9e19

// afterEach(cleanup);

describe('Related Items', () => {
  it('should have "Related Items" header', () => {
    const { getByText } = render(<Related />);
    expect(getByText('Related Items')).toBeDefined();
  });
  it('should include an individual container for each carousel element', () => {
    const { getByTestId } = render(<Related />);
    expect(getByTestId('carousel-content-wrapper')).toBeDefined();
  });
  it('should retrieve related items, async', async () => {
    axios.get.mockResolvedValueOnce(data);
    const relatedItems = await getRelatedProducts();
    expect(axios.get).toHaveBeenCalledWith('api/products/48434/related');
    expect(relatedItems).toEqual(data);
  });
});
