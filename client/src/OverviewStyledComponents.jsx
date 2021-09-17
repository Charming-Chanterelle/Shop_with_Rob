import styles from 'styled-components';
// entire component level:
export const Container = styles.div`
  display: grid;
  height: 100vh;
  color: black;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "main main side side"
    "main main side side"
    "main main side side"
    "content content features features";
  padding: 0.25rem;
  grid-gap: 0.25rem;
  overflow: hidden;
  border-radius: 5px;
    `;
// grid areas:
export const Main = styles.div`
  grid-area: main;
  position relative;
  overflow: hidden;
  border-radius: 5px;
  `;
export const Side = styles.div`
  grid-area: side;
  overflow: hidden;
  border-radius: 5px;
  `;
export const Content = styles.div`
  grid-area: content;
  background-color: #eecf6b;
  border-radius: 5px;
  `;
export const Features = styles.div`
  grid-area: features;
  height: 100%;
  border: 1px solid #FBD63F;
  border-radius: 5px;
  border-left: 6px solid #899499;
  `;
// Smaller pieces:
  // main:
export const LeftArrow = styles.button`
  grid-area: main;
  position: absolute;
  z-index: 1000;
  top: 80%;
  left: 5%;
  `;
export const RightArrow = styles.button`
  grid-area: main;
  position: absolute;
  top: 80%;
  right: 5%;
  `;
export const BigImg = styles.img`
  grid-area: main;
  height: 100%;
  background-size: cover;
  background-position: center;
  `;
export const ImgCards = styles.div`
  grid-area: main;
  position: absolute;
  z-index: 900;
  display: flex;
  flex-direction: column;
  top: 20%;
  `;
export const ImgSample = styles.button`
  grid-area: main;
  width: 40px;
  height: 40px;
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
`;
  // list:
export const FeaturesList = styles.ul`
  grid-area: features;
  text-align: left;
  height: 100%;
  `;
  // side:
export const Styles = styles.div`
  grid-area: side;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  `;
export const StylesButton = styles.button`
grid-area: side;
flex-basis: 20%;
border-radius: 50%;
color: #899499;
  border: 3px solid #FBD63F;
  padding: 10px;
  margin: 10px;
  width: 70px;
  height: 70px;
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
`;
