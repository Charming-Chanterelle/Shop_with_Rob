/* eslint-disable import/extensions */
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { ProductContext } from './contexts/ProductContext.jsx';
import { FaStar, FaRegStar, FaChevronCircleRight, FaChevronCircleLeft, FaChevronCircleUp, FaChevronCircleDown, FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaCheck, FaRegSmileBeam } from 'react-icons/fa';
import * as S from './OverviewStyledComponents.jsx';
import * as RIT from './RatingsComponent/Individual_Tile/IndividualTileStyledComponent.jsx';
import StarDisplay from './StarDisplay.jsx';
import RatingsImageModal from './RatingsComponent/Individual_Tile/RatingsImageModal.jsx';

const Overview = (props) => {
  const {
    product, styles, ratingsScore, loaded,
  } = useContext(ProductContext);

  const [currentStyle, setCurrentStyle] = useState({});
  const [current, setCurrent] = useState(null);
  const [mainImg, setMainImg] = useState('');
  const [hovered, setHovered] = useState(0);
  const [cartHovered, setCartHovered] = useState(false);
  const [sampleHovered, setSampleHovered] = useState('');
  const [reviewHovered, setReviewHovered] = useState(false);
  const [fbHovered, setFbHovered] = useState(false);
  const [twHovered, setTwHovered] = useState(false);
  const [ptHovered, setPtHovered] = useState(false);
  const [cartFlag, setCartFlag] = useState(null);
  const [sizes, setSizes] = useState(['Select Size']);
  const [size, setSize] = useState('');
  const [quantities, setQuantities] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const [bigImageModal, setBigImageModal] = useState(false);
  const quantityMax = 15;

  /* ----------------
  |   ON DATA LOAD   |
  ------------------*/
  useEffect(() => {
    const test = styles.filter((x) => x['default?'] === true)[0];
    if (test) {
      setCurrent(0);
      setCurrentStyle(test);
      if (currentStyle !== {} && (current || current === 0)) {
        setMainImg(currentStyle.photos[current].url);
      }
    }
  }, [loaded]);

  /* --------------------------------------------
  |   IMG SLIDER FUNCTIONS & OTHER USE_EFFECTS   |
  ----------------------------------------------*/
  const prevSlide = () => {
    let l = currentStyle.photos.length;
    setCurrent(current === 0 ? l - 1 : current - 1);
  };
  const nextSlide = () => {
    let l = currentStyle.photos.length;
    setCurrent(current === l - 1 ? 0 : current + 1);
  };
  const theStyle = (ID) => styles.filter((x) => x.style_id === ID)[0];
  const styleOnClick = (event) => {
    // if already selected, do nothing
    currentStyle.id !== event.target.value ?
      setCurrentStyle(theStyle(parseInt(event.target.value, 10))) : null;
  };
  useEffect(() => {
    if (current !== null) {
      let newImg = currentStyle.photos[0].url;
      if (current < currentStyle.photos.length) {
        newImg = currentStyle.photos[current].url;
      } else {
        setCurrent(0);
      }
      setMainImg(newImg);
    }
  }, [current, currentStyle]);
  //update dropdowns when style changes
  useEffect(() => {
    setSizes(['Select Size']);
  }, [currentStyle]);
  useEffect(() => {
    if (sizes.includes('Select Size')) {
      setQuantities(-1);
    }
  }, [sizes]);
  useEffect(() => {
    if (styles.length > 0) {
      let test = styles.filter((x) => x['default?'] === true)[0];
      test === undefined ? setCurrentStyle(styles[0]) : setCurrentStyle(test);
    }
  }, [styles]);

  /* ------------------
  |   CLICK HANDLERS   |
  ---------------------*/
  // star button click handler
  const favorite = () => {
    setIsFavorited(!isFavorited);
  };
  const imgOnClick = (event) => {
    setCurrent(parseInt(event.target.value));
  };
  // for dropdowns
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

  /* --------
  |   CART   |
  -----------*/
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
          setCartFlag(true);
        })
        .catch((err) => {
          setCartFlag(false);
          alert("We're sorry. There's been an error, please try refreshing the page or contacting our 24 hour customer service.");
        });
    }
  };
  useEffect(() => {
    setSizes(['Select Size']);
    if (cartFlag === true) {
      alert("HORRAY! Stay tuned for your confirmation");
    }
  }, [cartFlag]);
  const earlyCart = () => {
    // open the size dropdown, and a message should appear above the dropdown stating
    alert("Please select a size first");
  };

  /* ------------
  |   HOVERING   |
  --------------*/
  const enterHovered = (event) => {
    setHovered(event.target.value);
  };
  const exitHovered = () => {
    setHovered(0);
  }
  const toggleCartHovered = () => {
    setCartHovered(!cartHovered);
  };
  const enterSample = (event) => {
    //set the style obj = transform scale()
    // S.sampleHover.transform = newScale
    setSampleHovered(event.target.name);
  };
  const exitSample = () => {
    setSampleHovered('');
  };
  const toggleReviewHovered = () => {
    setReviewHovered(!reviewHovered);
  };
  const toggleFbHovered = () => {
    setFbHovered(!fbHovered);
  };
  const toggleTwHovered = () => {
    setTwHovered(!twHovered);
  };
  const togglePtHovered = () => {
    setPtHovered(!ptHovered);
  };

  /* ----------
  |   RETURN   |
  -------------*/
  // if (loaded) {
  const photos = currentStyle.photos ?? [];
  const stylez = styles ?? [];
  const featurez = product.features ?? [];
  return (
    <div>
      <S.Container>
        <S.Main>
          <S.LeftArrow onClick={prevSlide}><FaChevronCircleLeft /></S.LeftArrow>
          <S.BigImg
            className="imgFormat"
            src={mainImg}
            alt={currentStyle.name}
            onClick={() => setBigImageModal(true)}
          />
          <RIT.ImageModalContainer show={bigImageModal} onClick={() => setBigImageModal(false)}>
            <RIT.ModalImage
              src={mainImg}
              style={{cursor: "-moz-zoom-out",
                cursor: "-webkit-zoom-out",
                cursor: "zoom-out" }}
            />
          </RIT.ImageModalContainer>
          <S.ImgCards>
            <FaChevronCircleUp style={{ visibility: `${current === 0 ? "hidden" : "visible"}`, color: "#c48f35", paddingLeft: 12, paddingBottom: 2 }}
              onClick={prevSlide} />
            {photos.map((x, i) => {
              return <S.ImgSample key={x.thumbnail_url + i}
                onMouseEnter={enterSample}
                onMouseLeave={exitSample}
                style={{ transform: `${sampleHovered == x.thumbnail_url ? "scale(1.15, 1.15)" : "scale(1, 1)"}`, border: `${current === i ? "3px solid #FBD63F" : "none"}` }}
                onClick={imgOnClick}
                className="imgFormat"
                url={x.thumbnail_url}
                name={x.thumbnail_url}
                value={i} />;
            })}
            <FaChevronCircleDown style={{ visibility: `${current === photos.length - 1 ? "hidden" : "visible"}`, color: "#c48f35", paddingLeft: 12, paddingTop: 2 }}
              onClick={nextSlide} />
          </S.ImgCards>
          <S.RightArrow onClick={nextSlide}><FaChevronCircleRight /></S.RightArrow>
        </S.Main>
        <S.Content>
          <h2 className="bigText">{product.slogan}</h2>
          <p className="bigText">{product.description}</p>
        </S.Content>
        <S.Side>
          <div>
            <StarDisplay stars={{ width: '20', height: '20' }} />
            <span ref={props.reference}
              onClick={props.jumpClick} className="bigText"
              onMouseEnter={toggleReviewHovered}
              onMouseLeave={toggleReviewHovered}
              style={{ float: "right", cursor: "pointer", color: `${reviewHovered ? "blue" : "black"}`, textDecoration: `${reviewHovered ? "underline blue" : "none"}` }}>Read all {ratingsScore.numberOfRatings} reviews</span>
          </div>
          <div>
            <h4 className="subText"
              style={{ margin: 0, padding: 0, paddingTop: 10 }}>{product.category}</h4>
          </div>
          <div>
            <h1 className="bigText" style={{ margin: 0, padding: 0 }}>{product.name}</h1>
            {currentStyle.sale_price !== null ?
              <h2>
                <strike style={{ color: 'red' }}>${currentStyle.original_price}</strike>
                &nbsp;&nbsp;SALE:&nbsp;${currentStyle.sale_price}
              </h2> :
              <h2>${currentStyle.original_price}</h2>}
          </div>
          <div>
            <h3 className="bigText"
              style={{ marginBottom: 0 }}>
              Choose your style:&nbsp;
              {currentStyle.name}
            </h3>
            <S.Styles>
              {stylez.map((x) =>
                <S.StylesButton key={x.style_id} onClick={styleOnClick}
                  url={x.photos[0].thumbnail_url}
                  value={x.style_id}
                  onMouseEnter={enterHovered}
                  onMouseLeave={exitHovered}
                  style={{ transform: `${hovered == x.style_id ? "scale(1.15, 1.15)" : "scale(1, 1)"}` }}>
                  {x === currentStyle &&
                    <FaCheck style={{ color: "yellow" }} />}
                </S.StylesButton>)}
            </S.Styles>
            <S.Styles>
              <select onClick={getSizes}
                onChange={selectSize}
                className="imgFormat"
                name="size"
                style={{ width: "6rem", height: "2rem", boxShadow: "2px 2px 2px 1px #d3d3d3" }}>
                {!sizes.includes('Select Size') ? sizes.map((x) => <option key={x} value={x}>{x}</option>) : <option>Select Size</option>}
              </select>
              <select onClick={getQuantities}
                onChange={selectQuantity}
                className="imgFormat"
                name="quantity" style={{ width: "3rem", height: "2rem", boxShadow: "2px 2px 2px 1px #d3d3d3" }}>
                {quantities < 0 ? <option>-</option> :
                  quantities >= 15 ? [...Array(quantityMax),
                  ].map((undefined, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))
                    : [...Array(quantities),].map((undefined, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
              </select> &nbsp;&nbsp;&nbsp;
              {/* , width: 35, height: 35 */}
              <button onClick={favorite}
                style={{ borderRadius: '100%', marginTop: 5, boxShadow: "2px 2px 2px 1px #d3d3d3", display: "flex", justifyContent: "center", alignItems: "center" }} >{isFavorited ?
                  <FaStar /> :
                  <FaRegStar />}
              </button>
            </S.Styles>
            <div style={{ display: "inline", marginLeft: 15, marginBottom: 10 }}>
              {!sizes.includes('OUT OF STOCK')
                && <button onClick={sizes.includes('Select Size') ? earlyCart : addToCart}
                  onMouseEnter={toggleCartHovered}
                  onMouseLeave={toggleCartHovered}
                  style={{ boxShadow: "2px 2px 2px 1px #d3d3d3", transform: `${cartHovered ? "scale(1, 1)" : "scale(1.15, 1.15)"}`, padding: 10 }}
                  className="bigText">
                  <h3 style={{ fontWeight: 600 }}>{cartHovered ? "ADD TO CART++" : "ADD TO CART"}</h3></button>}
              <S.Socials>
                <FaFacebookSquare
                  onMouseEnter={toggleFbHovered}
                  onMouseLeave={toggleFbHovered}
                  style={{ color: `${fbHovered ? "#3b5998" : "#899499"}`, height: 25, width: 25, borderRadius: "5%", boxShadow: "2px 2px 2px 1px #d3d3d3" }} />
                <FaTwitterSquare
                  onMouseEnter={toggleTwHovered}
                  onMouseLeave={toggleTwHovered}
                  style={{ color: `${twHovered ? "#1DA1F2" : "#899499"}`, height: 25, width: 25, boxShadow: "2px 2px 2px 1px #d3d3d3" }} />
                <FaPinterestSquare
                  onMouseEnter={togglePtHovered}
                  onMouseLeave={togglePtHovered}
                  style={{ color: `${ptHovered ? "#E60023" : "#899499"}`, height: 25, width: 25, boxShadow: "2px 2px 2px 1px #d3d3d3" }} />
              </S.Socials>
            </div>
          </div>
        </S.Side>
        <S.Features>
          <S.FeaturesList>
            {featurez.map((x) => {
              return <li key={x.value}
                className="bigText"
                style={{ listStyleType: "none", marginBottom: 7, fontStyle: "italic" }}><FaRegSmileBeam style={{ color: "#c48f35" }} />&nbsp;&nbsp;{x.feature}{x.value === null ? null : `: ${x.value}`}</li>;
            })}
          </S.FeaturesList>
        </S.Features>
      </S.Container>
    </div>
  );
  // }
  // return <div>Hang tight...</div>;
};

export default Overview;
