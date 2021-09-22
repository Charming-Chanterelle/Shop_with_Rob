import React from 'react';

import { render, screen, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
import Related from '../Related';

afterEach(cleanup);

describe('Related Items', () => {
  it('should have "Related Items" header', () => {
    const { getByText } = render(<Related />);
    expect(getByText('Related Items')).toBeDefined();
  });
  // it('should include an individual container for each carousel element', () => {
  //   const { getByTestId } = render(<Related />);
  //   expect(getByTestId('carousel-content-wrapper')).toBeDefined();
  // });
});