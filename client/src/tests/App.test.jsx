/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('App tests', () => {
  it('should find Hello', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello')).toBeDefined();
  });
});
