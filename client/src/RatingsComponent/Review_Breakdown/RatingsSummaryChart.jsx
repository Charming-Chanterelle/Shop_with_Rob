import React, { useEffect, useState, useContext } from 'react';
// import RatingBar from './RatingsBarDisplay.jsx';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import * as RB from './ReviewBreakdownStyledComponent.jsx';

const getRatingPercentage = ({ ratingsPercent }) => {
  const data = [];
  const ratingData = Object.values(ratingsPercent);
  for (let i = 0; i < ratingData.length; i++) {
    const convertedRating = parseFloat((ratingData[i] * 100)).toFixed(0).toString().concat('%');
    data.push(convertedRating);
  }
  return data;
};
// { onStarFilter, onStarUnfilter }
const RatingsSummaryChart = () => {
  const {
    ratingsScore, productID, loaded,
  } = useContext(ProductContext);
  const [ratings, setRating] = useState(['0%']);
  const [isStarClicked, setIsStarClicked] = useState({
    '': '',
  });
  const [unfilter, setUnfilter] = useState(false);
  const [fiveStarTextColor, setFiveStarTextColor] = useState('black');
  const [fourStarTextColor, setFourStarTextColor] = useState('black');
  const [threeStarTextColor, setThreeStarTextColor] = useState('black');
  const [twoStarTextColor, setTwoStarTextColor] = useState('black');
  const [oneStarTextColor, setOneStarTextColor] = useState('black');

  useEffect(() => {
    if (loaded) {
      const tempRatings = getRatingPercentage(ratingsScore);
      setRating(tempRatings);
    }
  }, [productID]);

  const onRatingsClick = (currentRating) => {
    const updateStarClicked = { ...isStarClicked };

    updateStarClicked[currentRating] = !updateStarClicked[currentRating];
    setIsStarClicked(updateStarClicked);
    setUnfilter(true);
    // onStarFilter(currentRating, updateStarClicked);
  };

  const onUnfilter = () => {
    setUnfilter(false);
    setIsStarClicked({
      '': '',
    });
    // onStarUnfilter();
  };

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
            {Object.keys(isStarClicked).map((ratingClicked, count) => (
              <RB.FilterList key={count}>
                {ratingClicked}
                {' '}
                Star
              </RB.FilterList>
            ))}
          </>
        )
        : null}
      <RB.FiveStarFilterContainer>
        <RB.FiveStarFilterGraphs
          style={{ color: fiveStarTextColor }}
          onMouseEnter={() => setFiveStarTextColor('blue')}
          onMouseLeave={() => setFiveStarTextColor('black')}
          onClick={() => onRatingsClick(5)}
        >
          <RB.FiveStarFilterGraphText>
            5 Stars
            <RB.FiveStarSlider
              type="range"
              name="Five_Stars"
              min="0"
              max="100"
              value={ratings[4]}
              step="1"
              fiveStarRating={ratings[4]}
              readOnly
            />
          </RB.FiveStarFilterGraphText>
        </RB.FiveStarFilterGraphs>
      </RB.FiveStarFilterContainer>
      <RB.FourStarFilterContainer>
        <RB.FourStarFilterGraphs
          style={{ color: fourStarTextColor }}
          onMouseEnter={() => setFourStarTextColor('blue')}
          onMouseLeave={() => setFourStarTextColor('black')}
          onClick={() => onRatingsClick(4)}
        >
          <RB.FourStarFilterGraphText>
            4 Stars
            <RB.FourStarSlider
              type="range"
              name="Four_Stars"
              min="0"
              max="100"
              value={ratings[3]}
              fourStarRating={ratings[3]}
              step="1"
              readOnly
            />
          </RB.FourStarFilterGraphText>
        </RB.FourStarFilterGraphs>
      </RB.FourStarFilterContainer>
      <RB.ThreeStarFilterContainer>
        <RB.ThreeStarFilterGraphs
          style={{ color: threeStarTextColor }}
          onMouseEnter={() => setThreeStarTextColor('blue')}
          onMouseLeave={() => setThreeStarTextColor('black')}
          onClick={() => onRatingsClick(3)}
        >
          <RB.ThreeStarFilterGraphText>
            3 Stars
            <RB.ThreeStarSlider
              type="range"
              name="Three_Stars"
              min="0"
              max="100"
              value={ratings[2]}
              threeStarRating={ratings[2]}
              step="1"
              readOnly
            />
          </RB.ThreeStarFilterGraphText>
        </RB.ThreeStarFilterGraphs>
      </RB.ThreeStarFilterContainer>
      <RB.TwoStarFilterContainer>
        <RB.TwoStarFilterGraphs
          style={{ color: twoStarTextColor }}
          onMouseEnter={() => setTwoStarTextColor('blue')}
          onMouseLeave={() => setTwoStarTextColor('black')}
          onClick={() => onRatingsClick(2)}
        >
          <RB.TwoStarFilterGraphText>
            2 Stars
            <RB.TwoStarSlider
              type="range"
              name="Two_Stars"
              min="0"
              max="100"
              value={ratings[1]}
              twoStarRating={ratings[1]}
              step="1"
              readOnly
            />
          </RB.TwoStarFilterGraphText>
        </RB.TwoStarFilterGraphs>
      </RB.TwoStarFilterContainer>
      <RB.OneStarFilterContainer>
        <RB.OneStarFilterGraphs
          style={{ color: oneStarTextColor }}
          onMouseEnter={() => setOneStarTextColor('blue')}
          onMouseLeave={() => setOneStarTextColor('black')}
          onClick={() => onRatingsClick(1)}
        >
          <RB.OneStarFilterGraphText>
            1 stars
            <RB.OneStarSlider
              type="range"
              name="One_Star"
              min="0"
              max="100"
              value={ratings[0]}
              oneStarRating={ratings[0]}
              step="1"
              readOnly
            />
          </RB.OneStarFilterGraphText>
        </RB.OneStarFilterGraphs>
      </RB.OneStarFilterContainer>
    </>
  );
};

export default RatingsSummaryChart;
