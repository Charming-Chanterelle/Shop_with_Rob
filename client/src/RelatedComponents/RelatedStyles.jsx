/* eslint-disable import/prefer-default-export */
import styles from 'styled-components';

export const Card = styles.div`
  width: 20%
  // width: calc((100% - (300px)) / 4);
  height: 100%
  text-align: center;
  display: flex;
  transition: all 250ms linear;

  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-shrink: 0;
  flex-grow: 1;
  display: block;
  background-color: #fffefa;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  margin: 0px 2px;
  text-align: center;

  `;

export const RoundButton = styles.button`
  background-color:#FBD63F;
  float: right;
  border: none;
  border-radius: 50%;
  color:#000000;
  text-align: center;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  cursor: pointer;
  padding: 15px 8px 15px;
  &:hover {
    color: #FBD63F;
    border: #black solid 1px;
    background:#fcecae;
  }
  z-index: 5000;
  `;

// export const RoundButton:hover = styles.button`

//   `;

export const CardWrapper = styles.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  `;

export const CardText = styles.div`
  display: block;

  position: absolute;
  text-align: center;
  // left: 50%;
  bottom: 0;
  `;

export const Modal = styles.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #ffeca0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  `;

export const ModalContent = styles.div`
  width: 500px;
  background-color: fff;
  z-index: 9999;
  `;

export const ModalEdge = styles.div`
  padding: 10px;
  `;

export const ModalTitle = styles.h4`
  margin: 0;
  `;

export const ModalBody = styles.div`
  padding: 10px;
  border-top: 10px solid #eee;
  border-bottom: 1px solid #eee;
  `;
