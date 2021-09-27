/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import React, { useContext } from 'react';
import {
  render, screen, cleanup, fireEvent, waitFor,
} from '@testing-library/react';
// import 'jest-dom/extend-expect';
import ProductContextProvider from '../contexts/ProductContext.jsx';
import 'regenerator-runtime/runtime';
// import ReviewAction from '../RatingsComponent/ReviewAction';
// import App from '../App';
import ReviewAction from '../RatingsComponent/ReviewAction';
import Ratings from '../Ratings.jsx';
import RatingsSummaryChart from '../RatingsComponent/Review_Breakdown/RatingsSummaryChart';

afterEach(cleanup);

describe('Ratings User Action', () => {
  it('Has the Ability to click more reviews', async () => {
    const { getByText } = await render(
      <ProductContextProvider>
        <ReviewAction moreRatings />
      </ProductContextProvider>,
    );
    expect(getByText('More Reviews')).toBeDefined();
  });
  it('Has the ability to Add a review', () => {
    const { getByText } = render(
      <ProductContextProvider>
        <ReviewAction />
      </ProductContextProvider>,
    );
    expect(getByText('Add A Review +')).toBeDefined();
  });
  it('Add Review Modal Appears', () => {
    const { getByText } = render(
      <ProductContextProvider>
        <ReviewAction />
      </ProductContextProvider>,
    );
    // screen.debug();
    fireEvent.click(getByText('Add A Review +'));

    expect(getByText('Write Your Review')).toBeDefined();
  });
  it('Ability to submit a Review', () => {
    const { getByText } = render(
      <ProductContextProvider>
        <ReviewAction />
      </ProductContextProvider>,
    );
    // screen.debug();
    fireEvent.click(getByText('Add A Review +'));

    expect(getByText('Submit')).toBeDefined();
  });
});

describe('Individual Tiles', () => {
  it('Has More Reviews Button when there are more reviews to show', () => {
    const { getByText } = render(
      <ProductContextProvider>
        <Ratings onStarFilter={()=> onStarFilter()}>
          <RatingsSummaryChart onStarFilter={()=> onStarFilter()} loaded={true}/>
        </Ratings>
      </ProductContextProvider>,
    );
    fireEvent.click(getByText('5 stars'));

    expect(getByText('List Of Active Filters')).toBeDefined();
  });
});

// it('Has More Reviews Button when there are more reviews to show', async () => {
//   const { getByText } = await render(
//     <ProductContextProvider>
//       <Ratings>
//         <ReviewAction moreRatings={ true } />
//       </Ratings>
//     </ProductContextProvider>,
//   );

//   fireEvent.click(getByText('More Reviews'));
//   screen.debug();

//   // expect(getByText('More Reviews')).toBeDefined();
// });