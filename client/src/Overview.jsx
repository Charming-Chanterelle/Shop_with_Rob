/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, IoChevronForwardCircle } from 'react-icons/fa';
// styled comps
import * as S from './OverviewStyledComponents.jsx';
import productStyle from './OverviewTESTstyle.js';
// the hard code product detail:
import product from './OverviewTESTproductReg.js';

// need default style id and product to start
const Overview = (props) => {
  // get the specific style object from the style_id
  const theStyle = (num) => {
    const temp = productStyle.results.filter((x) => x.style_id === num);
    return temp[0];
  };
  // the whole current style obj
  const [currentStyle, setCurrentStyle] = useState(theStyle(productStyle.results[0].style_id));
  // need to get the default pics first ^
  // // current pictures to show
  // const [bigPics, setBigPics] = useState(currentStyle.photos);
  // // current style name
  // const [styleName, setStyleName] = useState(currentStyle.name);
  // need current sku obj for display options and cart ready
  const [currentSku, setCurrentSku] = useState(currentStyle.skus);

  const [isFavorited, setIsFavorited] = useState(false);
  // image slider counter
  const [current, setCurrent] = useState(0);
  const length = currentStyle.photos.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // click a style button
  const styleOnClick = (event) => {
    setCurrentStyle(theStyle(parseInt(event.target.value, 10)));
    // setBigPics()
    // setStyleName()
  };
  // star button click handler
  const favorite = () => {
    setIsFavorited(!isFavorited);
  };
  // top ratings score click handler
  // const jumpToRatings = () => {

  // };

  return (
    <>
      <S.Container>
        {/* <IoChevronForwardCircle /> */}
        <S.Main>
          <S.LeftArrow onClick={prevSlide}>l</S.LeftArrow>
          {currentStyle.photos.map((x, i) => {
            if (i === current) {
              return <S.BigImg className="imgFormat" src={x.url} alt="pic" />;
            }
          })}
          <S.ImgCards>
            {currentStyle.photos.map((x) => <S.ImgSample className="imgFormat" src={x.url} />)}
          </S.ImgCards>
          <S.RightArrow onClick={nextSlide}>r</S.RightArrow>
        </S.Main>
        <S.Content>
          <h2 className="bigText">{product.slogan}</h2>
          <p>{product.description}</p>
        </S.Content>
        <S.Side>
          <div>
            <span>
              {/* {for rating number, make that many stars where FaStar is for whole int and partial is FaStarHalfAlt and the remainder out of 5 is FaRegStar} */}
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              {/* <Link to="/courses?sort=name" /> */}
            </span>
            <h4 className="subText">{product.category}</h4>
            <h1 className="bigText">{product.name}</h1>
            <h2>
              $
              {currentStyle.original_price}
            </h2>
            {currentStyle.sale_price !== null
              && <h2>SALE: {currentStyle.sale_price}
              </h2>
            }
          </div>
          <div>
            <h3 className="bigText">
              Choose your style:
              {currentStyle.name}
            </h3>
            <S.Styles>
              {productStyle.results.map((x) => {
                return <S.StylesButton onClick={styleOnClick} value={x.style_id}>
                  {x.style_id}
                </S.StylesButton>;
              })}
            </S.Styles>
            {/* change  */}
            <S.Styles>
              <select className="imgFormat" name="size">
                {/* {currentStyle.skus.forEach((x) => {
                  return <option>{x.size}</option>
                })} */}
              </select>
              <select className="imgFormat" name="quantity">
                {/* need to check with cart and DB based on the sku availability*/}
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="bigText"><h3>ADD TO BAG ++</h3></button>
              <button onClick={favorite}>{isFavorited ? <FaStar /> : <FaRegStar />}</button>
            </S.Styles>
          </div>
        </S.Side>
        <S.Features>
          <S.FeaturesList>
            <li>110% Satisfaction Guaranteed*</li>
            {product.features.map((x) => {
              return <li>{x.feature}: {x.value}</li>;
            })}
          </S.FeaturesList>
        </S.Features>
      </S.Container>
    </>
  );
};

export default Overview;
