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
          This is modal content
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="button" type="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
