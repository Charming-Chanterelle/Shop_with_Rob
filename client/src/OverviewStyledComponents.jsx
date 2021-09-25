import styles from 'styled-components';

// top component level:
export const Container = styles.div`
  display: grid;
  height: 90vh;
  color: black;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "main main main side side"
    "main main main side side"
    "main main main side side"
    "main main main side side"
    "content content content features features";
  padding-left: 150px;
  padding-right: 150px;
  row-gap: 10px;
  column-gap: 30px;
  overflow: hidden;
  border-radius: 5px;
    `;
// grid areas:
export const Main = styles.div`
  grid-area: main;
  position relative;
  overflow: hidden;
  border-radius: 5px;
  height: auto;
  `;
export const Side = styles.div`
  grid-area: side;
  overflow-y: scroll;
  border-radius: 5px;
  `;
export const Content = styles.div`
  grid-area: content;
  height:fit-content;
  background-color: #eecf6b;
  border-radius: 5px;
  padding: 10px;
  padding-left: 20px;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  `;
export const Features = styles.div`
  grid-area: features;
  height:fit-content;
  width:fit-content;
  border: 1px solid #FBD63F;
  border-radius: 5px;
  border-left: 6px solid #899499;
  padding-right: 40px;
  `;
// Smaller pieces:
// main:
export const LeftArrow = styles.button`
  grid-area: main;
  position: absolute;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  z-index: 100;
  top: 85%;
  left: 5%;
  display: flex;
    justify-content: center;
    align-items: center;
  `;
export const RightArrow = styles.button`
  grid-area: main;
  position: absolute;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  top: 85%;
  right: 5%;
  display: flex;
    justify-content: center;
    align-items: center;
  `;
export const BigImg = styles.img`
  grid-area: main;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-position: contain;
  cursor: -moz-zoom-in;
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
  `;
  // background-size: contain;
  // background-position: contain;
  // background-image: url(${props => props.url})
export const ImgCards = styles.div`
  grid-area: main;
  position: absolute;
  z-index: 900;
  display: flex;
  flex-direction: column;
  top: 10%;
  `;
export const ImgSample = styles.button`
  grid-area: main;
  width: 40px;
  height: 40px;
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
`;
// features:
export const FeaturesList = styles.ul`
  grid-area: features;
  text-align: left;
  `;
// side:
export const Styles = styles.div`
  grid-area: side;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  padding: 10px;
  padding-left: 7px;
  margin-top: 0;
  border-radius: 5px;
  `;
export const StylesButton = styles.button`
grid-area: side;
flex-basis: 20%;
border-radius: 50%;
color: #899499;
  border: 3px solid #FBD63F;
  padding: 10px;
  margin-right: 10px;
  margin-top: 5px;
  width: 70px;
  height: 70px;
  background: url(${props => props.url}) no-repeat;
  background-size: cover;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
`;
export const Socials = styles.div`
  grid-area: side;
  cursor: pointer;
  height: 26px;
  padding-top: 15px;
  padding-left: 5px;
  `;
// export const sampleHover = {
//   transform: 'scale(1, 1)',
// };
