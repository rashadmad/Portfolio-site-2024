"use strict";
exports.id = "component---src-pages-portfolio-card-js";
exports.ids = ["component---src-pages-portfolio-card-js"];
exports.modules = {

/***/ "./src/pages/PortfolioCard.js?export=default":
/*!***************************************************!*\
  !*** ./src/pages/PortfolioCard.js?export=default ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Card = ({
  title,
  img,
  imgAlt,
  live,
  source,
  description,
  tech
}) => {
  const {
    0: visible,
    1: setIsVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const closeBanner = () => {
    setIsVisible(!visible);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex px-3 py-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-b-lg max-w-sm rounded overflow-hidden shadow-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "rounded-t-lg h-full w-full max-h-64 ...",
    src: img,
    alt: imgAlt
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "font-bold text-xl mb-2"
  }, title), tech.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: index,
    className: "m-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
  }, item))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    class: "text-gray-700 text-base"
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-6 py-4 flex items-center justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    href: live,
    class: "w-9/12 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  }, "Demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    href: source,
    class: "w-9/12 m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  }, "Repo")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-portfolio-card-js.js.map