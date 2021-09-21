/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
import ProductContextProvider from '../contexts/ProductContext.jsx';

// import ReviewAction from '../RatingsComponent/ReviewAction';
// import App from '../App';
import ReviewAction from '../RatingsComponent/ReviewAction';

afterEach(cleanup);

describe('Ratings User Action', () => {
  test('Has More Reviews Button when there are more reviews to show', () => {
    const { getByText } = render(
      <ProductContextProvider>
        <ReviewAction moreRatings={ true } />
      </ProductContextProvider>,
    );
    expect(getByText('More Reviews')).toBeDefined();
  });
  test('Has the ability to Add a review', () => {
    const { getByText } = render(
      <ProductContextProvider>
        <ReviewAction />
      </ProductContextProvider>,
    );
    expect(getByText('Add A Review +')).toBeDefined();
  });
});
