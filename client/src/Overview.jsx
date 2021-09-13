/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styles from 'styled-components';
// eslint-disable-next-line import/extensions
import product from './OverviewTestData.js';

const Overview = () => {
  // const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line prefer-destructuring
  const length = product.urls.length;
  const Container = styles.div`
  display: grid;
  height: 100vh;
  color: black;
  grid-template-rows: .4fr .4fr .2fr;
  grid-template-columns: .3fr .3fr .2fr .2fr;
  grid-template-areas:
    "main main side side"
    "main main side side"
    "content content content list";
  text-align: center;
  padding: 0.25rem;
  grid-gap: 0.25rem;
  overflow: hidden;
    `;
  const Main = styles.main`
  grid-area: main;
  overflow: hidden;
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
  left: 10%;
  cursor: pointer;
  `;
  const RightArrow = styles.button`
  grid-area: main;
  right: 10%;
  cursor: pointer;
  `;
  const BigImg = styles.img`
  grid-area: main;
  `;
  const ImgCards = styles.img`
  grid-area: main;
  grid-row: 1;
  width: 15%;
  height: 15%;
  `;
  const SideList = styles.ul`
  text-align: left;
  height: 100%;
  `;
  const Styles = styles.button`
  border-radius: 50%;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  `;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <Container>
        <Main>
          <div>
            {product.urls.map((x) => <ImgCards src={x} />)}
            <LeftArrow onClick={prevSlide}>l</LeftArrow>
            {product.urls.map((x, i) => {
              if (i === current) {
                return <BigImg src={x} alt="pic" />;
              }
            })}
            <RightArrow onClick={nextSlide}>r</RightArrow>
          </div>
        </Main>
        <Content>
          <h2>{product.slogan}</h2>
          <p>{product.description}</p>
        </Content>
        <Side>
          <div>
            <span>
              ADD STAR RATING WITH
              <a href="google.com">link to reviews</a>
            </span>
            <h3>{product.category}</h3>
            <h1 className="bigText">{product.name}</h1>
            <h2>{"$" + product.default_price}</h2>
          </div>
          <div>
            <h3>Style > SELECTED STYLE</h3>
            <Styles>1</Styles>
            <Styles>2</Styles>
            <Styles>3</Styles>
          </div>
        </Side>
        <List>
          <SideList>
            <li>110% Satisfaction Guaranteed</li>
            <li>Suitable for All Ages</li>
            <li>Moms love it</li>
            <li>0% Money Back</li>
          </SideList>
        </List>
      </Container>
    </>
  );
};

export default Overview;
