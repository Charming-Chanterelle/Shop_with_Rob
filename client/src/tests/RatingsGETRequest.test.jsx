/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import axios from 'axios';
import { cleanup } from '@testing-library/react';
import Ratings from '../Ratings';
import { data } from '../RatingsComponent/RatingsDummyData';
import 'regenerator-runtime/runtime';

afterEach(cleanup);

describe('Fetch Product Ratings', () => {
  it('should return ratings and reviews for a specific product', async () => {
    axios.get.mockResolvedValueOnce(data);

    const ratings = await Ratings.getProductRatings();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/api/reviews/?product_id=48487');
    expect(ratings).toEqual(data);
  });

  it('should return an empty product rating array', async () => {
    // const error = 'Network Error';
    // axios.get.mockRejectedValueOnce(error);

    const ratings = await Ratings.getProductRatings();

    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/api/reviews/?product_id=48487');
    expect(ratings).toEqual([]);
  });
});
