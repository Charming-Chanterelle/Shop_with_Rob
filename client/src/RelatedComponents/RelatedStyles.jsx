/* eslint-disable import/prefer-default-export */
import styles from 'styled-components';

export const Card = styles.div`
  // width: calc(100% / 3);
  display: flex;
  transition: all 250ms linear;
  // -ms-overflow-style: none;
  // scrollbar-width: none;
  width: 100%;
  flex-shrink: 0;
  flex-grow: 1;
  width: 25%;
  // text-align: center;
  display: block;
  background-color: #fffefa;
  padding: 5px;
  border: 1px solid #d3d3d3;
  // box-shadow:  -1px 1px #d3d3d3,
  //      -2px 2px #77aaff,
  //      -3px 3px #77aaff,
  //      -4px 4px #77aaff,
  //      -5px 5px #77aaff;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  margin: 0px 5px;

  `;

export const RoundButton = styles.button`
  background-color:#FBD63F;
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
  // display: grid;
  // grid-template-rows: minmax(0, .5fr) .4fr 3fr 1fr;
  // grid-template-columns: 1fr 3fr;
  // padding-left: 200px;
  // padding-right: 200px;
  // row-gap: 10px;
  // column-gap: 30px;
  `;


