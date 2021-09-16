import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import OutfitItems from './RelatedComponents/Outfit';

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
    if (currentIndex < (length - show)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const clicked = (event) => {
    const clickedItem = event.target.parentElement.parentElement.classList.value;
    const newItems = outfitItems.filter((item) => item.name !== clickedItem);
    setOutfitItems(newItems);
  };

  return (
    <>
      <h1 className="bigText">Your Outfit</h1>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {
                  (currentIndex > 0 && outfitItems.length > 0)
                  && (
                  <button type="button" onClick={prev} className="left-arrow">
                    &lt;
                  </button>
                  )
              }
          <div
            className="carousel-content-wrapper"
          >
            <div
              className={`carousel-content show-${show}`}
              style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
            >
              {/* start of item info */}
              <div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ252uOeq8QHRIxDH7GfJ6xNI8NBZhirx1mZA&usqp=CAU" className="carouselImage" alt="remove" /></div>
              </div>
              {outfitItems.map((item) => (
                <>
                  <div className={item.name}>
                    <button onClick={clicked}>
                      <FaTimes />
                    </button>
                    <img src={item.image} className="carouselImage" alt="related-item" />
                    <div>
                      {/* Name: */}
                      {item.name}
                    </div>
                    <div>
                      Category:
                      {item.category}
                    </div>
                    <div>
                      Price:
                      {`$${item.price}`}
                    </div>
                    <div>
                      Rating:
                      {item.rating}
                    </div>
                  </div>
                </>
              ))}

              {/* end of item info  */}
            </div>
          </div>
          {/* You can alwas change the content of the button to other things */}
          {
                  (currentIndex < (length - show) && outfitItems.length > 0)
                  && (
                  <button type="button" onClick={next} className="right-arrow">
                    &gt;
                  </button>
                  )
              }
        </div>
      </div>
    </>
  );
};

export default Outfit;
