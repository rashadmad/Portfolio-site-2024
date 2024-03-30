"use strict";
exports.id = "component---src-pages-index-tsxhead";
exports.ids = ["component---src-pages-index-tsxhead"];
exports.modules = {

/***/ "./src/pages/index.tsx?export=head":
/*!*****************************************!*\
  !*** ./src/pages/index.tsx?export=head ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_Portfolio_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/Portfolio.json */ "./src/data/Portfolio.json");


//src/data/portfolio.json

function PortfolioItem({
  title,
  description,
  source,
  image
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "portfolio-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: image,
    alt: title,
    className: "portfolio-image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "portfolio-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "portfolio-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "portfolio-description"
  }, description)));
}
const IndexPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "app-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "My Portfolio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "portfolio"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "portfolio-items"
  }, "[key, value]: [string, boolean]", _data_Portfolio_json__WEBPACK_IMPORTED_MODULE_1__.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PortfolioItem, {
    key: index,
    title: item.title,
    description: item.description,
    source: item.source,
    image: item.image,
    url: item.url
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "app-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 2024 My Portfolio. All rights reserved.")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Home Page");

/***/ }),

/***/ "./src/data/Portfolio.json":
/*!*********************************!*\
  !*** ./src/data/Portfolio.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"title":"Mountain Sunset","description":"A breathtaking view of the sun setting behind the mountains.","source":"https://example.com/mountain-sunset","image":"https://example.com/images/mountain-sunset.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Beach Paradise","description":"Crystal clear waters and golden sands make this beach a true paradise.","source":"https://example.com/beach-paradise","image":"https://example.com/images/beach-paradise.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Enchanted Forest","description":"Walk through the mystical forest and discover its hidden wonders.","source":"https://example.com/enchanted-forest","image":"https://example.com/images/enchanted-forest.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"City Lights","description":"The bustling city comes alive with shimmering lights after dusk.","source":"https://example.com/city-lights","image":"https://example.com/images/city-lights.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Autumn Serenity","description":"Fall foliage paints a serene picture in the countryside.","source":"https://example.com/autumn-serenity","image":"https://example.com/images/autumn-serenity.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Northern Lights","description":"Experience the magical dance of colors in the Arctic sky.","source":"https://example.com/northern-lights","image":"https://example.com/images/northern-lights.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Desert Mirage","description":"Mirage creates an illusion in the vast desert landscape.","source":"https://example.com/desert-mirage","image":"https://example.com/images/desert-mirage.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Waterfall Wonder","description":"Witness the majestic cascade of water amidst lush greenery.","source":"https://example.com/waterfall-wonder","image":"https://example.com/images/waterfall-wonder.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Snowy Peaks","description":"Snow-capped peaks reach towards the clear blue sky.","source":"https://example.com/snowy-peaks","image":"https://example.com/images/snowy-peaks.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Tropical Oasis","description":"Relax under the shade of palm trees in this tropical paradise.","source":"https://example.com/tropical-oasis","image":"https://example.com/images/tropical-oasis.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Starlit Sky","description":"Gaze upon the twinkling stars against the dark night sky.","source":"https://example.com/starlit-sky","image":"https://example.com/images/starlit-sky.jpg","url":"https://example.com/images/mountain-sunset.jpg"},{"title":"Misty Morning","description":"The morning mist adds a mystical charm to the tranquil landscape.","source":"https://example.com/misty-morning","image":"https://example.com/images/misty-morning.jpg","url":"https://example.com/images/mountain-sunset.jpg"}]');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsxhead.js.map