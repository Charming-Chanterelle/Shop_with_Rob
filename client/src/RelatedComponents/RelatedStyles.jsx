/* eslint-disable import/prefer-default-export */
import styles from 'styled-components';

export const Card = styles.div`
  width: calc(100% / 4);
  height: 100%
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

  `;

export const RoundButton = styles.button`
  background-color:#FBD63F;
  float: right;
  border: none;
  border-radius: 50%;
  color:#000000;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  padding: 15px 8px 15px;
  `;

export const CardWrapper = styles.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  `;

export const CardText = styles.div`
  position: relative;
  bottom: 0;
  `;
