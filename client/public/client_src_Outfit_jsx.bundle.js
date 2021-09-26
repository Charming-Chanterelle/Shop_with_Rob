/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshop_with_rob"] = self["webpackChunkshop_with_rob"] || []).push([["client_src_Outfit_jsx"],{

/***/ "./client/src/Outfit.jsx":
/*!*******************************!*\
  !*** ./client/src/Outfit.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _RelatedComponents_Outfit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelatedComponents/Outfit */ \"./client/src/RelatedComponents/Outfit.js\");\n/* harmony import */ var _RelatedComponents_Outfit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RelatedComponents_Outfit__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RelatedComponents/RelatedStyles.jsx */ \"./client/src/RelatedComponents/RelatedStyles.jsx\");\n\n\n\n\n\n\nvar Outfit = function Outfit(props) {\n  var items = (_RelatedComponents_Outfit__WEBPACK_IMPORTED_MODULE_2___default().items);\n  var show = props.show;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(items.length),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      length = _useState4[0],\n      setLength = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(items),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      outfitItems = _useState6[0],\n      setOutfitItems = _useState6[1]; // console.log('items in state: ', outfitItems);\n  // Set the length to match current children from props\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setLength(items.length);\n  }, [items]);\n\n  var next = function next() {\n    if (currentIndex < length + 1 - show) {\n      setCurrentIndex(function (prevState) {\n        return prevState + 1;\n      });\n    }\n  };\n\n  var prev = function prev() {\n    if (currentIndex > 0) {\n      setCurrentIndex(function (prevState) {\n        return prevState - 1;\n      });\n    }\n  };\n\n  var clicked = function clicked(clickedItem) {\n    var newItems = outfitItems.filter(function (item) {\n      return item.name !== clickedItem;\n    });\n    setOutfitItems(newItems);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"carousel-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    className: \"bigText\"\n  }, \"Your Outfit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"carousel-wrapper\"\n  }, currentIndex > 0 && outfitItems.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__.RoundButton, {\n    type: \"button\",\n    onClick: prev,\n    className: \"left-arrow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronCircleLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__.CardWrapper, {\n    className: \"carousel-content-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"carousel-content show-\".concat(show),\n    style: {\n      transform: \"translateX(-\".concat(currentIndex * (100 / show), \"%)\")\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n    src: \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ252uOeq8QHRIxDH7GfJ6xNI8NBZhirx1mZA&usqp=CAU\",\n    className: \"carouselImage\",\n    alt: \"remove\"\n  }))), outfitItems.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__.Card, {\n      key: item.name\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: item.name\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__.RoundButton, {\n      onClick: function onClick() {\n        return clicked(item.name);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTimes, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: item.image,\n      className: \"carouselImage\",\n      alt: \"related-item\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, \"Category:\", item.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, \"Price:\", \"$\".concat(item.price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, \"Rating:\", item.rating)));\n  }))), currentIndex < length + 1 - show && outfitItems.length + 1 >= show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_3__.RoundButton, {\n    type: \"button\",\n    onClick: next,\n    className: \"right-arrow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaChevronCircleRight, null)))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Outfit);\n\n//# sourceURL=webpack://shop_with_rob/./client/src/Outfit.jsx?");

/***/ }),

/***/ "./client/src/RelatedComponents/RelatedStyles.jsx":
/*!********************************************************!*\
  !*** ./client/src/RelatedComponents/RelatedStyles.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card),\n/* harmony export */   \"RoundButton\": () => (/* binding */ RoundButton),\n/* harmony export */   \"CardWrapper\": () => (/* binding */ CardWrapper),\n/* harmony export */   \"CardText\": () => (/* binding */ CardText),\n/* harmony export */   \"Modal\": () => (/* binding */ Modal),\n/* harmony export */   \"ModalContent\": () => (/* binding */ ModalContent),\n/* harmony export */   \"ModalEdge\": () => (/* binding */ ModalEdge),\n/* harmony export */   \"ModalTitle\": () => (/* binding */ ModalTitle),\n/* harmony export */   \"ModalBody\": () => (/* binding */ ModalBody)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;\n\n/* eslint-disable import/prefer-default-export */\n\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 20%\\n  height: 100%\\n  text-align: center;\\n  display: flex;\\n  transition: all 250ms linear;\\n\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n  flex-shrink: 0;\\n  flex-grow: 1;\\n  display: block;\\n  background-color: #fffefa;\\n  padding: 5px;\\n  border-radius: 5px;\\n  border: 1px solid #d3d3d3;\\n  box-shadow: 2px 2px 2px 1px #d3d3d3;\\n  margin: 0px 2px;\\n  text-align: center;\\n\\n  \"])));\nvar RoundButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color:#FBD63F;\\n  float: right;\\n  border: none;\\n  border-radius: 50%;\\n  color:#000000;\\n  text-align: center;\\n  text-decoration: none;\\n  display: flex;\\n  font-size: 16px;\\n  cursor: pointer;\\n  padding: 15px;\\n  &:hover {\\n    color: #FBD63F;\\n    border: #black solid 1px;\\n    background:#fcecae;\\n  }\\n  z-index: 5000;\\n  \"]))); // export const RoundButton:hover = styles.button`\n//   `;\n\nvar CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  overflow: hidden;\\n  width: 100%;\\n  height: 100%;\\n  \"])));\nvar CardText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: block;\\n\\n  position: absolute;\\n  text-align: center;\\n  // left: 50%;\\n  bottom: 0;\\n  \"])));\nvar Modal = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #ffeca0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: 9999;\\n  \"])));\nvar ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 500px;\\n  background-color: fff;\\n  z-index: 9999;\\n  \"])));\nvar ModalEdge = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n  \"])));\nvar ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0;\\n  \"])));\nvar ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n  border-top: 10px solid #eee;\\n  border-bottom: 1px solid #eee;\\n  \"])));\n\n//# sourceURL=webpack://shop_with_rob/./client/src/RelatedComponents/RelatedStyles.jsx?");

/***/ }),

/***/ "./client/src/RelatedComponents/Outfit.js":
/*!************************************************!*\
  !*** ./client/src/RelatedComponents/Outfit.js ***!
  \************************************************/
/***/ ((module) => {

eval("module.exports = {\n  items: [// {\n  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ252uOeq8QHRIxDH7GfJ6xNI8NBZhirx1mZA&usqp=CAU',\n  //   category: 'N/A',\n  //   name: 'Add to your outfit',\n  //   price: 'N/A',\n  //   rating: 'N/A',\n  //   id: 'N/A',\n  // },\n  {\n    image: 'https://ae01.alicdn.com/kf/HTB1XORbdi6guuRkSmLyq6AulFXaH/zml14-Steampunk-Goggles-Sunglasses-Men-Women-Cool-Shades-Retro-Round-Sun-Glasses-Great-Texture-Metal-Brand.jpg',\n    category: 'Accessories',\n    name: 'Steampunk Sunglasses',\n    price: '69.00',\n    rating: 3.9,\n    id: 48433\n  }, {\n    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmVWTX-n5TcgvPQtiwfb28U9smreTe41hJQQ&usqp=CAU',\n    category: 'Pants',\n    name: 'Balloon Trousers',\n    price: '47.00',\n    rating: 4.7,\n    id: 48434\n  }, {\n    image: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',\n    category: 'Kicks',\n    name: 'Adidas',\n    price: '150.00',\n    rating: 4.8,\n    id: 48436\n  }, {\n    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSN-tzQa7hAKnvUvfk4X2cDPUZpMC-by9Zw&usqp=CAU',\n    category: 'Accessories',\n    name: 'Straw Boater Hat',\n    price: '60.00',\n    rating: 4.7,\n    id: 48438\n  }]\n};\n\n//# sourceURL=webpack://shop_with_rob/./client/src/RelatedComponents/Outfit.js?");

/***/ })

}]);