import styles from 'styled-components';

export const RatingsBreakdownContainer = styles.div`
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-auto-rows: 1fr minmax(10fr,10fr) minmax(20fr, 20fr);
  grid-template-areas:
    "review_header"
    "review_chart"
    "review_slider"
  ;
  `;

export const PercentRecommend = styles.div`
  grid-area: review_header;
`;

export const RatingsBreakdownText = styles.span`
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
`;

export const StarReviewBreakdown = styles.div`
  grid-area: review_chart;
`;

export const ProductCharacterSlider = styles.div`
  grid-area: review_slider;
  padding-top: 10px;
  position: relative;
`;

export const RatingsAndReviewTitle = styles.h1`
  font-family: 'Poppins', sans-serif;
  padding-left: 150px;
`;

export const RatingsAndReviewContainer = styles.div`
  padding-top: 15px;
  padding-bottom: 15px;
  grid-template-columns: 1fr 3fr;
  display: grid;
  grid-template-areas:
    "header-figure header-stars "
  ;
`;

export const RatingsAndReviewText = styles.span`
  grid-area: header-figure;
  font-size: 36px;
`;

export const RatingsAndReviewStarContainer = styles.div`
  grid-area: header-stars;
`;

export const RatingsFilterContainer = styles.select`
  font-family: 'Poppins', sans-serif;
  outline: none;
  font-weight: bold;
  border: none;
  font-size: 15px;
  font-style: italic;
  border-bottom: solid black;
`;

export const RatingsFilterText = styles.span`
  font-family: 'Poppins', sans-serif;
`;

export const RatingsFilterLabel = styles.label`

`;

export const RatingsFilterDropdown = styles.option`

`;

export const RatingsAndReviewAction = styles.button`
  background-color:#FBD63F;
  border: none;
  border-radius: 5px;
  color:#000000;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  padding: 15px 8px 15px;
  margin: 15px;
`;
