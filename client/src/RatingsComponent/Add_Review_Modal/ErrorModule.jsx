import React, { useState } from 'react';
import * as RAR from './AddReviewModalStyledComponent.jsx';

const ErrorModule = ({ show, message, onClose }) => {

  return (
    <>
      <RAR.ErrorModuleContainer show={show} onClick={onClose} >
        <RAR.ErrorContent>
          <span>{message}</span>
        </RAR.ErrorContent>
      </RAR.ErrorModuleContainer>
    </>
  )

};

export default ErrorModule;
