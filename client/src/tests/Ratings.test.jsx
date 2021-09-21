/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
import { ProductContext } from '../contexts/ProductContext';

// import ReviewAction from '../RatingsComponent/ReviewAction';
// import App from '../App';
import ReviewAction from '../RatingsComponent/ReviewAction';

afterEach(cleanup);

describe('Ratings', () => {
  test('renders Ratings component', () => {
    const { getByText } = render(<ReviewAction />);
    expect(getByText('More Reviews')).toBeDefined();
  });
});