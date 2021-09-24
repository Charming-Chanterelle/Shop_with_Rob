import React, { useEffect, useState, useContext } from 'react';
// import RatingBar from './RatingsBarDisplay.jsx';
import { ProductContext } from '../../contexts/ProductContext.jsx';
import * as RB from './ReviewBreakdownStyledComponent.jsx';

const getRatingPercentage = ({ ratingsPercent }) => {
  const data = [];
  const ratingData = Object.values(ratingsPercent);
  for (let i = 0; i < ratingData.length; i++) {
    const convertedRating = parseFloat((ratingData[i] * 100)).toFixed(0);
    data.push(convertedRating);
  }
  return data;
};

const uniqueKey = () => {
  let key = '';
  const bank = ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', '3', '4', '5', '6', '7', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '8', '9', '!', '@', '$', '#', '%', '^', '*', 'a', 'b', 'c', 'd', 'e', 'f'];
  const bankLen = bank.length;
  for (let i = 0; i < 15; i++) {
    const randID = Math.ceil(Math.random() * (bankLen - 0));
    key += bank[randID];
  }
  return key;
};

const RatingsSummaryChart = ({ onStarFilter, onStarUnfilter }) => {
  const {
    ratingsScore, productID, loaded,
  } = useContext(ProductContext);
  const [ratings, setRating] = useState([]);
  const [textColor, setTextColor] = useState('black');
  const [isStarClicked, setIsStarClicked] = useState({});
  const [unfilter, setUnfilter] = useState(false);

  useEffect(() => {
    const tempRatings = getRatingPercentage(ratingsScore);
    setRating(tempRatings);
  }, [productID]);

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
              <RB.FilterList key={uniqueKey().concat(ratingClicked)}>
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
            key={uniqueKey().concat(rating)}
            style={{ color: textColor }}
            onMouseEnter={() => onMouseEnter()}
            onMouseLeave={() => onMouseLeave()}
            onClick={() => onRatingsClick(rating + 1)}
          >
            <RB.StarFilterGraphText>
              {rating + 1}
              {' '}
              stars
            {/* <RatingBar
              name={uniqueKey().split('').reverse().join('')
                .concat(rating, ratings[rating])}
              rating={ratings[rating]}
            /> */}
            <RB.StarSlider
              type="range"
              name={uniqueKey().concat(rating)}
              min="0"
              max="100"
              value={ratings[rating]}
              step="1"
              readOnly
            />
            </RB.StarFilterGraphText>
          </RB.StarFilterGraphs>
        ))}
      </RB.StarFilterContainer>
    </>
  );
};

export default RatingsSummaryChart;

// if (loaded) {
//   return (
//     <>
//       {unfilter
//         ? (
//           <>
//             <RB.UnfilterStarReviews
//               onClick={() => onUnfilter()}
//             >
//               Remove all filters
//             </RB.UnfilterStarReviews>
//             <RB.FilterListContainer>
//               List Of Active Filters
//             </RB.FilterListContainer>
//             {Object.keys(isStarClicked).map((ratingClicked) => (
//               <RB.FilterList>
//                 {ratingClicked}
//                 {' '}
//                 Star
//               </RB.FilterList>
//             ))}
//           </>
//         )
//         : null}
//       <RB.StarFilterContainer>
//         {[4, 3, 2, 1, 0].map((rating) => (
//           <RB.StarFilterGraphs
//             style={{ color: textColor }}
//             onMouseEnter={() => onMouseEnter()}
//             onMouseLeave={() => onMouseLeave()}
//             onClick={() => onRatingsClick(rating + 1)}
//           >
//             <RB.StarFilterGraphText>
//               {rating + 1}
//               {' '}
//               stars
//             </RB.StarFilterGraphText>
//             <RatingBar name={ratings[rating] + rating} rating={ratings[rating]} />
//           </RB.StarFilterGraphs>
//         ))}
//       </RB.StarFilterContainer>
//     </>
//   );
// }
// return (
//   <div>Loading...</div>
// );
