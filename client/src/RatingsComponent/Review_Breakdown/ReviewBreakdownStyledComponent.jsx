import styles from 'styled-components';

export const ProductCharacterContainer = styles.div`
  position: relative;
  font-family: 'Poppins', sans-serif;
  `;

export const CharacteristicName = styles.p`

`;

export const Slider = styles.input`
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  background: #d3d3d3;
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

export const TickContainer = styles.span`
  position: absolute;
  top: 0%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 32px;
  // z-index: 1;
`;

export const TickMark = styles.span`
  position: relative;
  display: flex;
  justify-content: center;
  width: 8px;
  background: white;
  height: 25px;
  line-height: 35px;
  z-index: -1;
`;

export const SliderTextContainer = styles.div`
  font-size: 9px;
  padding-top: 5px;
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
`;

export const StarFilterGraphText = styles.span`
  text-decoration: underline;
`;

// .summary-barchart-container {
//   /* padding-top: 15px;
//   padding-bottom: 15px;
//   gap: 10px; */
//   text-decoration: underline;
//   display: grid;
//   grid-template-areas:
//     "5-Star-Container"
//     "4-Star-Container"
//     "3-Star-Container"
//     "2-Star-Container"
//     "1-Star-Container"
//     ;
// }

// .five-star-container {
//   grid-area: 5-Star-Container;
//   grid-template-columns: 1fr 4fr;
//   text-align: center;
//   display: grid;
//   grid-template-areas:
//   "5-Star-Title 5-Star-Graph-One"
//   ;
// }

// .four-star-container {
//   grid-area: 4-Star-Container;
//   grid-template-columns: 1fr 4fr;
//   display: grid;
//   grid-template-areas:
//   "4-Star-Title 4-Star-Graph-One"
//   ;
// }

// .three-star-container {
//   grid-area: 3-Star-Container;
//   grid-template-columns: 1fr 4fr;
//   display: grid;
//   grid-template-areas:
//   "3-Star-Title 3-Star-Graph-One"
//   ;
// }

// .two-star-container {
//   grid-area: 2-Star-Container;
//   grid-template-columns: 1fr 4fr;
//   display: grid;
//   grid-template-areas:
//   "2-Star-Title 2-Star-Graph"
//   ;
// }

// .one-star-container {
//   grid-area: 1-Star-Container;
//   grid-template-columns: 1fr 4fr;
//   display: grid;
//   grid-template-areas:
//   "1-Star-Title 1-Star-Graph"
//   ;
// }


// .five-star-title {
//   grid-area: 5-Star-Title;
//   display: inline-block;
//   line-height: normal;
// }

// .four-star-title {
//   grid-area: 4-Star-Title;
// }

// .three-star-title {
//   grid-area: 3-Star-Title;
// }

// .two-star-title {
//   grid-area: 2-Star-Title;
// }

// .one-star-title {
//   grid-area: 1-Star-Title;
// }

// .five-star-graph-one {
//   grid-area: 5-Star-Graph-One;
// }

// .four-star-graph-one {
//   grid-area: 4-Star-Graph-one;
// }

// .three-star-graph-one {
//   grid-area: 3-Star-Graph-one;
// }

// .two-star-graph {
//   grid-area: 2-Star-Graph;
// }

// .one-star-graph {
//   grid-area: 1-Star-Graph;
// }