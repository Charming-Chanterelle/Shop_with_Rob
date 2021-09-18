/* eslint-disable import/prefer-default-export */
import styles from 'styled-components';

export const Card = styles.div`
  width: calc(100% / 3);
  text-align: center;
  flex-shrink: 0;
  flex-grow: 1;
  // margin-top: 25px;
  // padding-right: 25px;
  // padding-bottom: 25px;
  // padding-left: 25px;

  // grid-area: main;
  // position: absolute;
  // z-index: 900;
  display: block;
  // flex-direction: column;
  background-color: #fffefa;
  border: 5px solid #899499;

  padding: 10px;
  border: 1px solid #d3d3d3;
  // box-shadow:  -1px 1px #d3d3d3,
  //      -2px 2px #77aaff,
  //      -3px 3px #77aaff,
  //      -4px 4px #77aaff,
  //      -5px 5px #77aaff;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  margin: 10px 50px;

  `;

export const CardWrapper = styles.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 80%;
  // height: 80%;


  `;
