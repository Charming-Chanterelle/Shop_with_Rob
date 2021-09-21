import React, { useEffect, useState, useContext } from 'react';
import RatingBar from './RatingsBarDisplay.jsx';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import * as RB from './ReviewBreakdownStyledComponent.jsx';

const getRatingPercentage = ({ ratingsPercent }) => {
  const data = [];
  const ratingData = Object.values(ratingsPercent);
  for (let i = 0; i < ratingData.length; i++) {
    const convertedRating = (ratingData[i] * 100).toString().concat('%');
    data.push(convertedRating);
  }
  return data;
};

const RatingsSummaryChart = ({ onStarFilter, onStarUnfilter }) => {
  const { ratingsScore, loaded } = useContext(ProductContext);
  const [ratings, setRating] = useState([]);
  const [textColor, setTextColor] = useState('black');
  const [isStarClicked, setIsStarClicked] = useState({});
  const [unfilter, setUnfilter] = useState(false);

  useEffect(() => {
    if (loaded) {
      const ratings = getRatingPercentage(ratingsScore);
      setRating(ratings);
    }
  }, [loaded]);

  const onMouseEnter = () => {
    setTextColor('blue');
  };

  const onMouseLeave = () => {
    setTextColor('black');
  };

  const onRatingsClick = (currentRating) => {
    const updateStarClicked = { ...isStarClicked };

    updateStarClicked[currentRating] = !updateStarClicked[currentRating];
    setIsStarClicked(updateStarClicked);
    setUnfilter(true);
    onStarFilter(currentRating, updateStarClicked);
  };

  const onUnfilter = () => {
    setUnfilter(false);
    setIsStarClicked({});
    onStarUnfilter();
  };

  if (loaded) {
    return (
      <>
        {unfilter
          ? (
            <>
              <RB.UnfilterStarReviews
                onClick={() => onUnfilter()}
              >
                Remove all filters
              </RB.UnfilterStarReviews>
              <RB.FilterListContainer>
                List Of Active Filters
              </RB.FilterListContainer>
              {Object.keys(isStarClicked).map((ratingClicked) => (
                <RB.FilterList>
                  {ratingClicked}
                  {' '}
                  Star
                </RB.FilterList>
              ))}
            </>
          )
          : null}
        <RB.StarFilterContainer>
          {[4, 3, 2, 1, 0].map((rating) => (
            <RB.StarFilterGraphs
              style={{ color: textColor }}
              onMouseEnter={() => onMouseEnter()}
              onMouseLeave={() => onMouseLeave()}
              onClick={() => onRatingsClick(rating + 1)}
            >
              <RB.StarFilterGraphText>
                {rating + 1}
                {' '}
                stars
              </RB.StarFilterGraphText>
              <RatingBar name={ratings[rating] + rating} rating={ratings[rating]} />
            </RB.StarFilterGraphs>
          ))}
        </RB.StarFilterContainer>
      </>
    );
  }
  return (
    <div>Loading...</div>
  );
};

export default RatingsSummaryChart;

{ /* <div
            className="four-star-container"
            style={{ cursor: 'pointer', color: textColor }}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onRatingsClick(4)}
          >
            <span className="four-star-title">4 stars</span>
            <RatingBar className="four-star-graph-one" name="four" rating={rating[3]} />
          </div>
          <div
            className="three-star-container"
            style={{ cursor: 'pointer', color: textColor }}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onRatingsClick(3)}
          >
            <span className="three-star-title "><u>3 stars</u></span>
            <RatingBar className="three-star-graph-one" name="three" rating={rating[2]} />
          </div>
          <div
            className="two-star-container"
            style={{ cursor: 'pointer', color: textColor }}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onRatingsClick(2)}
          >
            <span className="two-star-title"><u>2 stars</u></span>
            <RatingBar className="two-star-graph" name="two" rating={rating[1]} />
          </div>
          <div
            className="one-star-container"
            style={{ cursor: 'pointer', color: textColor }}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onRatingsClick(1)}
          >
            <span className="one-star-title"><u>1 star</u></span>
            <RatingBar className="one-star-graph" name="one" rating={rating[0]} />
          </div> */ }
