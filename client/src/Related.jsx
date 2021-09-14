import React, { useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import RelatedItems from './RelatedItems';

// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const Related = (props) => {
  const { items } = RelatedItems;
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
      <h1 className="bigText">Related Items</h1>
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
              {items.map((item) => (
                <>
                  <div>
                    <button onClick={clicked}>
                      <FaRegStar />
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

export default Related;
