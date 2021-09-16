import React from 'react';

const ComparisonModal = (props) => {
  const { showModal } = props;
  if (!showModal) {
    return null;
  }
  return (
    <div className={`modal ${props.showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Comparing</h4>
        </div>
        <div className="modal-body">
          <table>
            <tr>
              <th>Current</th>
              <th>Characteristics</th>
              <th>Related Item</th>
            </tr>
            <tr>
              <td>4 stars</td>
              <td>Rating</td>
              <td>4.2 stars</td>
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
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button" type="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
