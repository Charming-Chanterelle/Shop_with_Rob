import styles, { css } from 'styled-components';

export const IndividualTileContainer = styles.div`
  font-family: 'Poppins', sans-serif;
  grid-template-rows: 1fr 1fr 1.5fr minmax(0fr, 1.5fr) minmax(0fr, 1.5fr) 3fr 1fr;
  grid-template-columns: 2fr 2fr;
  padding-top: 10px;
  gap: 2px;
  border-bottom: solid thin black;
  display: grid;
  grid-template-areas:
  "stars username"
  "summary summary"
  "body body"
  "recommend recommend"
  "response response"
  "image image"
  "helpful helpful"
  ;
  overflow-y: auto;
  `;

export const Stars = styles.div`
  grid-area: stars;
  padding-bottom: 5px;
`;

export const Username = styles.div`
  grid-area: username;
  text-align: right;
`;

export const UsernameText = styles.span`
  padding-left: 4px;
`;

export const Summary = styles.div`
  grid-area: summary;
  text-decoration: underline;
`;

export const Body = styles.div`
  grid-area: body;
`;

export const SeeMoreBodyText = styles.span`
  cursor: pointer;
  text-decoration: underline;
`;

export const Recommend = styles.div`
  grid-area: recommend;
`;

export const RecommendText = styles.span`

`;

export const Response = styles.div`
  grid-area: response;
  background-color: lightgray;
`;

export const ResponseText = styles.p`

`;

export const ImageContainer = styles.div`
  grid-area: image;
  grid-template-columns: 1fr;
  grid-template-areas:
  "display-image"
`;

export const Image = styles.img`
  grid-area: display-image;
  margin: 5px;
  height: 75px;
  width: 90px;
  // border-radius: 40%;
  border: 1px solid #e6ba0a;
  cursor: pointer;
  flex-basis: 20%;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
`;

export const Helpful = styles.div`
  grid-area: helpful;
`;

export const HelpfulText = styles.span`
  padding-left: 4px;
  padding-right: 4px;
`;

export const HelpfulTextAction = styles.span`
  cursor: pointer;
  text-decoration: underline;
`;

// export const ImageModal = styles.div`
//   height: 350px;
//   width: 350px;
// `;

export const ImageModalContainer = styles.div`
  overflow-y: auto;
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
  "image-body"
  "image-button"
  ;
${({ show }) => show && css`
  opacity: 1;
  pointer-events: visible;
  transform: translateY(0);
  `
};
`;

export const ImageModalContent = styles.div`
  height: auto;
  width: auto;
  background-color: rgb(255, 255, 255);
  transform: translateY(-200px);
  transition: all 0.4s ease-in-out;
  border: 3px solid #FBD63F;
  overflow-y: auto;
  transform: translateY(0);
  background-size: cover;
  background-position: center;
`;

export const ImageModalBody = styles.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  grid-area: image-body;
  background-color: #f8e07ebd;
  display: grid;
  gap: 5px;
`;

export const ImageModalFooter = styles.div`
  grid-area: image-button;
  text-align: center;
  background-color: #fbd53fbd;
  gap: 5px;
`;

export const ModalImage = styles.img`
  margin: auto;
  display: block;
  width: 95%;
  max-width: 1000px;
`;

export const Button = styles.button`
  background-color:#FBD63F;
  border: none;
  border-radius: 5px;
  color:#000000;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  padding: 15px 8px 15px;
  margin: 15px;
  width: 200px
`;
