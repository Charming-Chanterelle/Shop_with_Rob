import styles, { css } from 'styled-components';

export const ProductCharacterContainer = styles.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  `;

export const CharacteristicName = styles.span`

`;

export const Slider = styles.input`
  -webkit-appearance: none;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  width: 100%;
  height: 15px;
  // background: linear-gradient(to right, #FBD63F 0%, #82CFD0 50%, #fff 25%, #FBD63F 100%);
  background-color: rgb(228, 222, 222);
  outline: none;
  opacity: 0.7;
  position: relative;
  z-index: -1;
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #FBD63F;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #FBD63F;
    position: relative;
  }
`;

// export const Slider = styles.input`
//   -webkit-appearance: none;
//   width: 100%;
//   height: 15px;
//   background: #d3d3d3;
//   outline: none;
//   opacity: 0.7;
//   position: relative;
//   z-index: -1;
//   &::-moz-range-thumb {
//     width: 25px;
//     height: 25px;
//     background: #FBD63F;
//   }
//   &::-webkit-slider-thumb {
//     -webkit-appearance: none;
//     appearance: none;
//     width: 25px;
//     height: 25px;
//     background: #FBD63F;
//     position: relative;
//   }
// `;

// export const TickContainer = styles.span`
//   position: absolute;
//   top: 0%;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: space-around;
//   padding: 32px;
//   // z-index: 1;
// `;

// export const TickMark = styles.span`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   width: 8px;
//   background: white;
//   height: 25px;
//   line-height: 35px;
//   z-index: -1;
// `;

export const SliderTextContainer = styles.div`
  font-size: 9px;
  padding-bottom: 5px;
  display: grid;
  grid-template-areas:
  "text-one text-two text-three"
  ;
`;

export const SliderTextOne = styles.span`
  grid-template-areas: text-one;
  text-align: left;
`;

export const SliderTextTwo = styles.span`
  grid-template-areas: text-two;
  text-align: center;
`;

export const SliderTextThree = styles.span`
  grid-template-areas: text-three;
  text-align: right;
`;

export const UnfilterStarReviews = styles.span`
  cursor: pointer;
  font-size: 11px;
  font-family: 'Poppins', sans-serif;
`;

export const FilterListContainer = styles.ul`

`;

export const FilterList = styles.li`

`;

export const FiveStarFilterContainer = styles.div`

`;

export const FiveStarFilterGraphs = styles.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr
  grid-template-areas:
  "fiveStarRatingText fiveStarDisplay"
  ;
`;

export const FiveStarFilterGraphText = styles.label`
  text-decoration: underline;
  grid-template-area: fiveStarRatingText;
`;

export const FiveStarSlider = styles.input`
  -webkit-appearance: none;
  grid-template-area: fiveStarDisplay;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  background: linear-gradient(to right, #f8e07ebd 0%, #f8e07ebd 30%, rgb(228, 222, 222) 25%, rgb(228, 222, 222) 100%);
  outline: none;
  opacity: 0.7;
  // position: relative;
  &::-moz-range-thumb {
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
    // position: relative;
  }
  ${({ fiveStarRating }) => fiveStarRating && css`
    background:
    linear-gradient(to right,
      #f8e07ebd ${fiveStarRating}, rgb(228, 222, 222) ${fiveStarRating} 100%, white 100% );
    `
};
`;

export const FourStarFilterContainer = styles.div`

`;

export const FourStarFilterGraphs = styles.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr
  grid-template-areas:
  "fourStarRatingText fourStarDisplay"
  ;
`;

export const FourStarFilterGraphText = styles.label`
  text-decoration: underline;
  grid-template-area: fourStarRatingText;
`;

export const FourStarSlider = styles.input`
  -webkit-appearance: none;
  grid-template-area: fourStarDisplay;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  background: linear-gradient(to right, #f8e07ebd 0%, #f8e07ebd 30%, rgb(228, 222, 222) 25%, rgb(228, 222, 222) 100%);
  outline: none;
  opacity: 0.7;
  // position: relative;
  &::-moz-range-thumb {
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
    // position: relative;
  }
  ${({ fourStarRating }) => fourStarRating && css`
    background:
    linear-gradient(to right,
      #f8e07ebd ${fourStarRating}, rgb(228, 222, 222) ${fourStarRating} 100%, white 100% );
    `
};
`;

export const ThreeStarFilterContainer = styles.div`

`;

export const ThreeStarFilterGraphs = styles.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr
  grid-template-areas:
  "threeStarRatingText threeStarDisplay"
  ;
`;

export const ThreeStarFilterGraphText = styles.label`
  text-decoration: underline;
  grid-template-area: threeStarRatingText;
`;

export const ThreeStarSlider = styles.input`
  -webkit-appearance: none;
  grid-template-area: threeStarDisplay;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  background: linear-gradient(to right, #f8e07ebd 0%, #f8e07ebd 30%, rgb(228, 222, 222) 25%, rgb(228, 222, 222) 100%);
  outline: none;
  opacity: 0.7;
  // position: relative;
  &::-moz-range-thumb {
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
    // position: relative;
  }
  ${({ threeStarRating }) => threeStarRating && css`
    background:
    linear-gradient(to right,
      #f8e07ebd ${threeStarRating}, rgb(228, 222, 222) ${threeStarRating} 100%, white 100% );
    `
};
`;

export const TwoStarFilterContainer = styles.div`

`;

export const TwoStarFilterGraphs = styles.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr
  grid-template-areas:
  "twoStarRatingText twoStarDisplay"
  ;
`;

export const TwoStarFilterGraphText = styles.label`
  text-decoration: underline;
  grid-template-area: twoStarRatingText;
`;

export const TwoStarSlider = styles.input`
  -webkit-appearance: none;
  grid-template-area: twoStarDisplay;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  background: linear-gradient(to right, #f8e07ebd 0%, #f8e07ebd 30%, rgb(228, 222, 222) 25%, rgb(228, 222, 222) 100%);
  outline: none;
  opacity: 0.7;
  // position: relative;
  &::-moz-range-thumb {
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
    // position: relative;
  }
  ${({ twoStarRating }) => twoStarRating && css`
    background:
    linear-gradient(to right,
      #f8e07ebd ${twoStarRating}, rgb(228, 222, 222) ${twoStarRating} 100%, white 100% );
    `
};
`;

export const OneStarFilterContainer = styles.div`

`;

export const OneStarFilterGraphs = styles.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr
  grid-template-areas:
  "oneStarRatingText oneStarDisplay"
  ;
`;

export const OneStarFilterGraphText = styles.label`
  text-decoration: underline;
  grid-template-area: oneStarRatingText;
`;

export const OneStarSlider = styles.input`
  -webkit-appearance: none;
  grid-template-area: starDisplay;
  width: 100%;
  height: 15px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  background: linear-gradient(to right, #f8e07ebd 0%, #f8e07ebd 30%, rgb(228, 222, 222) 25%, rgb(228, 222, 222) 100%);
  outline: none;
  opacity: 0.7;
  // position: relative;
  &::-moz-range-thumb {
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    // width: 25px;
    // height: 25px;
    // background: #FBD63F;
    // position: relative;
  }
  ${({ oneStarRating }) => oneStarRating && css`
    background:
    linear-gradient(to right,
      #f8e07ebd ${oneStarRating}, rgb(228, 222, 222) ${oneStarRating} 100%, white 100% );
    `
};
`;
