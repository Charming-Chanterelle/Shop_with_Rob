import React from 'react';
import * as RIT from './IndividualTileStyledComponent.jsx';

const RatingsImageModal = ({ imageShow, url, onSubmit }) => (
  <>
    <RIT.ImageModalContainer show={imageShow}>
      <RIT.ImageModalContent>
        <RIT.ImageModalBody>
          <RIT.ModalImage
            src={url}
          />
        </RIT.ImageModalBody>
        <RIT.ImageModalFooter>
          <RIT.Button
            onClick={onSubmit}
          >
            Close
          </RIT.Button>
        </RIT.ImageModalFooter>
      </RIT.ImageModalContent>
    </RIT.ImageModalContainer>
  </>
);

export default RatingsImageModal;
