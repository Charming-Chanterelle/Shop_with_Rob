import React from 'react';
import style from 'styled-components';

export const ModalContainer = style.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
align-items: center;
justify-content: center;
opacity: 0;
transition: all 0.3s ease-in-out;
pointer-events: none;
display: grid;
grid-template-areas:
"header header"
"subheader subheader"
"body body"
"button button"
`
;

export const ModalShow = style.div`
  opacity: 1;
  pointer-events: visible;
`
;

export const ModalContent = style.div`
  width: 400px;
  height: 580px;
  background-color: rgb(255, 255, 255);
  transform: translateY(-200px);
  transition: all 0.4s ease-in-out;
  border: 3px solid #FBD63F;
  overflow-y: auto;
`
;

.modal.show .modal-content {
  transform: translateY(0);
}

export const ModalHeader = style.div`
  padding: .5px;
  background-color:#fbd53fbd;
  color: black;
`
;

export const ModalTitle = style.h2`
  margin: 0;
  text-align: center;
  grid-area: header;
`
;

.modal-subtitle {
  margin: 0;
  text-align: center;
  grid-area: subheader;
}

.modal-body {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  grid-area: body;
  background-color: #f8e07ebd;
  display: grid;
  gap: 5px;
}

.modal-footer {
  grid-area: button;
  text-align: center;
  background-color: #fbd53fbd;
  gap: 5px;
}

.modal-nickname {
  grid-area: nickname;
  display: block;
  background-color: rgb(224, 224, 240);
}

.modal-email {
  grid-area: email;
  background-color: aquamarine;
}

.modal-rating {
  grid-area: rating;
}

.modal-recommend {
  grid-area: recommend;
}

.modal-characteristics {
  grid-area: characteristics;
}

.modal-summary {
  grid-area: summary;
}

.modal-body {
  grid-area: body;
}

.modal-counter {
  grid-area: counter;
}

.input-text-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.submitButton {
  background-color: #e6ba0a;
}