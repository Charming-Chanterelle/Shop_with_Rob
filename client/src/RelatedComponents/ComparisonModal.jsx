import React from 'react';
import * as s from './RelatedStyles.jsx';

const ComparisonModal = (props) => {
  const { showModal, name, rating } = props;
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
              <th>Current</th>
              <th>Characteristics</th>
              <th>{name}</th>
            </tr>
            <tr>
              <td>4 stars</td>
              <td>Rating</td>
              <td>{rating}</td>
            </tr>
            <tr>
              <td>Yes</td>
              <td>Sale Item</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Cotton</td>
              <td>Fabric</td>
              <td>Canvas</td>
            </tr>
            <tr>
              <td>Brass</td>
              <td>Button</td>
              <td>Plastic</td>
            </tr>
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
