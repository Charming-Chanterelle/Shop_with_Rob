import React, { useState } from 'react';
import * as RAR from './AddReviewModalStyledComponent.jsx';

const ErrorModule = ({ show, onClose }) => {

  return (
    <>
      <RAR.ErrorModuleContainer show={show} onClick={onClose} >
        <RAR.ErrorContent>
          <div>Error</div>
        </RAR.ErrorContent>
      </RAR.ErrorModuleContainer>
    </>
  )

};

export default ErrorModule;