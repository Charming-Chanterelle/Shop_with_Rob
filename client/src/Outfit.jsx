import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import OutfitItems from './Outfit';

const Outfit = (props) => {
  const { items } = OutfitItems;
  // const carouselItems = Array.from(OutfitItems).slice(1,2);
  const { show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(items.length);

  const [touchPosition, setTouchPosition] = useState(null);

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

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const clicked = () => {
    console.log('clicked');
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <>
      <h1 className="bigText">Your Outfit</h1>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {/* You can alwas change the content of the button to other things */}
          {
                  currentIndex > 0
                  && (
                  <button type="button" onClick={prev} className="left-arrow">
                    &lt;
                  </button>
                  )
              }
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
              style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
            >
              {/* start of item info */}
                <div>
                  <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ252uOeq8QHRIxDH7GfJ6xNI8NBZhirx1mZA&usqp=CAU' className="carouselImage" alt="remove"></img></div>
                </div>
              {items.map((item) => (
                <>
                  <div>
                    <button>
                      <FaTimes onClick={clicked}/>
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
                  currentIndex < (length - show)
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
