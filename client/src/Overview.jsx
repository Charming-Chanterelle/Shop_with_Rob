/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
// styled comps
import {
  Container, Main, Side, Content, List, LeftArrow, RightArrow, BigImg, ImgCards, SideList, Styles,
} from './OverviewStyledComponents.jsx';
import productStyle from './OverviewTESTstyle.js';
import product from './OverviewTESTproductReg.js';

const Overview = () => {
  const [defaultInfo, setDefaultInfo] = useState(product);
  // need to get the default pics ^
  // need to change:
  const productImgs = productStyle.results[0].photos;

  // image slider counter
  const [current, setCurrent] = useState(0);
  const length = productStyle.results[0].photos.length;
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
          {productImgs.map((x) => <ImgCards src={x.url} />)}
          <LeftArrow onClick={prevSlide}>l</LeftArrow>
          {productImgs.map((x, i) => {
            if (i === current) {
              return <BigImg src={x.url} alt="pic" />;
            }
          })}
          <RightArrow onClick={nextSlide}>r</RightArrow>
        </Main>
        <Content>
          <h2>{defaultInfo.slogan}</h2>
          <p>{defaultInfo.description}</p>
        </Content>
        <Side>
          <div>
            <span>
              ADD STAR RATING WITH
              <a href="google.com">link to reviews</a>
            </span>
            <h4>{defaultInfo.category}</h4>
            <h1 className="bigText">{defaultInfo.name}</h1>
            <h2>
              $
              {defaultInfo.default_price}
            </h2>
          </div>
          <div>
            <h3>Style: SELECTED STYLE</h3>
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
            <li>No Returns</li>
          </SideList>
        </List>
      </Container>
    </>
  );
};

export default Overview;
