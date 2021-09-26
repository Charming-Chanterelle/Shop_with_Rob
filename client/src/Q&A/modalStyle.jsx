import style, { css } from 'styled-components';

export const AddQuestionContainer = style.div`
font-family: 'Poppins', sans-serif;
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
z-index : 1;
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
;
${({ show }) => show && css`
  opacity: 1;
  pointer-events: visible;
  transform: translateY(0);
  `
};
`;

export const Content = style.div`
z-index : 1;
  width: 650px;
  height: 800px;
  background-color: rgb(255, 255, 255);
  transform: translateY(-200px);
  transition: all 0.4s ease-in-out;
  border: 3px solid #FBD63F;
  overflow-y: auto;
  transform: translateY(0);
`;
