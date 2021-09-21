import style, { css } from 'styled-components';

export const AddReviewContainer = style.div`
font-family: 'Poppins', sans-serif;
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
;
${({ show }) => show && css`
  opacity: 1;
  pointer-events: visible;
  transform: translateY(0);
  `
};
`;

export const Content = style.div`
  width: 400px;
  height: 580px;
  background-color: rgb(255, 255, 255);
  transform: translateY(-200px);
  transition: all 0.4s ease-in-out;
  border: 3px solid #FBD63F;
  overflow-y: auto;
  transform: translateY(0);
`;

export const Header = style.div`
  padding: .5px;
  background-color:#fbd53fbd;
  color: black;
`;

export const Title = style.h2`
  margin: 0;
  text-align: center;
  grid-area: header;
`;

export const Subtitle = style.h3`
  margin: 0;
  text-align: center;
  grid-area: subheader;
`;

export const Body = style.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  grid-area: body;
  background-color: #f8e07ebd;
  display: grid;
  gap: 5px;
`;

export const Footer = style.div`
  grid-area: button;
  text-align: center;
  background-color: #fbd53fbd;
  gap: 5px;
`;

export const SubmitReview = style.button`
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
`;

export const BodyTextInputContainer = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = style.label`

`;

export const BodyTextInput = style.input`

`;

export const BodyRecommend = style.div`

`;

export const BodyRecommendIcon = style.div`

`;

export const BodyRating = style.div`

`;

export const BodyRatingIcon = style.div`
  display: flex;
`;

export const BodyRatingText = style.span`
  padding-left: 15px;
`;

export const BodySummary = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BodySummaryText = style.textarea`

`;

export const BodyFullReview = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const BodyFullReviewText = style.textarea`

`;

export const BodyImageContainer = style.div`

`;

export const BodyImageInput = style.input`

`;

export const RatingsCharacterContainer = style.div`
  display: flex;
`;

export const RatingsCharacteristicText = style.p`

`;

export const RatingsCharacteristicRadioContainer = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const RatingsCharacteristicRadioLabel = style.label`

`;

export const RatingsCharacteristicRadioInput = style.input`

`;
