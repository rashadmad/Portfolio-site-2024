"use strict";
exports.id = "component---src-pages-banner-js";
exports.ids = ["component---src-pages-banner-js"];
exports.modules = {

/***/ "./src/pages/Banner.js?export=default":
/*!********************************************!*\
  !*** ./src/pages/Banner.js?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js");


const Banner = ({
  firstItem,
  secondItem,
  buttonText,
  link
}) => {
  const {
    0: visible,
    1: setIsVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const closeBanner = () => {
    setIsVisible(!visible);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-5 sm:px-3.5 sm:before:flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#1d1d27] to-[#80acff] opacity-30",
    style: {
      clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#80acff] to-[#1d1d27] opacity-30",
    style: {
      clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap justify-center items-center gap-x-4 gap-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm leading-6 text-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    className: "font-semibold"
  }, firstItem), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    viewBox: "0 0 2 2",
    className: "mx-2 inline h-0.5 w-0.5 fill-current",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: 1,
    cy: 1,
    r: 1
  })), secondItem, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    viewBox: "0 0 2 2",
    className: "mx-2 inline h-0.5 w-0.5 fill-current",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: 1,
    cy: 1,
    r: 1
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
  }, buttonText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-hidden": "true"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-1 justify-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: closeBanner,
    type: "button",
    className: `-m-3 p-3 focus-visible:outline-offset-[-4px] ${visible}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Dismiss"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "h-5 w-5 text-gray-900",
    "aria-hidden": "true"
  })))), !visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "\xA0"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/20/solid/esm/XMarkIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-banner-js.js.map