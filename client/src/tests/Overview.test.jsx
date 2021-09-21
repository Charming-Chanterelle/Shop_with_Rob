/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// import axios from 'axios';
// import { cleanup } from '@testing-library/react';
// import { data } from '../OverviewTESTDATA.js';
// import 'regenerator-runtime/runtime';

// afterEach(cleanup);

// jest.mock('axios');

// describe('POST to DB', () => {
//   it('should add the selected sku style to the cart for purchase', async () => {
//     axios.post.mockResolvedValueOnce(data);

//     const cart = await addToCart();

//     expect(axios.post).toHaveBeenCalledWith('/api/cart');
//     expect(cart).to.include(data);
//   });
// });

// describe('Overview tests', () => {
//   it('Style buttons begin change of rendered images', () => {
//     const { getByTestId } = render(<Overview />);
//     fireEvent.click(getByTestId('button-up'));
//     expect(getByTestId('counter')).toHaveTextContent('1');
//   });
// });