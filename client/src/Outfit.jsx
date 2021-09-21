import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import OutfitItems from './RelatedComponents/Outfit';
import * as s from './RelatedComponents/RelatedStyles.jsx';

const Outfit = (props) => {
  const { items } = OutfitItems;
  const { show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);
  const [outfitItems, setOutfitItems] = useState(items);
  // console.log('items in state: ', outfitItems);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(items.length);
  }, [items]);

  const next = () => {
    if (currentIndex < (length + 1 - show)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const clicked = (clickedItem) => {
    const newItems = outfitItems.filter((item) => item.name !== clickedItem);
    setOutfitItems(newItems);
  };

  return (
    <>
      <div className="carousel-container">
        <h1 className="bigText">Your Outfit</h1>
        <div className="carousel-wrapper">
          {
                  (currentIndex > 0 && outfitItems.length > 0)
                  && (
                  <s.RoundButton type="button" onClick={prev} className="left-arrow">
                    &lt;
                  </s.RoundButton>
                  )
              }
          <s.CardWrapper
            className="carousel-content-wrapper"
          >
            <div
              className={`carousel-content show-${show}`}
              style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
            >
              {/* start of item info */}
              <s.Card>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ252uOeq8QHRIxDH7GfJ6xNI8NBZhirx1mZA&usqp=CAU" className="carouselImage" alt="remove" /></div>
              </s.Card>
              {outfitItems.map((item) => (
                <s.Card>
                  <div className={item.name}>
                    <s.RoundButton onClick={() => clicked(item.name)}>
                      <FaTimes />
                    </s.RoundButton>
                    <img src={item.image} className="carouselImage" alt="related-item" />
                    <div className="bigText">
                      {/* Name: */}
                      {item.name}
                    </div>
                    <div className="bigText">
                      Category:
                      {item.category}
                    </div>
                    <div className="bigText">
                      Price:
                      {`$${item.price}`}
                    </div>
                    <div className="bigText">
                      Rating:
                      {item.rating}
                    </div>
                  </div>
                </s.Card>
              ))}

              {/* end of item info  */}
            </div>
          </s.CardWrapper>
          {
                  (currentIndex < (length + 1 - show) && outfitItems.length > 0)
                  && (
                  <s.RoundButton type="button" onClick={next} className="right-arrow">
                    &gt;
                  </s.RoundButton>
                  )
              }
        </div>
      </div>
    </>
  );
};

export default Outfit;
