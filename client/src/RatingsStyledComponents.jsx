/* eslint-disable import/prefer-default-export */
import styles from 'styled-components';

export const Container = styles.div`
  display: grid;
  grid-template-rows: .2fr .1fr 3fr 1fr;
  grid-template-columns: 1fr 3fr;
  padding-left: 200px;
  padding-right: 200px;
  row-gap: 10px;
  column-gap: 30px;
  grid-template-areas:
    "stars filter"
    "stars content"
    "reviews content"
    "reviews reviewAction"
  ;
`;

export const Stars = styles.div`
  grid-area: stars;
  color: #3a3b3bf6;
  `;

export const Filter = styles.div`
  grid-area: filter;
  font-weight: bold;
`;

export const Reviews = styles.div`
  grid-area: reviews;
`;

export const Content = styles.div`
  justify-content: start;
  grid-area: content;
  overflow-y: auto;
  min-height: 450px;
  max-height: 1000px;
`;

export const ReviewAction = styles.div`
  grid-area: reviewAction;
`;
