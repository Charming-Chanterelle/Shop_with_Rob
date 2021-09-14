/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import axios from 'axios';
import { cleanup } from '@testing-library/react';
import { getRatings } from '../RatingsAPITest';
import { data } from '../RatingsComponent/RatingsDummyData';
import 'regenerator-runtime/runtime';

afterEach(cleanup);

jest.mock('axios');

describe('Fetch Product Ratings', () => {
  it('should return ratings and reviews for a specific product', async () => {
    axios.get.mockResolvedValueOnce(data);

    const ratings = await getRatings();

    expect(axios.get).toHaveBeenCalledWith('/api/reviews/?product_id=48487');
    expect(ratings).toEqual(data);
  });
});
