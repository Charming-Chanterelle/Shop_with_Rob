/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
// import { ProductContext } from './contexts/ProductContext.jsx';
// icons
import { FaStar, FaRegStar, FaChevronCircleRight, FaChevronCircleLeft, FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaCheck, FaRegSmileBeam } from 'react-icons/fa';
// styled comps
import * as S from './OverviewStyledComponents.jsx';
import product from './OverviewTESTproductReg.js';
import productStyle from './OverviewTESTstyle.js';
import StarDisplay from './StarDisplay.jsx';

// params: product obj, all_styles arr, ratings arr
const Overview = () => {
  // const //{ product, styles, ratingsScore, loaded } = useContext(ProductContext);

  // useEffect//(() => {
  //   if (loaded) {

  //   }
  // }, [loaded]);
  const quantityMax = 15;
  // get new style by id
  const theStyle = (ID) => productStyle.results.filter((x) => x.style_id === ID)[0];
  // start with default style (obj)
  const [currentStyle, setCurrentStyle] = useState(
    productStyle.results.filter((x) => x['default?'] === true)[0],
  );
  // current sku (obj of objs) for dropdown and cart
  const [sizes, setSizes] = useState(['Select Size']);
  const [size, setSize] = useState('');
  const [quantities, setQuantities] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  // star button state
  const [isFavorited, setIsFavorited] = useState(false);
  // image counter
  const [current, setCurrent] = useState(0);
  const [mainImg, setMainImg] = useState(currentStyle.photos[current].url);
  const { length } = currentStyle.photos;
  const [hovered, setHovered] = useState(false);

  const setTheMain = () => {
    setMainImg(currentStyle.photos[current].url);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // click a style buttons
  const styleOnClick = (event) => {
    // if already selected, do nothing
    currentStyle.id !== event.target.value ?
      setCurrentStyle(theStyle(parseInt(event.target.value, 10))) : null;
  };
  useEffect(() => {
    setTheMain();
  }, [current]);
  useEffect(() => {
    setTheMain();
  }, [currentStyle]);
  // star button click handler
  const favorite = () => {
    setIsFavorited(!isFavorited);
  };
  // top ratings score click handler
  // const jumpToRatings = () => {
  // };
  const imgOnClick = (event) => {
    setCurrent(event.target.value);
    // setMainImg(currentStyle.photos[current].url);
  };
  // when change style, should have skuID saved
  // shows list of options in dropdown
  const getSizes = () => {
    // first touch
    if (sizes.includes('Select Size')) {
      const newSizes = [];
      setQuantities(1);
      Object.values(currentStyle.skus).forEach((x) => {
        if (x.quantity > 0) {
          newSizes.push(x.size);
        }
      });
      newSizes.length > 0 ? setSizes(newSizes) : setSizes(['OUT OF STOCK']);
    }
  };
  const getQuantities = () => {
    const theQuantity = Object.values(currentStyle.skus).filter((x) => x.size === size);
    setQuantities(theQuantity[0].quantity);
  };
  const selectSize = (event) => {
    setSize(event.target.value);
  };
  const selectQuantity = (event) => {
    setQuantity(event.target.value);
  };
  // useEffect(() => {
  //   getQuantities();
  // }, [size]);

  // make post req to db with sku number and quantity
  const addToCart = () => {
    let id;
    for (var key in currentStyle.skus) {
      if (currentStyle.skus[key].size === size) {
        //what about repeated sizes? should be fine since should depleat first skus then next for sizes so it ends up closer to only having one sku per size
        id = key;
      }
    };
    for (var i = 0; i < quantity; i++) {
      axios.post('/api/cart', { sku_id: id })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          alert("We're sorry. There's been an error. Please try refreshing the page or contacting our customer service.");
        });
    }
    setSizes(['Select Size']);
    setQuantities(['-']);
  };
  const earlyCart = () => {
    // open the size dropdown, and a message should appear above the dropdown stating
    // “Please select size”
  };
  // const makeBig = (e) => {
  //   e.currentTarget.style = { transform: 'scale(1.25)' };
  // };

  const toggleHovered = () => {
    setHovered(!hovered);
  };

  return (
    <div>
      <S.Container>
        <S.Main>
          <S.LeftArrow onClick={prevSlide}><FaChevronCircleLeft /></S.LeftArrow>
          <S.BigImg className="imgFormat" src={mainImg} alt="pic" />
          <S.ImgCards>
            {currentStyle.photos.map((x, i) => {
              if (i === current) {
                return <S.ImgSample key={x.thumbnail_url} onClick={imgOnClick} className="imgFormat" url={x.thumbnail_url} value={i} style={{ border: '3px solid #FBD63F' }} />;
              } return <S.ImgSample key={x.thumbnail_url} onClick={imgOnClick} className="imgFormat" url={x.thumbnail_url} value={i} />;
            })}
          </S.ImgCards>
          <S.RightArrow onClick={nextSlide}><FaChevronCircleRight /></S.RightArrow>
        </S.Main>
        <S.Content>
          <h2 className="bigText">{product.slogan}</h2>
          <p className="bigText">{product.description}</p>
        </S.Content>
        <S.Side>
          <div>
            <StarDisplay stars={{ width: '20', height: '20' }} style={{ float: 'right' }} />
            <span>Read all [#] reviews&nbsp;&nbsp;&nbsp;</span>
            <h4 className="subText"
              style={{ margin: 0, padding: 0, paddingTop: 10 }}>{product.category}</h4>
            <h1 className="bigText" style={{ margin: 0, padding: 0 }}>{product.name}</h1>
            {currentStyle.sale_price !== null ?
              <h2>
                <strike style={{ color: 'red' }}>${currentStyle.original_price}</strike>
                &nbsp;&nbsp;SALE:&nbsp;${currentStyle.sale_price}
              </h2> :
              <h2>${currentStyle.original_price}</h2>}
          </div>
          <div>
            <h3 className="bigText" style={{ fontWeight: 600 }}>
              Choose your style:&nbsp;
              {currentStyle.name}
            </h3>
            <S.Styles>
              {productStyle.results.map((x) =>
                <S.StylesButton key={x.style_id} onClick={styleOnClick}
                  url={x.photos[0].thumbnail_url}
                  value={x.style_id}
                  onMouseEnter={toggleHovered}
                  onMouseLeave={toggleHovered}
                  style={{ transform: `${hovered ? "scale(1.15, 1.15)" : "scale(1, 1)"}` }}>
                  {x === currentStyle &&
                    <FaCheck style={{ color: 'yellow' }} />}
                </S.StylesButton>)}
            </S.Styles>
            <S.Styles>
              <select onClick={getSizes} onChange={selectSize} className="imgFormat" name="size">
                {sizes.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
              <select onClick={getQuantities} onChange={selectQuantity} className="imgFormat" name="quantity">
                {quantities < 0 ? <option>-</option> :
                  quantities >= 15 ? [...Array(quantityMax),
                  ].map((undefined, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))
                    : [...Array(quantities),].map((undefined, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
              </select>
              <button onClick={favorite} style={{ padding: 10, borderRadius: '50%', boxShadow: "2px 2px 2px 1px #d3d3d3" }}>{isFavorited ?
                <FaStar /> :
                <FaRegStar />}
              </button>
            </S.Styles>
            <div style={{ marginTop: 5 }}>
              {!sizes.includes('OUT OF STOCK')
                && <button onClick={sizes === ['Select Size'] ? earlyCart : addToCart}
                  onMouseEnter={toggleHovered}
                  onMouseLeave={toggleHovered}
                  style={{ boxShadow: "2px 2px 2px 1px #d3d3d3", marginLeft: 10, transform: `${hovered ? "scale(1.15, 1.15)" : "scale(1, 1)"}` }}
                  className="bigText">
                  <h3>ADD TO CART ++</h3></button>}
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
            <li className="bigText" style={{ listStyleType: 'none', marginBottom: 7, fontStyle: 'italic' }}><FaRegSmileBeam style={{ color: '#c48f35' }} />&nbsp;&nbsp;110% Satisfaction Guaranteed*</li>
            {product.features.map((x) => {
              return <li key={x.value} className="bigText" style={{ listStyleType: 'none', marginBottom: 7, fontStyle: 'italic' }}><FaRegSmileBeam style={{ color: '#c48f35' }} />&nbsp;&nbsp;{x.feature}: {x.value}</li>;
            })}
          </S.FeaturesList>
          <FaFacebookSquare style={{ color: "#899499", height: 20, width: 20, borderRadius: "5%", boxShadow: "2px 2px 2px 1px #d3d3d3" }} />
          <FaTwitterSquare style={{ color: "#899499", height: 20, width: 20, boxShadow: "2px 2px 2px 1px #d3d3d3" }} />
          <FaPinterestSquare style={{ color: "#899499", height: 20, width: 20, boxShadow: "2px 2px 2px 1px #d3d3d3" }} />
        </S.Features>
      </S.Container>
    </div>
  );
};

export default Overview;
