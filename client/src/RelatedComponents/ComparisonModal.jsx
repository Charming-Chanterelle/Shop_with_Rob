import React, { useContext } from 'react';
import * as s from './RelatedStyles.jsx';
import { ProductContext } from '../contexts/ProductContext.jsx';

const ComparisonModal = (props) => {
  // console.log(props);
  const { showModal, name, rating, price } = props;
  const { product, styles, meta, ratingsScore } = useContext(ProductContext);
  if (!showModal) {
    return null;
  }
  return (
    <s.Modal className={`${showModal ? 'show' : ''}`}>
      <s.ModalContent>
        <s.ModalEdge>
          <s.ModalTitle>Comparing</s.ModalTitle>
        </s.ModalEdge>
        <s.ModalBody>
          <table>
            <tr>
              <th>{product.name}</th>
              <th>Characteristics</th>
              <th>{name}</th>
            </tr>
            <tr>
              <td>{ratingsScore.avgRating.toPrecision(3)}</td>
              <td>Rating</td>
              <td>{rating}</td>
            </tr>
            <tr>
              <td>{product.default_price}</td>
              <td>Price</td>
              <td>{price}</td>
            </tr>
            {/* <tr>
              <td>Cotton</td>
              <td>Fabric</td>
              <td>Canvas</td>
            </tr>
            <tr>
              <td>Brass</td>
              <td>Button</td>
              <td>Plastic</td>
            </tr> */}
          </table>
        </s.ModalBody>
        <s.ModalEdge>
          <s.RoundButton onClick={props.onClose} className="button" type="button">Close</s.RoundButton>
        </s.ModalEdge>
      </s.ModalContent>
    </s.Modal>
  );
};

export default ComparisonModal;
