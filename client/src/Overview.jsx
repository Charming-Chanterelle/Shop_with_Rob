/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
// styled comps
import * as S from './OverviewStyledComponents.jsx';
import productStyle from './OverviewTESTstyle.js';
import product from './OverviewTESTproductReg.js';

const Overview = () => {
  const [defaultInfo, setDefaultInfo] = useState(product);
  // need to get the default pics ^
  // need to change:
  const productImgs = productStyle.results[0].photos;
  const [selectedStyle, setSelectedStyle] = useState('choose your style');
  // image slider counter
  const [current, setCurrent] = useState(0);
  const length = productStyle.results[0].photos.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const styleOnClick = (event) => {
    setSelectedStyle(event.target.value);
  };

  return (
    <>
      <S.Container>
        <S.Main>
          <S.LeftArrow onClick={prevSlide}>l</S.LeftArrow>
          {productImgs.map((x, i) => {
            if (i === current) {
              return <S.BigImg src={x.url} alt="pic" />;
            }
          })}
          <S.ImgCards>
            {productImgs.map((x) => <S.ImgSample src={x.url} />)}
          </S.ImgCards>
          <S.RightArrow onClick={nextSlide}>r</S.RightArrow>
        </S.Main>
        <S.Content>
          <h2>{defaultInfo.slogan}</h2>
          <p>{defaultInfo.description}</p>
        </S.Content>
        <S.Side>
          <div>
            <span>
              ADD STAR RATING
            </span>
            <h4 className="subText">{defaultInfo.category}</h4>
            <h1 className="bigText">{defaultInfo.name}</h1>
            <h2>
              $
              {defaultInfo.default_price}
            </h2>
          </div>
          <div>
            <h3 className="bigText">
              Style:
              {selectedStyle}
            </h3>
            <S.Styles>
              <S.StylesButton onClick={styleOnClick} value="style1"> style1</S.StylesButton>
              <S.StylesButton onClick={styleOnClick} value="style2"> style2</S.StylesButton>
              <S.StylesButton onClick={styleOnClick} value="style3"> style3</S.StylesButton>
              <S.StylesButton onClick={styleOnClick} value="style4"> style4</S.StylesButton>
              <S.StylesButton onClick={styleOnClick} value="style5"> style5</S.StylesButton>
            </S.Styles>
            <S.Styles>
              <select name="size">
                {/* need to get skus sizes based on product id and style*/}
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>XL</option>
              </select>
              <select name="quantity">
                {/* need to check with cart and DB based on the sku availability*/}
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="bigText"><h3>ADD TO BAG ++</h3></button>
              <button>star</button>
            </S.Styles>
          </div>
        </S.Side>
        <S.List>
          <S.SideList>
            <li>110% Satisfaction Guaranteed</li>
            <li>Suitable for All Ages</li>
            <li>Moms love it</li>
            <li>No Returns</li>
          </S.SideList>
        </S.List>
      </S.Container>
    </>
  );
};

export default Overview;
