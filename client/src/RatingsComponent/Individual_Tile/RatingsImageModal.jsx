import React from 'react';
import * as RIT from './IndividualTileStyledComponent.jsx';

const RatingsImageModal = ({ imageShow, url, onSubmit }) => (
  <>
    <RIT.ImageModalContainer show={imageShow} onClick={onSubmit}>
      <RIT.ModalImage
        src={url}
      />
    </RIT.ImageModalContainer>
  </>
);

export default RatingsImageModal;
