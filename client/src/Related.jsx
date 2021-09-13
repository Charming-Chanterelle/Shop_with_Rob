/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import items from './RelatedItems';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing: items.items,
    };
  }

  render() {
    return (
      <section>
        <div>
          <div className={this.props.className}>
            <div>
              Name:
              {this.props.name}
            </div>
            <div>
              Category:
              {this.props.category}
            </div>
            <div>
              Price:
              {this.props.price}
            </div>
            <div>
              Rating:
              {this.props.rating}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function Carousel(props) {
  return (
    <>
      {items.items.map((slide, index) => (
        <>
          <Slide
            key={slide.name}
            name={slide.name}
            activeIndex={props.activeIndex}
            className={index === props.activeIndex ? 'active' : 'inactive'}
            category={slide.category}
            price={slide.price}
            rating={slide.rating}
          />
        </>
      ))}
    </>
  );
}

function LeftArrow(props) {
  //  render() {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      BACK
      <i className="fa fa-angle-left fa-3x" aria-hidden="true" />
    </div>
  );
  //  }
}
function RightArrow(props) {
  // render() {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      NEXT
      <i className="fa fa-angle-right fa-3x" aria-hidden="true" />
    </div>
  );
  // }
}

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      length: 4,
    };
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    const { length } = this.state;
    if (index < 1) {
      index = length - 1;
    } else {
      index--;
    }
    this.setState({
      activeIndex: index,
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    const { length } = this.state;
    if (index === length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <>
        <h1 className="bigText">Related Items</h1>
        <div className="slider">
          <div className="slider-items">
            <LeftArrow goToPrevSlide={() => this.goToPrevSlide()} />
            {/* <LeftArrow goToPrevSlide={this.goToPrevSlide} /> */}
            <div className="slider-text">
              <Carousel activeIndex={this.state.activeIndex} />
            </div>
            <RightArrow goToNextSlide={() => this.goToNextSlide()} />
          </div>
        </div>
      </>
    );
  }
}

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
