import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import * as RC from './RatingsComponentStyledComponent.jsx';
import RatingsSummaryChart from './Review_Breakdown/RatingsSummaryChart.jsx';
import RatingsSummarySlider from './Review_Breakdown/RatingsSummarySlider.jsx';

const getPercentRecommend = ({ recommended }) => {
  const recommend = Number(recommended.true);
  const notRecommended = Number(recommended.false);
  const percentRecommend = parseFloat((recommend / (notRecommended + recommend)) * 100).toFixed(0);
  return percentRecommend;
};

const RatingsProductBreakdown = ({ onStarFilter, onStarUnfilter }) => {
  const { meta, productID } = useContext(ProductContext);
  const [percentRecommended, setPercentRecommended] = useState(0);

  useEffect(() => {
    setPercentRecommended(getPercentRecommend(meta));
  }, [productID]);

  return (
    <>
      <RC.RatingsBreakdownContainer>
        <RC.PercentRecommend>
          <RC.RatingsBreakdownText>
            {percentRecommended}
            % of reviews recommend this product
          </RC.RatingsBreakdownText>
        </RC.PercentRecommend>
        <RC.StarReviewBreakdown>
          <RatingsSummaryChart
            onStarFilter={onStarFilter}
            onStarUnfilter={onStarUnfilter}
          />
        </RC.StarReviewBreakdown>
        <RC.ProductCharacterSlider>
          <RatingsSummarySlider />
        </RC.ProductCharacterSlider>
      </RC.RatingsBreakdownContainer>
    </>
  );
};

{/* <RatingsSummaryChart /> */ }
{/* <RatingsSummarySlider /> */ }
export default RatingsProductBreakdown;
