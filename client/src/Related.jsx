import React from 'react';
import Carousel from 'react-elastic-carousel';

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 5, title: 'item #5' },
      ],
    };
  }

  render() {
    const { items } = this.state;
    return (
      <>
        <h1 className="bigText">Related Items</h1>
        <Carousel itemsToShow={4}>
          {items.map((item) => (
            <>
              <img className="carouselImage" src="https://www.montereymushrooms.com/hubfs/AdobeStock_21616275%202.jpeg" alt="sliced-mushrooms" />
              <div key={item.id}>{item.title}</div>
            </>
          ))}
        </Carousel>
      </>
    );
  }
}

export default Related;
