/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
// icons
import { FaStar, FaStarHalfAlt, FaRegStar, FaChevronCircleRight, FaChevronCircleLeft, FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaCheck, FaRegSmileBeam } from 'react-icons/fa';
// styled comps
import * as S from './OverviewStyledComponents.jsx';
import product from './OverviewTESTproductReg.js';
import productStyle from './OverviewTESTstyle.js';

// params: product obj, all_styles arr, ratings arr
const Overview = () => {
  // get new style by id
  const theStyle = (ID) => productStyle.results.filter((x) => x.style_id === ID)[0];
  // start with default style (obj)
  const [currentStyle, setCurrentStyle] = useState(
    productStyle.results.filter((x) => x['default?'] === true)[0],
  );
  // reveiws info
  const reviews = [{
    1: 5, 2: 0, 3: 1, 4: 20, 5: 10,
  }];
  // current sku (obj of objs) for dropdown and cart
  const [sizes, setSizes] = useState(['Select Size']);
  const [quantities, setQuantities] = useState(['-']);
  // star button state
  const [isFavorited, setIsFavorited] = useState(false);
  // image counter
  const [current, setCurrent] = useState(0);
  const [mainImg, setMainImg] = useState(currentStyle.photos[current].url);
  const length = currentStyle.photos.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // click a style button
  const styleOnClick = (event) => {
    // if already selected, do nothing
    currentStyle.id !== event.target.value ?
      setCurrentStyle(theStyle(parseInt(event.target.value, 10))) : null;
    setMainImg(currentStyle.photos[current].url);
  };
  // star button click handler
  const favorite = () => {
    setIsFavorited(!isFavorited);
  };
  // top ratings score click handler
  // const jumpToRatings = () => {
  // };
  const imgOnClick = (event) => { //PROBLEM
    setCurrent(event.target.value);
    setMainImg(currentStyle.photos[event.target.value].url);
  };
  const getSkus = (event) => {
    // first touch
    if (sizes.includes('Select Size')) {
      const newSizes = [];
      Object.values(currentStyle.skus).forEach((x) => {
        if (x.quantity > 0) {
          newSizes.push(x.size);
        }
      });
      newSizes.length > 0 ? setSizes(newSizes) : setSizes(['OUT OF STOCK']);
      // } else { // selecting size
      //   // save event - spec sku number
      //   setQuantities('1');
      //   // const newQuantities = [];
      //   // Object.values(currentStyle.skus).forEach((x) => {
      //   //   newQuantities.push(x.quantity.toString());
      //   // });
      //   // setQuantities(newQuantities);
    }
  };

  return (
    <>
      <S.Container>
        <S.Main>
          <S.LeftArrow onClick={prevSlide}><FaChevronCircleLeft /></S.LeftArrow>
          {/* {currentStyle.photos.map((x, i) => {
            if (i === current) {
              return <S.BigImg className="imgFormat" src={x.url} alt="pic" />;
            }
          })} */}
          <S.BigImg className="imgFormat" src={mainImg} alt="pic" />
          <S.ImgCards>
            {/* issue here vv */}
            {currentStyle.photos.map((x, i) => {
              if (i === current) {
                return <S.ImgSample onClick={imgOnClick} className="imgFormat" url={x.thumbnail_url} value={i} style={{ border: "3px solid #FBD63F" }} />;
              } else {
                return <S.ImgSample onClick={imgOnClick} className="imgFormat" url={x.thumbnail_url} value={i} />;
              }
            })}
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
              <span style={{ float: "right" }}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                Read all [#] reviews&nbsp;&nbsp;&nbsp;
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
              {productStyle.results.map((x) =>
                <S.StylesButton onClick={styleOnClick}
                  url={x.photos[0].thumbnail_url}
                  value={x.style_id}>
                  {x === currentStyle &&
                    <FaCheck style={{ color: "yellow" }} />}
                </S.StylesButton>)}
            </S.Styles>
            {/* change  */}
            <S.Styles>
              <select onClick={getSkus} className="imgFormat" name="size">
                {sizes.map((x) => <option>{x}</option>)}
              </select>
              <select className="imgFormat" name="quantity">
                {quantities.map((x) => <option>{x}</option>)}
                {/* {
                  <option>-</option>
                  <option>15</option>
                  If the size has not been selected, then the quantity dropdown will display ‘-’
                  and the dropdown will be disabled.
                  Once a size has been selected, the dropdown should default to 1.
                } */}
              </select>
              <button onClick={favorite} style={{ padding: 10 }}>{isFavorited ?
                <FaStar /> :
                <FaRegStar />}
              </button>
            </S.Styles>
            <div style={{ marginTop: 5 }}>
              <button className="bigText"><h3>ADD TO CART ++</h3></button>
            </div>
            {/* ^^ If the default ‘Select Size’ is currently
            selected: Clicking this button should open
            the size dropdown, and a message should
            appear above the dropdown stating “Please
            select size”.
            If there is no stock: This button should be hidden
            If both a valid size and valid quantity are
            selected: Clicking this button will add the product to the user’s cart. */}
          </div>
        </S.Side>
        <S.Features>
          <S.FeaturesList>
            <li className="bigText" style={{ listStyleType: "none", marginBottom: 7, fontStyle: "italic" }}><FaRegSmileBeam style={{ color: "#c48f35" }} />&nbsp;&nbsp;110% Satisfaction Guaranteed*</li>
            {product.features.map((x) => {
              return <li className="bigText" style={{ listStyleType: "none", marginBottom: 7, fontStyle: "italic" }}><FaRegSmileBeam style={{ color: "#c48f35" }} />&nbsp;&nbsp;{x.feature}: {x.value}</li>;
            })}
          </S.FeaturesList>
        </S.Features>
      </S.Container>
    </>
  );
};

export default Overview;
