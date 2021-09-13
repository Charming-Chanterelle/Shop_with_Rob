import React, { useEffect, useState } from 'react';
import RelatedItems from './RelatedItems';

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

// class Slide extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       landing: items.items,
//     };
//   }

//   render() {
//     return (
//       <section>
//         <div>
//           <div className={this.props.className}>
//             <div>
//               Name:
//               {this.props.name}
//             </div>
//             <div>
//               Category:
//               {this.props.category}
//             </div>
//             <div>
//               Price:
//               {this.props.price}
//             </div>
//             <div>
//               Rating:
//               {this.props.rating}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// function Carousel(props) {
//   return (
//     <>
//       {items.items.map((slide, index) => (
//         <>
//           <Slide
//             key={slide.name}
//             name={slide.name}
//             activeIndex={props.activeIndex}
//             className={index === props.activeIndex ? 'active' : 'inactive'}
//             category={slide.category}
//             price={slide.price}
//             rating={slide.rating}
//           />
//         </>
//       ))}
//     </>
//   );
// }

// function LeftArrow(props) {
//   //  render() {
//   return (
//     <div className="backArrow" onClick={props.goToPrevSlide}>
//       BACK
//       <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
//     </div>
//   );
//   //  }
// }
// function RightArrow(props) {
//   // render() {
//   return (
//     <div className="nextArrow" onClick={props.goToNextSlide}>
//       NEXT
//       <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
//     </div>
//   );
//   // }
// }

// class Related extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0,
//       length: 4,
//     };
//     this.goToPrevSlide = this.goToPrevSlide.bind(this);
//     this.goToNextSlide = this.goToNextSlide.bind(this);
//   }

//   goToPrevSlide() {
//     let index = this.state.activeIndex;
//     const { length } = this.state;
//     if (index < 1) {
//       index = length - 1;
//     } else {
//       index--;
//     }
//     this.setState({
//       activeIndex: index,
//     });
//   }

//   goToNextSlide() {
//     let index = this.state.activeIndex;
//     const { length } = this.state;
//     if (index === length - 1) {
//       index = 0;
//     } else {
//       index++;
//     }
//     this.setState({
//       activeIndex: index,
//     });
//   }

//   render() {
//     return (
//       <>
//         <h1 className="bigText">Related Items</h1>
//         <div className="slider">
//           <div className="slider-items">
//             <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
//             {/* <LeftArrow goToPrevSlide={this.goToPrevSlide} /> */}
//             <div className="slider-text">
//               <Carousel activeIndex={this.state.activeIndex} />
//             </div>
//             <RightArrow goToNextSlide={() => this.goToNextSlide()} />
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// class Related extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         { id: 1, title: 'item #1' },
//         { id: 2, title: 'item #2' },
//         { id: 3, title: 'item #3' },
//         { id: 4, title: 'item #4' },
//         { id: 5, title: 'item #5' },
//       ],
//     };
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       <>
//         <h1 className="bigText">Related Items</h1>
//         <Carousel itemsToShow={4}>
//           {items.map((item) => (
//             <>
//               <img className="carouselImage" src="https://www.montereymushrooms.com/hubfs/AdobeStock_21616275%202.jpeg" alt="sliced-mushrooms" />
//               <div key={item.id}>{item.title}</div>
//             </>
//           ))}
//         </Carousel>
//       </>
//     );
//   }
// }

export default Related;
