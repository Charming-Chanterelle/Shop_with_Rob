import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext.jsx';
import RatingsSummaryChart from './Review_Breakdown/RatingsSummaryChart.jsx'
import RatingsSummarySlider from './Review_Breakdown/RatingsSummarySlider.jsx'

const getPercentRecommend = ({ recommended }) => {
  const recommend = Number(recommended.true);
  const notRecommended = Number(recommended.false);
  const percentRecommend = parseFloat((recommend / (notRecommended + recommend)) * 100).toFixed(0);
  return percentRecommend;
};

const RatingsSummaryReview = ({ onStarFilter, onStarUnfilter }) => {
  const { meta, loaded } = useContext(ProductContext);
  const [percentRecommended, setPercentRecommended] = useState(0);

  useEffect(() => {
    if (loaded) {
      setPercentRecommended(getPercentRecommend(meta));
    }
  }, [loaded]);

  return (
    <>
      <div className="ratings-summary-review">
        <div className="ratings-summary-text">
          <span>
            {percentRecommended}
            % of reviews recommend this product
          </span>
        </div>
        <div className="ratings-summary-chart">
          <RatingsSummaryChart
            onStarFilter={onStarFilter}
            onStarUnfilter={onStarUnfilter}
          />
        </div>
        <div className="ratings-summary-slider">
          <RatingsSummarySlider />
        </div>
      </div>
    </>
  )
};

{/* <RatingsSummaryChart /> */ }
{/* <RatingsSummarySlider /> */ }
export default RatingsSummaryReview;
