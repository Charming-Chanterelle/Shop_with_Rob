/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
// icons
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronCircleRight, FaChevronCircleLeft, FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaCheck } from 'react-icons/fa';
// styled comps
import * as S from './OverviewStyledComponents.jsx';
import product from './OverviewTESTproductReg.js';
import productStyle from './OverviewTESTstyle.js';

// params: product obj, all_styles arr, ratings arr
const Overview = () => {
  // get new style by id
  const theStyle = (ID) => productStyle.results.filter((x) => x.style_id === ID)[0];
  // default style (obj)
  const [currentStyle, setCurrentStyle] = useState(
    productStyle.results.filter((x) => x['default?'] === true)[0],
  );
  // reveiws info
  const reviews = [{
    1: 5, 2: 0, 3: 1, 4: 20, 5: 10,
  }];
  // current sku (obj of objs) for display and cart
  const [currentSku, setCurrentSku] = useState(currentStyle.skus);
  // star button state
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
        <S.Main>
          <S.LeftArrow onClick={prevSlide}><FaChevronCircleLeft /></S.LeftArrow>
          {currentStyle.photos.map((x, i) => {
            if (i === current) {
              return <S.BigImg className="imgFormat" src={x.url} alt="pic" />;
            }
          })}
          <S.ImgCards>
            {currentStyle.photos.map((x) => <S.ImgSample className="imgFormat" src={x.url} />)}
          </S.ImgCards>
          <S.RightArrow onClick={nextSlide}><FaChevronCircleRight /></S.RightArrow>
        </S.Main>
        <S.Content>
          <h2 className="bigText">{product.slogan}</h2>
          <p>{product.description}</p>
          <FaFacebookSquare />
          <FaTwitterSquare />
          <FaPinterestSquare />
        </S.Content>
        <S.Side>
          <div>
            {reviews && (
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                Read all [#] reviews
              </span>
            )}
            <h4 className="subText">{product.category}</h4>
            <h1 className="bigText">{product.name}</h1>

            {currentStyle.sale_price !== null ?
              <h2>
                <strike style={{ color: "red" }}>${currentStyle.original_price}</strike>
                &nbsp;&nbsp;SALE:&nbsp;${currentStyle.sale_price}
              </h2> :
              <h2>${currentStyle.original_price}</h2>}
          </div>
          <div>
            <h3 className="bigText">
              Choose your style:
              {currentStyle.name}
            </h3>
            <S.Styles>
              {productStyle.results.map((x) => {
                return x === currentStyle ?
                  <S.StylesButton onClick={styleOnClick} url={x.photos[0].thumbnail_url} value={x.style_id}>
                    <FaCheck style={{color: "yellow"}}/>
                  </S.StylesButton> :
                  <S.StylesButton onClick={styleOnClick} url={x.photos[0].thumbnail_url} value={x.style_id}>
                  </S.StylesButton>
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
