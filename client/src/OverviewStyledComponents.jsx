import styles from 'styled-components';

const Container = styles.div`
  display: grid;
  height: 70vh;
  color: black;
  grid-template-rows: .4fr .4fr .2fr;
  grid-template-columns: .3fr .3fr .2fr .2fr;
  grid-template-areas:
    "main main side side"
    "main main side side"
    "content content content list";
  padding: 0.25rem;
  grid-gap: 0.25rem;
  overflow: hidden;
    `;
const Main = styles.main`
  grid-area: main;
  overflow: hidden;
  width:700px;
  height: 510px;
  `;
const Side = styles.div`
  grid-area: side;
  `;
const Content = styles.div`
  grid-area: content;
  `;
const List = styles.div`
  grid-area: list;
  border-left: 6px solid black;
  height: 100%;
  `;
const LeftArrow = styles.button`
  grid-area: main;
  position: alsolute;
  top: 30%;
  left: 5%;
  `;
const RightArrow = styles.button`
  grid-area: main;
  position: absolute;
  top: 30%;
  right: 45%;
  `;
const BigImg = styles.img`
  grid-area: main;
  height: 100%;
  background-size: cover;
  background-position: center;
  `;
const ImgCards = styles.img`
  grid-area: main;
  grid-column: 1;
  width: 40px;
  height: 40px;
  `;
const SideList = styles.ul`
  grid-area: list;
  text-align: left;
  height: 100%;
  `;
const Styles = styles.button`
  grid-area: side;
  border-radius: 50%;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  `;

export {
  Container, Main, Side, Content, List, LeftArrow, RightArrow, BigImg, ImgCards, SideList, Styles,
};
