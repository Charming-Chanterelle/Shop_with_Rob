/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import product from '/../OverviewTESTproductReg.js';
import productStyle from '/../OverviewTESTstyle.js';
import Overview from '/../Overview.jsx';
import axios from 'axios';
import 'regenerator-runtime/runtime';

afterEach(cleanup);

jest.mock('axios');

describe('Overview POST to DB', () => {
  // add to cart works
  it('Should add selected sku to api/cart', async () => {
    axios.post.mockResolvedValueOnce(data);

    const cart = await addToCart();

    expect(axios.post).toHaveBeenCalledWith('/api/cart');
    expect(cart).to.include(data);
  });
});

describe('Overview interactions', () => {
  // style buttons work for img
  it('Style button click changes main rendered image set', () => {
    const { getByTestId } = render(<Overview />);
    fireEvent.click(getByTestId('button-up'));
    expect(getByTestId('counter')).toHaveTextContent('1');
  });
  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  // style buttons work for changing name
  it('Corresponding style name changes on style button click', () => {
    const { queryByLabelText, getByLabelText } = render(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />,
    );
    expect(queryByLabelText(/off/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/off/i));
    expect(queryByLabelText(/on/i)).toBeTruthy();
  });
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

  // hover effect happens
  foundListItem.prop('onMouseEnter')();
  expect(z).not.toBeTruthy();

});

describe('Overview <></>s', () => {
  // has original and sale price to spec
  // has features
  it('should have dynamically populated features', () => {
    const { getByText } = render(<Overview />);
    expect(getByText('Related Items')).toBeDefined();
  });
  // thumbnail has highlight when === main img
});
