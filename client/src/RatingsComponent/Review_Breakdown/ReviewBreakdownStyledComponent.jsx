import styles from 'styled-components';

export const ProductCharacterContainer = styles.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  `;

export const CharacteristicName = styles.span`

`;

export const Slider = styles.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  background: linear-gradient(to right, #FBD63F 0%, #82CFD0 50%, #fff 25%, #FBD63F 100%);
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

export const StarFilterContainer = styles.div`

`;

export const StarFilterGraphs = styles.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 3fr
  grid-template-areas:
  "starRatingText starDisplay"
  ;
`;

export const StarFilterGraphText = styles.label`
  text-decoration: underline;
  grid-template-area: starRatingText;
`;

export const StarSlider = styles.input`
  -webkit-appearance: none;
  grid-template-area: starDisplay;
  width: 100%;
  height: 15px;
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
`;