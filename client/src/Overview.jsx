/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, IoChevronForwardCircle } from 'react-icons/fa';
// styled comps
import * as S from './OverviewStyledComponents.jsx';

// params: product obj, all_styles arr, ratings arr
const Overview = ({ product, styles, stars }) => {
  // get new style by id
  // console.log("RIGHT EHRE", props.product);
  // console.log("RIGHT EHRE", props.stars);
  // console.log("RIGHT EHRE", props.styles);

  const theStyle = (ID) => styles.results.filter((x) => x.style_id === ID)[0];
  // default style (obj)
  const [currentStyle, setCurrentStyle] = useState(
    styles.results.filter((x) => x['default?'] === true)[0],
  );
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
              {styles.results.map((x) => {
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
