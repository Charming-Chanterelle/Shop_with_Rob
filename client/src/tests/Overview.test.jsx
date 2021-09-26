/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import product from '../OverviewTESTproductReg.js';
import productStyle from '../OverviewTESTstyle.js';
import Overview from '../Overview.jsx';
import * as S from '../OverviewStyledComponents.jsx';
import axios from 'axios';
import 'regenerator-runtime/runtime';

afterEach(cleanup);

it('Renders without crashing', () => {
  render(<Overview />);
  const input = screen.getByDisplayValue('currentStyle');
  console.log(input);
  expect(input).toContain(
    {
      id: 48434,
      campus: 'hr-sfo',
      name: 'Morning Joggers',
      slogan: 'Make yourself a morning person',
      description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
      category: 'Pants',
      features: [
        {
          feature: 'Fabric',
          value: '100% Cotton',
        },
        {
          feature: 'Cut',
          value: 'Skinny',
        },
      ],
    },
  );
});

/* ^^ If the default ‘Select Size’ is currently
            selected: Clicking this button should open
            the size dropdown, and a message should
            appear above the dropdown stating “Please
            select size”.
            If there is no stock: This button should be hidden
            If both a valid size and valid quantity are
            selected: Clicking this button will add the product to the user’s cart. */

// jest.mock('axios');

// describe('Overview POST to DB', () => {
//   // add to cart works
//   it('Should add selected sku to api/cart', async () => {
//     axios.post.mockResolvedValueOnce(data);

//     const cart = await addToCart();

//     expect(axios.post).toHaveBeenCalledWith('/api/cart');
//     expect(cart).to.include(data);
//   });
// });

// describe('Overview interactions', () => {
//   // style buttons work for img
//   it('Style button click changes main rendered image set', () => {
//     const { getByTestId } = render(<Overview />);
//     fireEvent.click(getByTestId('button-up'));
//     expect(getByTestId('counter')).toHaveTextContent('1');
//   });
//   test('the shopping list has milk on it', () => {
//     expect(shoppingList).toContain('milk');
//     expect(new Set(shoppingList)).toContain('milk');
//   });

//   // style buttons work for changing name
//   it('Corresponding style name changes on style button click', () => {
//     const { queryByLabelText, getByLabelText } = render(
//       <CheckboxWithLabel labelOn="On" labelOff="Off" />,
//     );
//     expect(queryByLabelText(/off/i)).toBeTruthy();
//     fireEvent.click(getByLabelText(/off/i));
//     expect(queryByLabelText(/on/i)).toBeTruthy();
//   });
//   test('but there is a "stop" in Christoph', () => {
//     expect('Christoph').toMatch(/stop/);
//   });

//   // hover effect happens
//   test('Toggles content visibility when control is clicked', () => {
//     const { getByTestId } = render(<Overview />);
//     const control = getByTestId('control-container');
//     const content = getByTestId('content-container');
//     expect(content).not.toBeVisible();
//     fireEvent.click(control);
//     expect(content).toBeVisible();
//     fireEvent.click(control);
//     expect(content).not.toBeVisible();
//   });

//   foundListItem.prop('onMouseEnter')();
//   expect(z).not.toBeTruthy();

// });

describe('Overview <></>s', () => {
  // has original and sale price to spec
  // has features
  it('Should have dynamically populated features', () => {
    const getByText = render(<Overview />);
    expect(getByText).toContain(product.features.feature);
  });
  // thumbnail has highlight when === main img
});
