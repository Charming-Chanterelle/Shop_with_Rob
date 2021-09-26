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
  gap: 20px;
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
  width: 500px;
  height: 700px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
  transform: translateY(-200px);
  transition: all 0.4s ease-in-out;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.5);
  overflow-y: auto;
  transform: translateY(0);
`;

export const Header = style.div`
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
  padding-bottom: 10px
`;

export const Body = style.div`
  justify-content: center;
  grid-area: body;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 3fr 6fr
  gap: 100px;
  grid-template-areas:
    "nickname"
    "email"
    "recommend"
    "star_rating"
    "summary"
    "body"
`;

export const Footer = style.div`
  margin: 20px
  grid-area: button;
  text-align: center;
`;

export const SubmitReview = style.button`
  // background-color:#FBD63F;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  color:#000000;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 200px
`;

export const BodyRequired = style.span`
  color: red;
`;

export const BodyTextNickname = style.div`
  grid-area: nickname;
  // position: relative;
  display: flex;
  flex-direction: column;
`;

export const BodyTextWarning = style.span`
  padding-top: 5px;
  font-size: 11px;
  color: red;
`;

export const BodyTextEmail = style.div`
  grid-area: email;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = style.label`

`;

export const BodyTextInput = style.input`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  max-width: 350px;
  height: 22px;
${({ show }) => show && css`
  border-color: turquoise;
  `
};
`;

export const BodyRecommend = style.div`
  grid-area: recommend;
`;

export const BodyRecommendIcon = style.div`

`;

export const BodyRating = style.div`
  grid-area: star_rating;
  padding-bottom: 15px;
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
  padding-bottom: 15px;
`;

export const BodySummaryText = style.textarea`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  resize: none;
`;

export const BodyFullReview = style.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

export const BodyFullReviewText = style.textarea`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  resize: none;
`;

export const BodyImageContainer = style.div`
  padding-bottom: 15px;
`;

export const BodyImageInput = style.input`
  position: relative;
  display: flex;
  flex-direction: column;

`;

export const RatingsCharacterContainer = style.div`
  padding-bottom: 10px
`;

export const RatingsCharacterRadioContainer = style.div`
  display: flex;
`;

export const RatingsCharacteristicText = style.span`
  // grid-area: character;
`;

export const RatingsCharacterDescContainer = style.div`
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  display: grid;
  grid-template-areas:
    "textDescOne textDescTwo textDescThree"
`;

export const RatingsCharacterFirstText = style.span`
  text-align: left;
  grid-template-area: textDescOne;
  min-width: 120px;
  max-width: 150px;
`;

export const RatingsCharacterMiddleText = style.span`
  text-align: center;
  grid-template-area: textDescTwo;
  min-width: 120px;
  max-width: 150px;
`;

export const RatingsCharacterLastText = style.span`
  text-align: right;
  grid-template-area: textDescThree;
  min-width: 120px;
  max-width: 150px;
`;

export const RatingsCharacteristicRadioContainer = style.div`
  // grid-area: characteristics;
  position: relative;
  // display: flex;
  // flex-direction: column;
  // padding-left: 15px;
`;

export const RatingsCharacteristicRadioLabel = style.label`
  // grid-area: characteristics;
`;

export const RatingsCharacteristicRadioInput = style.input`
-webkit-appearance: none;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 2px 2px 2px 1px #d3d3d3;
  width: 100%;
  height: 15px;
  outline: none;
  opacity: 0.7;
  position: relative;
  -webkit-transition: .2s;
  transition: opacity .2s;
  background-color: rgb(228, 222, 222);
  // z-index: -1;
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #FBD63F;
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #FBD63F;
    position: relative;
    cursor: pointer;
  }
`;

// ${({ ratingsValue, character }) => ratingsValue && css`
//     background:
//     linear-gradient(to right,
//       #f8e07ebd ${ratingsValue}, rgb(228, 222, 222) ${ratingsValue} 100%, white 100% );
//     `
// };

// export const TickContainer = style.span`
//   position: absolute;
//   top: 0%;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: space-around;
//   padding: 32px;
//   z-index: 1;
// `;

// export const TickMark = style.span`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   width: 8px;
//   background: white;
//   height: 25px;
//   line-height: 35px;
//   z-index: -1;
// `;

export const SubmitTest = style.button`
  background-color:#FBD63F;
  border: none;
  border-radius: 5px;
  color:#000000;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  width: 200px
`;

export const ErrorModuleContainer = style.div`
font-family: 'Poppins', sans-serif;
position: fixed;
left: 5px;
top: 20px;
right: 0;
bottom: 0;
// background-color: rgba(0,0,0,0.5);
color: white;
// align-items: center;
// justify-content: center;
opacity: 0;
transition: all 1s ease-in-out;
transform: translateX(-200px);
pointer-events: none;
;
${({ show }) => show && css`
  opacity: 1;
  pointer-events: visible;
  transform: translateX(0);
  `
};
`;

export const ErrorContent = style.div`
  width: 300px;
  height: 100px;
  background-color: red;
  transform: translateX(-100px);
  transition: all 1s ease-in-out;
  border: 3px solid #red;
  overflow-y: auto;
  transform: translateX(0);
  text-align: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid #red;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,0.5);
`;
