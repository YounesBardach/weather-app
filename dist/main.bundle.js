/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/assets.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/assets.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Restrict sizing to the page width in all browsers (opinionated).\n */\n\n:where(iframe, img, input, video, select, textarea) {\n  height: auto;\n  max-width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/assets.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,YAAY;EACZ,eAAe;AACjB","sourcesContent":["/**\n * Restrict sizing to the page width in all browsers (opinionated).\n */\n\n:where(iframe, img, input, video, select, textarea) {\n  height: auto;\n  max-width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/forms.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/forms.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E */ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Add typography inheritance in all browsers (opinionated).\n */\n\n:where(button, input, select, textarea) {\n  background-color: transparent; /* 1 */\n  border: 1px solid WindowFrame; /* 1 */\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  letter-spacing: inherit; /* 2 */\n  padding: 0.25em 0.375em; /* 1 */\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(select) {\n  appearance: none;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat right center / 1em;\n  border-radius: 0;\n  padding-right: 1em;\n}\n\n/**\n * Don't show the arrow for multiple choice selects\n */\n\n:where(select[multiple]) {\n  background-image: none;\n}\n\n/**\n * Remove the border and padding in all browsers (opinionated).\n */\n\n:where([type=\"color\" i], [type=\"range\" i]) {\n  border-width: 0;\n  padding: 0;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/forms.css"],"names":[],"mappings":"AAAA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,6BAA6B,EAAE,MAAM;EACrC,cAAc,EAAE,MAAM;EACtB,aAAa,EAAE,MAAM;EACrB,uBAAuB,EAAE,MAAM;EAC/B,uBAAuB,EAAE,MAAM;AACjC;;AAEA;;EAEE;;AAEF;EACE,gBAAgB;EAChB,gFAAuL;EACvL,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE;;AAEF;EACE,sBAAsB;AACxB;;AAEA;;EAEE;;AAEF;EACE,eAAe;EACf,UAAU;AACZ","sourcesContent":["/**\n * 1. Change the inconsistent appearance in all browsers (opinionated).\n * 2. Add typography inheritance in all browsers (opinionated).\n */\n\n:where(button, input, select, textarea) {\n  background-color: transparent; /* 1 */\n  border: 1px solid WindowFrame; /* 1 */\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  letter-spacing: inherit; /* 2 */\n  padding: 0.25em 0.375em; /* 1 */\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(select) {\n  appearance: none;\n  background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E\") no-repeat right center / 1em;\n  border-radius: 0;\n  padding-right: 1em;\n}\n\n/**\n * Don't show the arrow for multiple choice selects\n */\n\n:where(select[multiple]) {\n  background-image: none;\n}\n\n/**\n * Remove the border and padding in all browsers (opinionated).\n */\n\n:where([type=\"color\" i], [type=\"range\" i]) {\n  border-width: 0;\n  padding: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/reduce-motion.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/reduce-motion.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n * 1. Remove animations when motion is reduced (opinionated).\n * 2. Remove fixed background attachments when motion is reduced (opinionated).\n * 3. Remove timed scrolling behaviors when motion is reduced (opinionated).\n * 4. Remove transitions when motion is reduced (opinionated).\n */\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  ::before,\n  ::after {\n    animation-delay: -1ms !important; /* 1 */\n    animation-duration: 1ms !important; /* 1 */\n    animation-iteration-count: 1 !important; /* 1 */\n    background-attachment: initial !important; /* 2 */\n    scroll-behavior: auto !important; /* 3 */\n    transition-delay: 0s !important; /* 4 */\n    transition-duration: 0s !important; /* 4 */\n  }\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/reduce-motion.css"],"names":[],"mappings":"AAAA;;;;;EAKE;;AAEF;EACE;;;IAGE,gCAAgC,EAAE,MAAM;IACxC,kCAAkC,EAAE,MAAM;IAC1C,uCAAuC,EAAE,MAAM;IAC/C,yCAAyC,EAAE,MAAM;IACjD,gCAAgC,EAAE,MAAM;IACxC,+BAA+B,EAAE,MAAM;IACvC,kCAAkC,EAAE,MAAM;EAC5C;AACF","sourcesContent":["/*\n * 1. Remove animations when motion is reduced (opinionated).\n * 2. Remove fixed background attachments when motion is reduced (opinionated).\n * 3. Remove timed scrolling behaviors when motion is reduced (opinionated).\n * 4. Remove transitions when motion is reduced (opinionated).\n */\n\n@media (prefers-reduced-motion: reduce) {\n  *,\n  ::before,\n  ::after {\n    animation-delay: -1ms !important; /* 1 */\n    animation-duration: 1ms !important; /* 1 */\n    animation-iteration-count: 1 !important; /* 1 */\n    background-attachment: initial !important; /* 2 */\n    scroll-behavior: auto !important; /* 3 */\n    transition-delay: 0s !important; /* 4 */\n    transition-duration: 0s !important; /* 4 */\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/sanitize.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/sanitize.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Document\n * ========================================================================== */\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Backgrounds do not repeat by default (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  background-repeat: no-repeat; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Change the line height in all browsers (opinionated).\n * 3. Breaks words to prevent overflow in all browsers (opinionated).\n * 4. Use a 4-space tab width in all browsers (opinionated).\n * 5. Remove the grey highlight on links in iOS (opinionated).\n * 6. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n:where(:root) {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  overflow-wrap: break-word; /* 3 */\n  -moz-tab-size: 4; /* 4 */\n  tab-size: 4; /* 4 */\n  -webkit-tap-highlight-color: transparent; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 6 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\n:where(body) {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\n:where(h1) {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, and Safari.\n */\n\n:where(dl, ol, ul) :where(dl, ol, ul) {\n  margin: 0;\n}\n\n/**\n * 1. Correct the inheritance of border color in Firefox.\n * 2. Add the correct box sizing in Firefox.\n */\n\n:where(hr) {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\n:where(nav) :where(ol, ul) {\n  list-style-type: none;\n  padding: 0;\n}\n\n/**\n * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n */\n\n:where(nav li)::before {\n  content: \"\\200B\";\n  float: left;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Prevent overflow of the container in all browsers (opinionated).\n */\n\n:where(pre) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Safari.\n */\n\n:where(abbr[title]) {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(code, kbd, samp) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\n:where(small) {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browsers (opinionated).\n */\n\n:where(audio, canvas, iframe, img, svg, video) {\n  vertical-align: middle;\n}\n\n/**\n * Remove the border on iframes in all browsers (opinionated).\n */\n\n:where(iframe) {\n  border-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\n:where(svg:not([fill])) {\n  fill: currentColor;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * 1. Collapse border spacing in all browsers (opinionated).\n * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\n\n:where(table) {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\n:where(button, input, select) {\n  margin: 0;\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\n:where(button, [type=\"button\" i], [type=\"reset\" i], [type=\"submit\" i]) {\n  -webkit-appearance: button;\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(fieldset) {\n  border: 1px solid #a0a0a0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\n:where(progress) {\n  vertical-align: baseline;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\n:where(textarea) {\n  margin: 0; /* 1 */\n  resize: vertical; /* 3 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n:where([type=\"search\" i]) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct styles in Safari.\n */\n\n:where(dialog) {\n  background-color: white;\n  border: solid;\n  color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n:where(dialog:not([open])) {\n  display: none;\n}\n\n/*\n * Add the correct display in Safari.\n */\n\n:where(details > summary:first-of-type) {\n  display: list-item;\n}\n\n/* Accessibility\n * ========================================================================== */\n\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n\n:where([aria-busy=\"true\" i]) {\n  cursor: progress;\n}\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n\n:where([aria-controls]) {\n  cursor: pointer;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n\n:where([aria-disabled=\"true\" i], [disabled]) {\n  cursor: not-allowed;\n}\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n\n:where([aria-hidden=\"false\" i][hidden]) {\n  display: initial;\n}\n\n:where([aria-hidden=\"false\" i][hidden]:not(:focus)) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/sanitize.css"],"names":[],"mappings":"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","sourcesContent":["/* Document\n * ========================================================================== */\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Backgrounds do not repeat by default (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  background-repeat: no-repeat; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritance in all browsers (opinionated).\n */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Use the default cursor in all browsers (opinionated).\n * 2. Change the line height in all browsers (opinionated).\n * 3. Breaks words to prevent overflow in all browsers (opinionated).\n * 4. Use a 4-space tab width in all browsers (opinionated).\n * 5. Remove the grey highlight on links in iOS (opinionated).\n * 6. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n:where(:root) {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  overflow-wrap: break-word; /* 3 */\n  -moz-tab-size: 4; /* 4 */\n  tab-size: 4; /* 4 */\n  -webkit-tap-highlight-color: transparent; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 6 */\n}\n\n/* Sections\n * ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\n:where(body) {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Edge, Firefox, and Safari.\n */\n\n:where(h1) {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n * ========================================================================== */\n\n/**\n * Remove the margin on nested lists in Chrome, Edge, and Safari.\n */\n\n:where(dl, ol, ul) :where(dl, ol, ul) {\n  margin: 0;\n}\n\n/**\n * 1. Correct the inheritance of border color in Firefox.\n * 2. Add the correct box sizing in Firefox.\n */\n\n:where(hr) {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\n:where(nav) :where(ol, ul) {\n  list-style-type: none;\n  padding: 0;\n}\n\n/**\n * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n */\n\n:where(nav li)::before {\n  content: \"\\200B\";\n  float: left;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n * 3. Prevent overflow of the container in all browsers (opinionated).\n */\n\n:where(pre) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n}\n\n/* Text-level semantics\n * ========================================================================== */\n\n/**\n * Add the correct text decoration in Safari.\n */\n\n:where(abbr[title]) {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\n:where(b, strong) {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\n:where(code, kbd, samp) {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\n:where(small) {\n  font-size: 80%;\n}\n\n/* Embedded content\n * ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browsers (opinionated).\n */\n\n:where(audio, canvas, iframe, img, svg, video) {\n  vertical-align: middle;\n}\n\n/**\n * Remove the border on iframes in all browsers (opinionated).\n */\n\n:where(iframe) {\n  border-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\n:where(svg:not([fill])) {\n  fill: currentColor;\n}\n\n/* Tabular data\n * ========================================================================== */\n\n/**\n * 1. Collapse border spacing in all browsers (opinionated).\n * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n */\n\n:where(table) {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n\n/* Forms\n * ========================================================================== */\n\n/**\n * Remove the margin on controls in Safari.\n */\n\n:where(button, input, select) {\n  margin: 0;\n}\n\n/**\n * Correct the inability to style buttons in iOS and Safari.\n */\n\n:where(button, [type=\"button\" i], [type=\"reset\" i], [type=\"submit\" i]) {\n  -webkit-appearance: button;\n}\n\n/**\n * Change the inconsistent appearance in all browsers (opinionated).\n */\n\n:where(fieldset) {\n  border: 1px solid #a0a0a0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Edge, and Firefox.\n */\n\n:where(progress) {\n  vertical-align: baseline;\n}\n\n/**\n * 1. Remove the margin in Firefox and Safari.\n * 3. Change the resize direction in all browsers (opinionated).\n */\n\n:where(textarea) {\n  margin: 0; /* 1 */\n  resize: vertical; /* 3 */\n}\n\n/**\n * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n:where([type=\"search\" i]) {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Safari.\n */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style upload buttons in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n * ========================================================================== */\n\n/*\n * Add the correct styles in Safari.\n */\n\n:where(dialog) {\n  background-color: white;\n  border: solid;\n  color: black;\n  height: -moz-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n:where(dialog:not([open])) {\n  display: none;\n}\n\n/*\n * Add the correct display in Safari.\n */\n\n:where(details > summary:first-of-type) {\n  display: list-item;\n}\n\n/* Accessibility\n * ========================================================================== */\n\n/**\n * Change the cursor on busy elements in all browsers (opinionated).\n */\n\n:where([aria-busy=\"true\" i]) {\n  cursor: progress;\n}\n\n/*\n * Change the cursor on control elements in all browsers (opinionated).\n */\n\n:where([aria-controls]) {\n  cursor: pointer;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements in all browsers (opinionated).\n */\n\n:where([aria-disabled=\"true\" i], [disabled]) {\n  cursor: not-allowed;\n}\n\n/*\n * Change the display on visually hidden accessible elements\n * in all browsers (opinionated).\n */\n\n:where([aria-hidden=\"false\" i][hidden]) {\n  display: initial;\n}\n\n:where([aria-hidden=\"false\" i][hidden]:not(:focus)) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/system-ui.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/system-ui.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Add the correct system-ui font-family in Firefox.\n */\n\n@font-face {\n  font-family: system-ui;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"HelveticaNeue\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Italic\"), local(\"Ubuntu-Italic\"), local(\"Roboto-Italic\"), local(\"HelveticaNeue-Italic\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold\"), local(\"Ubuntu-Bold\"), local(\"Roboto-Bold\"), local(\"HelveticaNeue-Bold\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu-BoldItalic\"), local(\"Roboto-BoldItalic\"), local(\"HelveticaNeue-BoldItalic\");\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/system-ui.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,sBAAsB;EACtB,qHAAqH;AACvH;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yIAAyI;AAC3I;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,iIAAiI;AACnI;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,0JAA0J;AAC5J","sourcesContent":["/**\n * Add the correct system-ui font-family in Firefox.\n */\n\n@font-face {\n  font-family: system-ui;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI\"), local(\"Ubuntu\"), local(\"Roboto-Regular\"), local(\"HelveticaNeue\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Italic\"), local(\"Ubuntu-Italic\"), local(\"Roboto-Italic\"), local(\"HelveticaNeue-Italic\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold\"), local(\"Ubuntu-Bold\"), local(\"Roboto-Bold\"), local(\"HelveticaNeue-Bold\");\n}\n\n@font-face {\n  font-family: system-ui;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFont\"), local(\"Segoe UI Bold Italic\"), local(\"Ubuntu-BoldItalic\"), local(\"Roboto-BoldItalic\"), local(\"HelveticaNeue-BoldItalic\");\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/typography.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/typography.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Use the default user interface font in all browsers (opinionated).\n */\n\nhtml {\n  font-family:\n    system-ui,\n    /* macOS 10.11-10.12 */ -apple-system,\n    /* Windows 6+ */ \"Segoe UI\",\n    /* Android 4+ */ \"Roboto\",\n    /* Ubuntu 10.10+ */ \"Ubuntu\",\n    /* Gnome 3+ */ \"Cantarell\",\n    /* KDE Plasma 5+ */ \"Noto Sans\",\n    /* fallback */ sans-serif,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n\n/**\n * Use the default monospace user interface font in all browsers (opinionated).\n */\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    /* macOS 10.10+ */ \"Menlo\",\n    /* Windows 6+ */ \"Consolas\",\n    /* Android 4+ */ \"Roboto Mono\",\n    /* Ubuntu 10.10+ */ \"Ubuntu Monospace\",\n    /* KDE Plasma 5+ */ \"Noto Mono\",\n    /* KDE Plasma 4+ */ \"Oxygen Mono\",\n    /* Linux/OpenOffice fallback */ \"Liberation Mono\",\n    /* fallback */ monospace,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/typography.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE;;;;;;;;;;;;wCAYsC;AACxC;;AAEA;;EAEE;;AAEF;;;;EAIE;;;;;;;;;;;;;wCAasC;AACxC","sourcesContent":["/**\n * Use the default user interface font in all browsers (opinionated).\n */\n\nhtml {\n  font-family:\n    system-ui,\n    /* macOS 10.11-10.12 */ -apple-system,\n    /* Windows 6+ */ \"Segoe UI\",\n    /* Android 4+ */ \"Roboto\",\n    /* Ubuntu 10.10+ */ \"Ubuntu\",\n    /* Gnome 3+ */ \"Cantarell\",\n    /* KDE Plasma 5+ */ \"Noto Sans\",\n    /* fallback */ sans-serif,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n\n/**\n * Use the default monospace user interface font in all browsers (opinionated).\n */\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n    ui-monospace,\n    /* macOS 10.10+ */ \"Menlo\",\n    /* Windows 6+ */ \"Consolas\",\n    /* Android 4+ */ \"Roboto Mono\",\n    /* Ubuntu 10.10+ */ \"Ubuntu Monospace\",\n    /* KDE Plasma 5+ */ \"Noto Mono\",\n    /* KDE Plasma 4+ */ \"Oxygen Mono\",\n    /* Linux/OpenOffice fallback */ \"Liberation Mono\",\n    /* fallback */ monospace,\n    /* macOS emoji */ \"Apple Color Emoji\",\n    /* Windows emoji */ \"Segoe UI Emoji\",\n    /* Windows emoji */ \"Segoe UI Symbol\",\n    /* Linux emoji */ \"Noto Color Emoji\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/ui-monospace.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/ui-monospace.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Add the correct system-ui font-family in Chrome, Edge, and Firefox.\n */\n\n@font-face {\n  font-family: ui-monospace;\n  src: local(\".AppleSystemUIFontMonospaced-Regular\"), local(\"Segoe UI Mono\"), local(\"UbuntuMono\"), local(\"Roboto-Mono\"), local(\"Menlo\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  src: local(\".AppleSystemUIFontMonospaced-RegularItalic\"), local(\"Segoe UI Mono Italic\"), local(\"UbuntuMono-Italic\"), local(\"Roboto-Mono-Italic\"), local(\"Menlo-Italic\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-Bold\"), local(\"Segoe UI Mono Bold\"), local(\"UbuntuMono-Bold\"), local(\"Roboto-Mono-Bold\"), local(\"Menlo-Bold\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-BoldItalic\"), local(\"Segoe UI Mono Bold Italic\"), local(\"UbuntuMono-BoldItalic\"), local(\"Roboto-Mono-BoldItalic\"), local(\"Menlo-BoldItalic\");\n}\n", "",{"version":3,"sources":["webpack://./node_modules/sanitize.css/ui-monospace.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;EACE,yBAAyB;EACzB,qIAAqI;AACvI;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,uKAAuK;AACzK;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,sJAAsJ;AACxJ;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,qLAAqL;AACvL","sourcesContent":["/**\n * Add the correct system-ui font-family in Chrome, Edge, and Firefox.\n */\n\n@font-face {\n  font-family: ui-monospace;\n  src: local(\".AppleSystemUIFontMonospaced-Regular\"), local(\"Segoe UI Mono\"), local(\"UbuntuMono\"), local(\"Roboto-Mono\"), local(\"Menlo\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  src: local(\".AppleSystemUIFontMonospaced-RegularItalic\"), local(\"Segoe UI Mono Italic\"), local(\"UbuntuMono-Italic\"), local(\"Roboto-Mono-Italic\"), local(\"Menlo-Italic\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-Bold\"), local(\"Segoe UI Mono Bold\"), local(\"UbuntuMono-Bold\"), local(\"Roboto-Mono-Bold\"), local(\"Menlo-Bold\");\n}\n\n@font-face {\n  font-family: ui-monospace;\n  font-style: italic;\n  font-weight: bold;\n  src: local(\".AppleSystemUIFontMonospaced-BoldItalic\"), local(\"Segoe UI Mono Bold Italic\"), local(\"UbuntuMono-BoldItalic\"), local(\"Roboto-Mono-BoldItalic\"), local(\"Menlo-BoldItalic\");\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.header-container {\n  background-color: darkseagreen;\n  height: 100px;\n}\n\n.flex-header {\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: blue;\n}\n\n.logo-container {\n  font-size: var(--font-size-large);\n}\n.logo {\n  width: 100px;\n  height: 100px;\n}\n\n.logo-title {\n  margin: 0;\n}\n\n.input-container {\n  position: relative;\n}\n\n.hidden-label {\n  display: block;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n#client-input {\n  border-radius: 10px;\n  border-width: 0;\n  background-color: lightgray;\n  width: 400px;\n  height: 35px;\n}\n\n#client-input:focus {\n  outline: 3px solid blue;\n}\n\n#client-input::placeholder {\n  text-align: center;\n}\n\n.search-button {\n  position: absolute;\n  width: 25px;\n  right: 25px;\n  bottom: 4px;\n  cursor: pointer;\n}\n\n.date {\n  font-size: var(--font-size-large);\n  margin: 0;\n}\n\n.information-container {\n  color: blue;\n  height: calc(100vh - 200px);\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.information-card {\n  border-radius: 10px;\n  height: 500px;\n  width: 700px;\n  background-position: center;\n}\n\n.city-title {\n  margin: 0;\n  text-align: center;\n  background-color: rgba(143, 188, 143, 0.6);\n  padding: 1rem 0;\n  border-radius: 10px 10px 0 0;\n  height: 13%;\n}\n\n.card-inside-flexer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: var(--font-size-large);\n  height: 87%;\n}\n\n.informations-blocks {\n  display: flex;\n  height: 60%;\n  flex-direction: column;\n  padding: 1rem;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.informations-blocks-two {\n  height: 40%;\n  padding: 0.2rem;\n  display: flex;\n  gap: 1rem;\n  width: 200px;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.informations {\n  border-block-end: 5px solid;\n  background-color: rgba(143, 188, 143, 0.6);\n  margin: 0;\n  padding: 0.2rem;\n  border-radius: 5px;\n}\n\n.indicators {\n  height: 40%;\n  background-color: rgba(143, 188, 143, 0.6);\n  border-radius: 40%;\n}\n\n.flex-footer {\n  font-size: var(--font-size-large);\n  background-color: darkseagreen;\n  display: flex;\n  color: blue;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  height: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;EAChB,SAAS;EACT,yBAAyB;EACzB,SAAS;EACT,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,UAAU;EACV,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,iCAAiC;AACnC;AACA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,2BAA2B;EAC3B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,SAAS;AACX;;AAEA;EACE,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,0CAA0C;EAC1C,eAAe;EACf,4BAA4B;EAC5B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iCAAiC;EACjC,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;EAC1C,SAAS;EACT,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,iCAAiC;EACjC,8BAA8B;EAC9B,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,aAAa;AACf","sourcesContent":[":root {\n  font-family: system-ui;\n  /* (62.5/100) * 16px = 10px */\n  font-size: 62.5%;\n  /* 14px */\n  --font-size-small: 1.4rem;\n  /* 16px */\n  --font-size-default: 1.6rem;\n  /* 24px */\n  --font-size-large: 2.4rem;\n}\n\nbody {\n  font-size: var(--font-size-default);\n  min-height: 100vh;\n}\n\n.header-container {\n  background-color: darkseagreen;\n  height: 100px;\n}\n\n.flex-header {\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: blue;\n}\n\n.logo-container {\n  font-size: var(--font-size-large);\n}\n.logo {\n  width: 100px;\n  height: 100px;\n}\n\n.logo-title {\n  margin: 0;\n}\n\n.input-container {\n  position: relative;\n}\n\n.hidden-label {\n  display: block;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n#client-input {\n  border-radius: 10px;\n  border-width: 0;\n  background-color: lightgray;\n  width: 400px;\n  height: 35px;\n}\n\n#client-input:focus {\n  outline: 3px solid blue;\n}\n\n#client-input::placeholder {\n  text-align: center;\n}\n\n.search-button {\n  position: absolute;\n  width: 25px;\n  right: 25px;\n  bottom: 4px;\n  cursor: pointer;\n}\n\n.date {\n  font-size: var(--font-size-large);\n  margin: 0;\n}\n\n.information-container {\n  color: blue;\n  height: calc(100vh - 200px);\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n\n.information-card {\n  border-radius: 10px;\n  height: 500px;\n  width: 700px;\n  background-position: center;\n}\n\n.city-title {\n  margin: 0;\n  text-align: center;\n  background-color: rgba(143, 188, 143, 0.6);\n  padding: 1rem 0;\n  border-radius: 10px 10px 0 0;\n  height: 13%;\n}\n\n.card-inside-flexer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: var(--font-size-large);\n  height: 87%;\n}\n\n.informations-blocks {\n  display: flex;\n  height: 60%;\n  flex-direction: column;\n  padding: 1rem;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.informations-blocks-two {\n  height: 40%;\n  padding: 0.2rem;\n  display: flex;\n  gap: 1rem;\n  width: 200px;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.informations {\n  border-block-end: 5px solid;\n  background-color: rgba(143, 188, 143, 0.6);\n  margin: 0;\n  padding: 0.2rem;\n  border-radius: 5px;\n}\n\n.indicators {\n  height: 40%;\n  background-color: rgba(143, 188, 143, 0.6);\n  border-radius: 40%;\n}\n\n.flex-footer {\n  font-size: var(--font-size-large);\n  background-color: darkseagreen;\n  display: flex;\n  color: blue;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  height: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/sanitize.css/assets.css":
/*!**********************************************!*\
  !*** ./node_modules/sanitize.css/assets.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./assets.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/assets.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_assets_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/forms.css":
/*!*********************************************!*\
  !*** ./node_modules/sanitize.css/forms.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/reduce-motion.css":
/*!*****************************************************!*\
  !*** ./node_modules/sanitize.css/reduce-motion.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./reduce-motion.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/reduce-motion.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_reduce_motion_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/sanitize.css":
/*!************************************************!*\
  !*** ./node_modules/sanitize.css/sanitize.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./sanitize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/sanitize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/system-ui.css":
/*!*************************************************!*\
  !*** ./node_modules/sanitize.css/system-ui.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./system-ui.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/system-ui.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_system_ui_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/typography.css":
/*!**************************************************!*\
  !*** ./node_modules/sanitize.css/typography.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./typography.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/typography.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/sanitize.css/ui-monospace.css":
/*!****************************************************!*\
  !*** ./node_modules/sanitize.css/ui-monospace.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./ui-monospace.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sanitize.css/ui-monospace.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_ui_monospace_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data-manipulation.js":
/*!**********************************!*\
  !*** ./src/data-manipulation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetcher": () => (/* binding */ fetcher),
/* harmony export */   "getCityData": () => (/* binding */ getCityData),
/* harmony export */   "processCityData": () => (/* binding */ processCityData),
/* harmony export */   "urls": () => (/* binding */ urls)
/* harmony export */ });
const fetcher = (url) => fetch(url).then((response) => response.json());

const urls = [
  `https://api.giphy.com/v1/gifs/6036p0cTnjUrNFpAlr?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`,
];

const processCityData = (rawCityWeatherData) => {
  const processedCityWeatherData = {};
  if (rawCityWeatherData === null) {
    processedCityWeatherData.city = `Couldn't find that city in our database`;
    processedCityWeatherData.temperature = `No data`;
    processedCityWeatherData.weather = `No data`;
    processedCityWeatherData.dayTemp = `No data`;
    processedCityWeatherData.nightTemp = `No data`;
    processedCityWeatherData.humidity = `No data`;
    processedCityWeatherData.wind = `No data`;
  } else {
    processedCityWeatherData.city = rawCityWeatherData.name;
    processedCityWeatherData.temperature = `${rawCityWeatherData.main.temp} K`;
    processedCityWeatherData.weather = rawCityWeatherData.weather[0].main;
    processedCityWeatherData.dayTemp = `Day ${rawCityWeatherData.main.temp_max} K`;
    processedCityWeatherData.nightTemp = `Night ${rawCityWeatherData.main.temp_min} K`;
    processedCityWeatherData.humidity = `${rawCityWeatherData.main.humidity} %`;
    processedCityWeatherData.wind = `${rawCityWeatherData.wind.speed} m/s`;
  }
  return processedCityWeatherData;
};

const getCityData = (url) =>
  fetcher(url)
    .then((cityNameData) => {
      urls[2] = `https://api.openweathermap.org/data/2.5/weather?lat=${cityNameData["0"].lat}&lon=${cityNameData["0"].lon}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      return fetcher(urls[2]);
    })
    .catch((error) => {
      console.log(error);
      return null;
    });


/***/ }),

/***/ "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%274%27%3E%3Cpath d=%27M4 0h6L7 4%27/%3E%3C/svg%3E";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_manipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-manipulation */ "./src/data-manipulation.js");
/* harmony import */ var sanitize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sanitize.css */ "./node_modules/sanitize.css/sanitize.css");
/* harmony import */ var sanitize_css_forms_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sanitize.css/forms.css */ "./node_modules/sanitize.css/forms.css");
/* harmony import */ var sanitize_css_assets_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sanitize.css/assets.css */ "./node_modules/sanitize.css/assets.css");
/* harmony import */ var sanitize_css_typography_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sanitize.css/typography.css */ "./node_modules/sanitize.css/typography.css");
/* harmony import */ var sanitize_css_reduce_motion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sanitize.css/reduce-motion.css */ "./node_modules/sanitize.css/reduce-motion.css");
/* harmony import */ var sanitize_css_system_ui_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sanitize.css/system-ui.css */ "./node_modules/sanitize.css/system-ui.css");
/* harmony import */ var sanitize_css_ui_monospace_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sanitize.css/ui-monospace.css */ "./node_modules/sanitize.css/ui-monospace.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.css */ "./src/index.css");










const domPositions = (() => {
  const input = document.querySelector("#client-input");
  const searchButton = document.querySelector(".search-button");
  const header = document.querySelector(".header-container");
  const footer = document.querySelector("footer");
  const informationContainer = document.querySelector(".information-container");
  const informationCard = document.querySelector(".information-card");
  const cityTitle = document.querySelector(".city-title");
  const temperature = document.querySelector(".temperature");
  const dayTemperature = document.querySelector(".day-temperature");
  const nightTemperature = document.querySelector(".night-temperature");
  const weatherDescriptor = document.querySelector(".weather-descriptor");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const date = document.querySelector(".date");

  return {
    input,
    searchButton,
    header,
    footer,
    informationContainer,
    informationCard,
    cityTitle,
    temperature,
    dayTemperature,
    nightTemperature,
    weatherDescriptor,
    humidity,
    wind,
    date,
  };
})();

const iconChanger = (url) => {
  if (
    url ===
    `https://api.giphy.com/v1/gifs/8L0Pky6C83SzkzU55a?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`
  ) {
    domPositions.informationCard.style.backgroundSize = "70%";
  } else {
    domPositions.informationCard.style.backgroundSize = "cover";
  }
  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetcher)(url).then((data) => {
    domPositions.informationCard.style.backgroundImage = `url(${data.data.images.downsized.url})`;
  });
};

const informationsChanger = (processedCityWeatherData) => {
  domPositions.cityTitle.textContent = processedCityWeatherData.city;
  domPositions.temperature.textContent = processedCityWeatherData.temperature;
  domPositions.weatherDescriptor.textContent = processedCityWeatherData.weather;
  domPositions.dayTemperature.textContent = processedCityWeatherData.dayTemp;
  domPositions.nightTemperature.textContent =
    processedCityWeatherData.nightTemp;
  domPositions.humidity.textContent = processedCityWeatherData.humidity;
  domPositions.wind.textContent = processedCityWeatherData.wind;

  return processedCityWeatherData.weather;
};

const colorChanger = (color1, color2, color3) => {
  domPositions.header.style.backgroundColor = `${color1}`;
  domPositions.informationContainer.style.backgroundColor = `${color2}`;
  domPositions.footer.style.backgroundColor = `${color3}`;
};

const moodSelector = (processedCityWeatherDescription) => {
  const weatherPersona = [
    {
      description: "No data",
      id: "8L0Pky6C83SzkzU55a",
      color1: "darkseagreen",
      color2: "white",
      color3: "darkseagreen",
    },
    {
      description: "Clear",
      id: "loUqCMSfXHcsVb3cUZ",
      color1: "darkseagreen",
      color2: "gold",
      color3: "darkseagreen",
    },
    {
      description: "Clouds",
      id: "c31WXGK1jLQBy",
      color1: "darkseagreen",
      color2: "white",
      color3: "darkseagreen",
    },
    {
      description: "Drizzle",
      id: "3oEdvbelTmMXOQ9VDO",
      color1: "#e4e8ff",
      color2: "#3c3cff",
      color3: "#e4e8ff",
    },
    {
      description: "Rain",
      id: "t7Qb8655Z1VfBGr5XB",
      color1: "#e4e8ff",
      color2: "#3c3cff",
      color3: "#e4e8ff",
    },
    {
      description: "Thunderstorm",
      id: "3osxYzIQRqN4DOEddC",
      color1: "#e6eaef",
      color2: "midnightblue",
      color3: "#e6eaef",
    },
    {
      description: "Snow",
      id: "12wteMTXxjLaVO",
      color1: "aliceblue",
      color2: "lightblue",
      color3: "aliceblue",
    },
    {
      description: "Mist",
      id: "sZmv85pZ8NG60HU9QK",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Smoke",
      id: "r2OMuTCFo0rv2rgAL5",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Haze",
      id: "dgeIH5RPynA6Q",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Dust",
      id: "tqtZDj5BqC0CY",
      color1: "#eef1b9",
      color2: "#eef1b9",
      color3: "#eef1b9",
    },
    {
      description: "Fog",
      id: "l2Je9dUI5LpzfHGTe",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Sand",
      id: "BXPlMrO9cyYTK",
      color1: "#eef1b9",
      color2: "#eef1b9",
      color3: "#eef1b9",
    },
    {
      description: "Ash",
      id: "r5gHt2TCIiHK0",
      color1: "#e7f0f7",
      color2: "#e7f0f7",
      color3: "#e7f0f7",
    },
    {
      description: "Squall",
      id: "HmTLatwLWpTQk",
      color1: "e7f0f7",
      color2: "e7f0f7",
      color3: "e7f0f7",
    },
    {
      description: "Tornado",
      id: "MXvDhlmD0eB5qNvvjZ",
      color1: "e7f0f7",
      color2: "e7f0f7",
      color3: "e7f0f7",
    },
  ];
  const weatherLogo =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].id;
  _data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[3] = `https://api.giphy.com/v1/gifs/${weatherLogo}?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`;
  const weatherColor1 =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].color1;
  const weatherColor2 =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].color2;
  const weatherColor3 =
    weatherPersona[
      weatherPersona.findIndex(
        (element) => element.description === processedCityWeatherDescription
      )
    ].color3;

  iconChanger(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[3]);
  colorChanger(weatherColor1, weatherColor2, weatherColor3);
};

const pageUpdater = (url) => {
  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.getCityData)(url)
    .then((rawCityWeatherData) => (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.processCityData)(rawCityWeatherData))
    .then((processedCityWeatherData) =>
      informationsChanger(processedCityWeatherData)
    )
    .then((processedCityWeatherDataDescription) =>
      moodSelector(processedCityWeatherDataDescription)
    );
};

const userDemand = (e) => {
  if (e.key === "Enter" || e.type === "click") {
    if (domPositions.input.value !== "") {
      iconChanger(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[0]);
      _data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1] = `https://api.openweathermap.org/geo/1.0/direct?q=${domPositions.input.value}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      pageUpdater(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1]);
    }
  }
};

const dateToday = () => {
  domPositions.date.textContent = new Date().toDateString();
};

const EventAdder = () => {
  domPositions.input.addEventListener("keyup", (e) => userDemand(e));
  domPositions.searchButton.addEventListener("click", (e) => userDemand(e));
  window.addEventListener("load", () => {
    dateToday();
    iconChanger(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[0]);
    _data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1] = `https://api.openweathermap.org/geo/1.0/direct?q=Rabat&appid=03923b23af6d02daed9f1c90b95acfc8`;
    pageUpdater(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1]);
  });
};

EventAdder();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBTyxvQ0FBb0MsWUFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyx1REFBTztBQUNyQjtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBVztBQUNiLGtDQUFrQyxtRUFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQU87QUFDekIsTUFBTSx1REFBTyxzREFBc0QseUJBQXlCO0FBQzVGLGtCQUFrQix1REFBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQU87QUFDdkIsSUFBSSx1REFBTztBQUNYLGdCQUFnQix1REFBTztBQUN2QixHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvYXNzZXRzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvZm9ybXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9yZWR1Y2UtbW90aW9uLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc2FuaXRpemUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdWktbW9ub3NwYWNlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9hc3NldHMuY3NzP2ZkZGQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Zvcm1zLmNzcz81MTM0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9yZWR1Y2UtbW90aW9uLmNzcz85YjFiIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zYW5pdGl6ZS5jc3M/YmEwZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3Mvc3lzdGVtLXVpLmNzcz9lZjI5Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy90eXBvZ3JhcGh5LmNzcz9hMjBlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy91aS1tb25vc3BhY2UuY3NzPzY4YTIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLW1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBSZXN0cmljdCBzaXppbmcgdG8gdGhlIHBhZ2Ugd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGlmcmFtZSwgaW1nLCBpbnB1dCwgdmlkZW8sIHNlbGVjdCwgdGV4dGFyZWEpIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9hc3NldHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFOztBQUVGO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogUmVzdHJpY3Qgc2l6aW5nIHRvIHRoZSBwYWdlIHdpZHRoIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShpZnJhbWUsIGltZywgaW5wdXQsIHZpZGVvLCBzZWxlY3QsIHRleHRhcmVhKSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzE2JTI3IGhlaWdodD0lMjc0JTI3JTNFJTNDcGF0aCBkPSUyN000IDBoNkw3IDQlMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIHR5cG9ncmFwaHkgaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICBib3JkZXI6IDFweCBzb2xpZCBXaW5kb3dGcmFtZTsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAyICovXFxuICBwYWRkaW5nOiAwLjI1ZW0gMC4zNzVlbTsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGluY29uc2lzdGVudCBhcHBlYXJhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShzZWxlY3QpIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCByaWdodCBjZW50ZXIgLyAxZW07XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBzaG93IHRoZSBhcnJvdyBmb3IgbXVsdGlwbGUgY2hvaWNlIHNlbGVjdHNcXG4gKi9cXG5cXG46d2hlcmUoc2VsZWN0W211bHRpcGxlXSkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgYW5kIHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFt0eXBlPVxcXCJjb2xvclxcXCIgaV0sIFt0eXBlPVxcXCJyYW5nZVxcXCIgaV0pIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvZm9ybXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxjQUFjLEVBQUUsTUFBTTtFQUN0QixhQUFhLEVBQUUsTUFBTTtFQUNyQix1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLHVCQUF1QixFQUFFLE1BQU07QUFDakM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsZ0ZBQXVMO0VBQ3ZMLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIHR5cG9ncmFwaHkgaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAxICovXFxuICBib3JkZXI6IDFweCBzb2xpZCBXaW5kb3dGcmFtZTsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAyICovXFxuICBwYWRkaW5nOiAwLjI1ZW0gMC4zNzVlbTsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGluY29uc2lzdGVudCBhcHBlYXJhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShzZWxlY3QpIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PSc0JyUzRSUzQ3BhdGggZD0nTTQgMGg2TDcgNCcvJTNFJTNDL3N2ZyUzRVxcXCIpIG5vLXJlcGVhdCByaWdodCBjZW50ZXIgLyAxZW07XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5cXG4vKipcXG4gKiBEb24ndCBzaG93IHRoZSBhcnJvdyBmb3IgbXVsdGlwbGUgY2hvaWNlIHNlbGVjdHNcXG4gKi9cXG5cXG46d2hlcmUoc2VsZWN0W211bHRpcGxlXSkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgYW5kIHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFt0eXBlPVxcXCJjb2xvclxcXCIgaV0sIFt0eXBlPVxcXCJyYW5nZVxcXCIgaV0pIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiAqIDEuIFJlbW92ZSBhbmltYXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgZml4ZWQgYmFja2dyb3VuZCBhdHRhY2htZW50cyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogMy4gUmVtb3ZlIHRpbWVkIHNjcm9sbGluZyBiZWhhdmlvcnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFJlbW92ZSB0cmFuc2l0aW9ucyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICosXFxuICA6OmJlZm9yZSxcXG4gIDo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xbXMgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWwgIWltcG9ydGFudDsgLyogMiAqL1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDsgLyogMyAqL1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50OyAvKiA0ICovXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9yZWR1Y2UtbW90aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7RUFLRTs7QUFFRjtFQUNFOzs7SUFHRSxnQ0FBZ0MsRUFBRSxNQUFNO0lBQ3hDLGtDQUFrQyxFQUFFLE1BQU07SUFDMUMsdUNBQXVDLEVBQUUsTUFBTTtJQUMvQyx5Q0FBeUMsRUFBRSxNQUFNO0lBQ2pELGdDQUFnQyxFQUFFLE1BQU07SUFDeEMsK0JBQStCLEVBQUUsTUFBTTtJQUN2QyxrQ0FBa0MsRUFBRSxNQUFNO0VBQzVDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gKiAxLiBSZW1vdmUgYW5pbWF0aW9ucyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogMi4gUmVtb3ZlIGZpeGVkIGJhY2tncm91bmQgYXR0YWNobWVudHMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDMuIFJlbW92ZSB0aW1lZCBzY3JvbGxpbmcgYmVoYXZpb3JzIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiA0LiBSZW1vdmUgdHJhbnNpdGlvbnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAqLFxcbiAgOjpiZWZvcmUsXFxuICA6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMW1zICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxbXMgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBpbml0aWFsICFpbXBvcnRhbnQ7IC8qIDIgKi9cXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7IC8qIDMgKi9cXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDsgLyogNCAqL1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcyAhaW1wb3J0YW50OyAvKiA0ICovXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBEb2N1bWVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIGJvcmRlciBib3ggc2l6aW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEJhY2tncm91bmRzIGRvIG5vdCByZXBlYXQgYnkgZGVmYXVsdCAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0ZXh0IGRlY29yYXRpb24gaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIHZlcnRpY2FsIGFsaWdubWVudCBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSBkZWZhdWx0IGN1cnNvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDaGFuZ2UgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDMuIEJyZWFrcyB3b3JkcyB0byBwcmV2ZW50IG92ZXJmbG93IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFVzZSBhIDQtc3BhY2UgdGFiIHdpZHRoIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDUuIFJlbW92ZSB0aGUgZ3JleSBoaWdobGlnaHQgb24gbGlua3MgaW4gaU9TIChvcGluaW9uYXRlZCkuXFxuICogNi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuOndoZXJlKDpyb290KSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIDMgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiA0ICovXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA1ICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDYgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShib2R5KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBFZGdlLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBuZXN0ZWQgbGlzdHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkbCwgb2wsIHVsKSA6d2hlcmUoZGwsIG9sLCB1bCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShocikge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGxpc3Qgc3R5bGUgb24gbmF2aWdhdGlvbiBsaXN0cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUobmF2KSA6d2hlcmUob2wsIHVsKSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IFZvaWNlT3ZlciBmcm9tIGlnbm9yaW5nIGxpc3Qgc2VtYW50aWNzIGluIFNhZmFyaSAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYgbGkpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDBCXFxcIjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBQcmV2ZW50IG92ZXJmbG93IG9mIHRoZSBjb250YWluZXIgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHByZSkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIDMgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShhYmJyW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGIsIHN0cm9uZykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgYWxpZ25tZW50IG9uIG1lZGlhIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShhdWRpbywgY2FudmFzLCBpZnJhbWUsIGltZywgc3ZnLCB2aWRlbykge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaWZyYW1lcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lKSB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgZmlsbCBjb2xvciB0byBtYXRjaCB0aGUgdGV4dCBjb2xvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoc3ZnOm5vdChbZmlsbF0pKSB7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29sbGFwc2UgYm9yZGVyIHNwYWNpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAzLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGFibGUpIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDMgKi9cXG59XFxuXFxuLyogRm9ybXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIGNvbnRyb2xzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGZpZWxkc2V0KSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHByb2dyZXNzKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShbdHlwZT1cXFwic2VhcmNoXFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgdGV4dCBzdHlsZSBvZiBwbGFjZWhvbGRlcnMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIHVwbG9hZCBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzdHlsZXMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuOndoZXJlKGRpYWxvZzpub3QoW29wZW5dKSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRldGFpbHMgPiBzdW1tYXJ5OmZpcnN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogQWNjZXNzaWJpbGl0eVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gYnVzeSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtYnVzeT1cXFwidHJ1ZVxcXCIgaV0pIHtcXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gY29udHJvbCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtY29udHJvbHNdKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gZGlzYWJsZWQsIG5vdC1lZGl0YWJsZSwgb3Igb3RoZXJ3aXNlXFxuICogaW5vcGVyYWJsZSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiIGldLCBbZGlzYWJsZWRdKSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgZGlzcGxheSBvbiB2aXN1YWxseSBoaWRkZW4gYWNjZXNzaWJsZSBlbGVtZW50c1xcbiAqIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dKSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG46d2hlcmUoW2FyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgaV1baGlkZGVuXTpub3QoOmZvY3VzKSkge1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zYW5pdGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7OztFQUdFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsNEJBQTRCLEVBQUUsTUFBTTtBQUN0Qzs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsd0JBQXdCLEVBQUUsTUFBTTtFQUNoQyx1QkFBdUIsRUFBRSxNQUFNO0FBQ2pDOztBQUVBOzs7Ozs7O0VBT0U7O0FBRUY7RUFDRSxlQUFlLEVBQUUsTUFBTTtFQUN2QixnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLHlCQUF5QixFQUFFLE1BQU07RUFDakMsZ0JBQWdCLEVBQUUsTUFBTTtFQUN4QixXQUFXLEVBQUUsTUFBTTtFQUNuQix3Q0FBd0MsRUFBRSxNQUFNO0VBQ2hELDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYyxFQUFFLE1BQU07RUFDdEIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTs7OztFQUlFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsMEJBQTBCO0VBQzFCLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7Ozs7RUFJRTs7QUFFRjtFQUNFLHlCQUF5QixFQUFFLE1BQU07RUFDakMscUJBQXFCLEVBQUUsTUFBTTtFQUM3QixjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGdCQUFnQixFQUFFLE1BQU07QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRG9jdW1lbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCBib3JkZXIgYm94IHNpemluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBCYWNrZ3JvdW5kcyBkbyBub3QgcmVwZWF0IGJ5IGRlZmF1bHQgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGV4dCBkZWNvcmF0aW9uIGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEFkZCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgZGVmYXVsdCBjdXJzb3IgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQ2hhbmdlIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAzLiBCcmVha3Mgd29yZHMgdG8gcHJldmVudCBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiA0LiBVc2UgYSA0LXNwYWNlIHRhYiB3aWR0aCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiA1LiBSZW1vdmUgdGhlIGdyZXkgaGlnaGxpZ2h0IG9uIGxpbmtzIGluIGlPUyAob3BpbmlvbmF0ZWQpLlxcbiAqIDYuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbjp3aGVyZSg6cm9vdCkge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAyICovXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkOyAvKiAzICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiA0ICovXFxuICB0YWItc2l6ZTogNDsgLyogNCAqL1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiA2ICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYm9keSkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRWRnZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoaDEpIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gbmVzdGVkIGxpc3RzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGwsIG9sLCB1bCkgOndoZXJlKGRsLCBvbCwgdWwpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUoaHIpIHtcXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBsaXN0IHN0eWxlIG9uIG5hdmlnYXRpb24gbGlzdHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKG5hdikgOndoZXJlKG9sLCB1bCkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBWb2ljZU92ZXIgZnJvbSBpZ25vcmluZyBsaXN0IHNlbWFudGljcyBpbiBTYWZhcmkgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUobmF2IGxpKTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjAwQlxcXCI7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMy4gUHJldmVudCBvdmVyZmxvdyBvZiB0aGUgY29udGFpbmVyIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShwcmUpIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG4gIG92ZXJmbG93OiBhdXRvOyAvKiAzICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYWJiclt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShiLCBzdHJvbmcpIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShjb2RlLCBrYmQsIHNhbXApIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKHNtYWxsKSB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGFsaWdubWVudCBvbiBtZWRpYSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYXVkaW8sIGNhbnZhcywgaWZyYW1lLCBpbWcsIHN2ZywgdmlkZW8pIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGlmcmFtZXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGlmcmFtZSkge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGZpbGwgY29sb3IgdG8gbWF0Y2ggdGhlIHRleHQgY29sb3IgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHN2Zzpub3QoW2ZpbGxdKSkge1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKiBUYWJ1bGFyIGRhdGFcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvbGxhcHNlIGJvcmRlciBzcGFjaW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMy4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKHRhYmxlKSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHRleHQtaW5kZW50OiAwOyAvKiAzICovXFxufVxcblxcbi8qIEZvcm1zXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBjb250cm9scyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBbdHlwZT1cXFwiYnV0dG9uXFxcIiBpXSwgW3R5cGU9XFxcInJlc2V0XFxcIiBpXSwgW3R5cGU9XFxcInN1Ym1pdFxcXCIgaV0pIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGluY29uc2lzdGVudCBhcHBlYXJhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShmaWVsZHNldCkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShwcm9ncmVzcykge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICogMy4gQ2hhbmdlIHRoZSByZXNpemUgZGlyZWN0aW9uIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZSh0ZXh0YXJlYSkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICByZXNpemU6IHZlcnRpY2FsOyAvKiAzICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcInNlYXJjaFxcXCIgaV0pIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHRleHQgc3R5bGUgb2YgcGxhY2Vob2xkZXJzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBvcGFjaXR5OiAwLjU0O1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSB1cGxvYWQgYnV0dG9ucyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3R5bGVzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGlhbG9nKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogc29saWQ7XFxuICBjb2xvcjogYmxhY2s7XFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbjp3aGVyZShkaWFsb2c6bm90KFtvcGVuXSkpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkZXRhaWxzID4gc3VtbWFyeTpmaXJzdC1vZi10eXBlKSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIEFjY2Vzc2liaWxpdHlcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGJ1c3kgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWJ1c3k9XFxcInRydWVcXFwiIGldKSB7XFxuICBjdXJzb3I6IHByb2dyZXNzO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGNvbnRyb2wgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWNvbnRyb2xzXSkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGRpc2FibGVkLCBub3QtZWRpdGFibGUsIG9yIG90aGVyd2lzZVxcbiAqIGlub3BlcmFibGUgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWRpc2FibGVkPVxcXCJ0cnVlXFxcIiBpXSwgW2Rpc2FibGVkXSkge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGRpc3BsYXkgb24gdmlzdWFsbHkgaGlkZGVuIGFjY2Vzc2libGUgZWxlbWVudHNcXG4gKiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgaV1baGlkZGVuXSkge1xcbiAgZGlzcGxheTogaW5pdGlhbDtcXG59XFxuXFxuOndoZXJlKFthcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiIGldW2hpZGRlbl06bm90KDpmb2N1cykpIHtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSVxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1XFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tUmVndWxhclxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZVxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1JdGFsaWNcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1Cb2xkXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tQm9sZFxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1Cb2xkXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRJdGFsaWNcXFwiKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFOztBQUVGO0VBQ0Usc0JBQXNCO0VBQ3RCLHFIQUFxSDtBQUN2SDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIseUlBQXlJO0FBQzNJOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpSUFBaUk7QUFDbkk7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwSkFBMEo7QUFDNUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHN5c3RlbS11aSBmb250LWZhbWlseSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUlcXFwiKSwgbG9jYWwoXFxcIlVidW50dVxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLVJlZ3VsYXJcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWVcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtSXRhbGljXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBCb2xkXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtQm9sZFxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUJvbGRcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtQm9sZFxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgQm9sZCBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1Cb2xkSXRhbGljXFxcIik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICBzeXN0ZW0tdWksXFxuICAgIC8qIG1hY09TIDEwLjExLTEwLjEyICovIC1hcHBsZS1zeXN0ZW0sXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvXFxcIixcXG4gICAgLyogVWJ1bnR1IDEwLjEwKyAqLyBcXFwiVWJ1bnR1XFxcIixcXG4gICAgLyogR25vbWUgMysgKi8gXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNSsgKi8gXFxcIk5vdG8gU2Fuc1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIHNhbnMtc2VyaWYsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgbW9ub3NwYWNlIHVzZXIgaW50ZXJmYWNlIGZvbnQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHVpLW1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgMTAuMTArICovIFxcXCJNZW5sb1xcXCIsXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIkNvbnNvbGFzXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvIE1vbm9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHUgTW9ub3NwYWNlXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBNb25vXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA0KyAqLyBcXFwiT3h5Z2VuIE1vbm9cXFwiLFxcbiAgICAvKiBMaW51eC9PcGVuT2ZmaWNlIGZhbGxiYWNrICovIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLFxcbiAgICAvKiBmYWxsYmFjayAqLyBtb25vc3BhY2UsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFOztBQUVGO0VBQ0U7Ozs7Ozs7Ozs7Ozt3Q0FZc0M7QUFDeEM7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRTs7Ozs7Ozs7Ozs7Ozt3Q0Fhc0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogVXNlIHRoZSBkZWZhdWx0IHVzZXIgaW50ZXJmYWNlIGZvbnQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTpcXG4gICAgc3lzdGVtLXVpLFxcbiAgICAvKiBtYWNPUyAxMC4xMS0xMC4xMiAqLyAtYXBwbGUtc3lzdGVtLFxcbiAgICAvKiBXaW5kb3dzIDYrICovIFxcXCJTZWdvZSBVSVxcXCIsXFxuICAgIC8qIEFuZHJvaWQgNCsgKi8gXFxcIlJvYm90b1xcXCIsXFxuICAgIC8qIFVidW50dSAxMC4xMCsgKi8gXFxcIlVidW50dVxcXCIsXFxuICAgIC8qIEdub21lIDMrICovIFxcXCJDYW50YXJlbGxcXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDUrICovIFxcXCJOb3RvIFNhbnNcXFwiLFxcbiAgICAvKiBmYWxsYmFjayAqLyBzYW5zLXNlcmlmLFxcbiAgICAvKiBtYWNPUyBlbW9qaSAqLyBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxuICAgIC8qIExpbnV4IGVtb2ppICovIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuXFxuLyoqXFxuICogVXNlIHRoZSBkZWZhdWx0IG1vbm9zcGFjZSB1c2VyIGludGVyZmFjZSBmb250IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICB1aS1tb25vc3BhY2UsXFxuICAgIC8qIG1hY09TIDEwLjEwKyAqLyBcXFwiTWVubG9cXFwiLFxcbiAgICAvKiBXaW5kb3dzIDYrICovIFxcXCJDb25zb2xhc1xcXCIsXFxuICAgIC8qIEFuZHJvaWQgNCsgKi8gXFxcIlJvYm90byBNb25vXFxcIixcXG4gICAgLyogVWJ1bnR1IDEwLjEwKyAqLyBcXFwiVWJ1bnR1IE1vbm9zcGFjZVxcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNSsgKi8gXFxcIk5vdG8gTW9ub1xcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNCsgKi8gXFxcIk94eWdlbiBNb25vXFxcIixcXG4gICAgLyogTGludXgvT3Blbk9mZmljZSBmYWxsYmFjayAqLyBcXFwiTGliZXJhdGlvbiBNb25vXFxcIixcXG4gICAgLyogZmFsbGJhY2sgKi8gbW9ub3NwYWNlLFxcbiAgICAvKiBtYWNPUyBlbW9qaSAqLyBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsXFxuICAgIC8qIExpbnV4IGVtb2ppICovIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzeXN0ZW0tdWkgZm9udC1mYW1pbHkgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLVJlZ3VsYXJcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm9cXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm9cXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vXFxcIiksIGxvY2FsKFxcXCJNZW5sb1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLVJlZ3VsYXJJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJNZW5sby1JdGFsaWNcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLUJvbGRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gQm9sZFxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1Cb2xkXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1Cb2xkXFxcIiksIGxvY2FsKFxcXCJNZW5sby1Cb2xkXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEJvbGQgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUJvbGRJdGFsaWNcXFwiKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy91aS1tb25vc3BhY2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLHFJQUFxSTtBQUN2STs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsdUtBQXVLO0FBQ3pLOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixzSkFBc0o7QUFDeEo7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxTEFBcUw7QUFDdkxcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHN5c3RlbS11aSBmb250LWZhbWlseSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhclxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ub1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9ub1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm9cXFwiKSwgbG9jYWwoXFxcIk1lbmxvXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhckl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gQm9sZCBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgLyogKDYyLjUvMTAwKSAqIDE2cHggPSAxMHB4ICovXFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLyogMTRweCAqL1xcbiAgLS1mb250LXNpemUtc21hbGw6IDEuNHJlbTtcXG4gIC8qIDE2cHggKi9cXG4gIC0tZm9udC1zaXplLWRlZmF1bHQ6IDEuNnJlbTtcXG4gIC8qIDI0cHggKi9cXG4gIC0tZm9udC1zaXplLWxhcmdlOiAyLjRyZW07XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmZsZXgtaGVhZGVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxufVxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5sb2dvLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRkZW4tbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbiNjbGllbnQtaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuI2NsaWVudC1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgYmx1ZTtcXG59XFxuXFxuI2NsaWVudC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjVweDtcXG4gIHJpZ2h0OiAyNXB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uY2l0eS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTg4LCAxNDMsIDAuNik7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgaGVpZ2h0OiAxMyU7XFxufVxcblxcbi5jYXJkLWluc2lkZS1mbGV4ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxuICBoZWlnaHQ6IDg3JTtcXG59XFxuXFxuLmluZm9ybWF0aW9ucy1ibG9ja3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5mb3JtYXRpb25zLWJsb2Nrcy10d28ge1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5pbmZvcm1hdGlvbnMge1xcbiAgYm9yZGVyLWJsb2NrLWVuZDogNXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE4OCwgMTQzLCAwLjYpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5kaWNhdG9ycyB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxODgsIDE0MywgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwJTtcXG59XFxuXFxuLmZsZXgtZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQ0FBMEM7RUFDMUMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgLyogKDYyLjUvMTAwKSAqIDE2cHggPSAxMHB4ICovXFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLyogMTRweCAqL1xcbiAgLS1mb250LXNpemUtc21hbGw6IDEuNHJlbTtcXG4gIC8qIDE2cHggKi9cXG4gIC0tZm9udC1zaXplLWRlZmF1bHQ6IDEuNnJlbTtcXG4gIC8qIDI0cHggKi9cXG4gIC0tZm9udC1zaXplLWxhcmdlOiAyLjRyZW07XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtZGVmYXVsdCk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmZsZXgtaGVhZGVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxufVxcbi5sb2dvIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi5sb2dvLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5oaWRkZW4tbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbiNjbGllbnQtaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuI2NsaWVudC1pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgYmx1ZTtcXG59XFxuXFxuI2NsaWVudC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjVweDtcXG4gIHJpZ2h0OiAyNXB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWNvbnRhaW5lciB7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvcm1hdGlvbi1jYXJkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgd2lkdGg6IDcwMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uY2l0eS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTg4LCAxNDMsIDAuNik7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbiAgaGVpZ2h0OiAxMyU7XFxufVxcblxcbi5jYXJkLWluc2lkZS1mbGV4ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sYXJnZSk7XFxuICBoZWlnaHQ6IDg3JTtcXG59XFxuXFxuLmluZm9ybWF0aW9ucy1ibG9ja3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogNjAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5mb3JtYXRpb25zLWJsb2Nrcy10d28ge1xcbiAgaGVpZ2h0OiA0MCU7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5pbmZvcm1hdGlvbnMge1xcbiAgYm9yZGVyLWJsb2NrLWVuZDogNXB4IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE4OCwgMTQzLCAwLjYpO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uaW5kaWNhdG9ycyB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxODgsIDE0MywgMC42KTtcXG4gIGJvcmRlci1yYWRpdXM6IDQwJTtcXG59XFxuXFxuLmZsZXgtZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzZWFncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fzc2V0cy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3Jtcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWR1Y2UtbW90aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZWR1Y2UtbW90aW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nhbml0aXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zYW5pdGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zeXN0ZW0tdWkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N5c3RlbS11aS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VpLW1vbm9zcGFjZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWktbW9ub3NwYWNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG5cbmV4cG9ydCBjb25zdCB1cmxzID0gW1xuICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvNjAzNnAwY1RualVyTkZwQWxyP2FwaV9rZXk9SU02RVRRM0NsbFVCdXFzU3lRaUlEaWVKbkIyTFhVQ0NgLFxuXTtcblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NDaXR5RGF0YSA9IChyYXdDaXR5V2VhdGhlckRhdGEpID0+IHtcbiAgY29uc3QgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhID0ge307XG4gIGlmIChyYXdDaXR5V2VhdGhlckRhdGEgPT09IG51bGwpIHtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuY2l0eSA9IGBDb3VsZG4ndCBmaW5kIHRoYXQgY2l0eSBpbiBvdXIgZGF0YWJhc2VgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS50ZW1wZXJhdHVyZSA9IGBObyBkYXRhYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEud2VhdGhlciA9IGBObyBkYXRhYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuZGF5VGVtcCA9IGBObyBkYXRhYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEubmlnaHRUZW1wID0gYE5vIGRhdGFgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5odW1pZGl0eSA9IGBObyBkYXRhYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEud2luZCA9IGBObyBkYXRhYDtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuY2l0eSA9IHJhd0NpdHlXZWF0aGVyRGF0YS5uYW1lO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS50ZW1wZXJhdHVyZSA9IGAke3Jhd0NpdHlXZWF0aGVyRGF0YS5tYWluLnRlbXB9IEtgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS53ZWF0aGVyID0gcmF3Q2l0eVdlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuZGF5VGVtcCA9IGBEYXkgJHtyYXdDaXR5V2VhdGhlckRhdGEubWFpbi50ZW1wX21heH0gS2A7XG4gICAgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLm5pZ2h0VGVtcCA9IGBOaWdodCAke3Jhd0NpdHlXZWF0aGVyRGF0YS5tYWluLnRlbXBfbWlufSBLYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuaHVtaWRpdHkgPSBgJHtyYXdDaXR5V2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0gJWA7XG4gICAgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLndpbmQgPSBgJHtyYXdDaXR5V2VhdGhlckRhdGEud2luZC5zcGVlZH0gbS9zYDtcbiAgfVxuICByZXR1cm4gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENpdHlEYXRhID0gKHVybCkgPT5cbiAgZmV0Y2hlcih1cmwpXG4gICAgLnRoZW4oKGNpdHlOYW1lRGF0YSkgPT4ge1xuICAgICAgdXJsc1syXSA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtjaXR5TmFtZURhdGFbXCIwXCJdLmxhdH0mbG9uPSR7Y2l0eU5hbWVEYXRhW1wiMFwiXS5sb259JmFwcGlkPTAzOTIzYjIzYWY2ZDAyZGFlZDlmMWM5MGI5NWFjZmM4YDtcbiAgICAgIHJldHVybiBmZXRjaGVyKHVybHNbMl0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuICBmZXRjaGVyLFxuICB1cmxzLFxuICBwcm9jZXNzQ2l0eURhdGEsXG4gIGdldENpdHlEYXRhLFxufSBmcm9tIFwiLi9kYXRhLW1hbmlwdWxhdGlvblwiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvZm9ybXMuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvYXNzZXRzLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvcmVkdWNlLW1vdGlvbi5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvdWktbW9ub3NwYWNlLmNzc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgZG9tUG9zaXRpb25zID0gKCgpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsaWVudC1pbnB1dFwiKTtcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnV0dG9uXCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1jb250YWluZXJcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG4gIGNvbnN0IGluZm9ybWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvcm1hdGlvbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGluZm9ybWF0aW9uQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb3JtYXRpb24tY2FyZFwiKTtcbiAgY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LXRpdGxlXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGVyYXR1cmVcIik7XG4gIGNvbnN0IGRheVRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktdGVtcGVyYXR1cmVcIik7XG4gIGNvbnN0IG5pZ2h0VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5pZ2h0LXRlbXBlcmF0dXJlXCIpO1xuICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1kZXNjcmlwdG9yXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIik7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBpbnB1dCxcbiAgICBzZWFyY2hCdXR0b24sXG4gICAgaGVhZGVyLFxuICAgIGZvb3RlcixcbiAgICBpbmZvcm1hdGlvbkNvbnRhaW5lcixcbiAgICBpbmZvcm1hdGlvbkNhcmQsXG4gICAgY2l0eVRpdGxlLFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIGRheVRlbXBlcmF0dXJlLFxuICAgIG5pZ2h0VGVtcGVyYXR1cmUsXG4gICAgd2VhdGhlckRlc2NyaXB0b3IsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZCxcbiAgICBkYXRlLFxuICB9O1xufSkoKTtcblxuY29uc3QgaWNvbkNoYW5nZXIgPSAodXJsKSA9PiB7XG4gIGlmIChcbiAgICB1cmwgPT09XG4gICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLzhMMFBreTZDODNTemt6VTU1YT9hcGlfa2V5PUlNNkVUUTNDbGxVQnVxc1N5UWlJRGllSm5CMkxYVUNDYFxuICApIHtcbiAgICBkb21Qb3NpdGlvbnMuaW5mb3JtYXRpb25DYXJkLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCI3MCVcIjtcbiAgfSBlbHNlIHtcbiAgICBkb21Qb3NpdGlvbnMuaW5mb3JtYXRpb25DYXJkLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICB9XG4gIGZldGNoZXIodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZG9tUG9zaXRpb25zLmluZm9ybWF0aW9uQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5kYXRhLmltYWdlcy5kb3duc2l6ZWQudXJsfSlgO1xuICB9KTtcbn07XG5cbmNvbnN0IGluZm9ybWF0aW9uc0NoYW5nZXIgPSAocHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhKSA9PiB7XG4gIGRvbVBvc2l0aW9ucy5jaXR5VGl0bGUudGV4dENvbnRlbnQgPSBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuY2l0eTtcbiAgZG9tUG9zaXRpb25zLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlO1xuICBkb21Qb3NpdGlvbnMud2VhdGhlckRlc2NyaXB0b3IudGV4dENvbnRlbnQgPSBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEud2VhdGhlcjtcbiAgZG9tUG9zaXRpb25zLmRheVRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLmRheVRlbXA7XG4gIGRvbVBvc2l0aW9ucy5uaWdodFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID1cbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEubmlnaHRUZW1wO1xuICBkb21Qb3NpdGlvbnMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuaHVtaWRpdHk7XG4gIGRvbVBvc2l0aW9ucy53aW5kLnRleHRDb250ZW50ID0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLndpbmQ7XG5cbiAgcmV0dXJuIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS53ZWF0aGVyO1xufTtcblxuY29uc3QgY29sb3JDaGFuZ2VyID0gKGNvbG9yMSwgY29sb3IyLCBjb2xvcjMpID0+IHtcbiAgZG9tUG9zaXRpb25zLmhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgJHtjb2xvcjF9YDtcbiAgZG9tUG9zaXRpb25zLmluZm9ybWF0aW9uQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2NvbG9yMn1gO1xuICBkb21Qb3NpdGlvbnMuZm9vdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2NvbG9yM31gO1xufTtcblxuY29uc3QgbW9vZFNlbGVjdG9yID0gKHByb2Nlc3NlZENpdHlXZWF0aGVyRGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3Qgd2VhdGhlclBlcnNvbmEgPSBbXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiTm8gZGF0YVwiLFxuICAgICAgaWQ6IFwiOEwwUGt5NkM4M1N6a3pVNTVhXCIsXG4gICAgICBjb2xvcjE6IFwiZGFya3NlYWdyZWVuXCIsXG4gICAgICBjb2xvcjI6IFwid2hpdGVcIixcbiAgICAgIGNvbG9yMzogXCJkYXJrc2VhZ3JlZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNsZWFyXCIsXG4gICAgICBpZDogXCJsb1VxQ01TZlhIY3NWYjNjVVpcIixcbiAgICAgIGNvbG9yMTogXCJkYXJrc2VhZ3JlZW5cIixcbiAgICAgIGNvbG9yMjogXCJnb2xkXCIsXG4gICAgICBjb2xvcjM6IFwiZGFya3NlYWdyZWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJDbG91ZHNcIixcbiAgICAgIGlkOiBcImMzMVdYR0sxakxRQnlcIixcbiAgICAgIGNvbG9yMTogXCJkYXJrc2VhZ3JlZW5cIixcbiAgICAgIGNvbG9yMjogXCJ3aGl0ZVwiLFxuICAgICAgY29sb3IzOiBcImRhcmtzZWFncmVlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiRHJpenpsZVwiLFxuICAgICAgaWQ6IFwiM29FZHZiZWxUbU1YT1E5VkRPXCIsXG4gICAgICBjb2xvcjE6IFwiI2U0ZThmZlwiLFxuICAgICAgY29sb3IyOiBcIiMzYzNjZmZcIixcbiAgICAgIGNvbG9yMzogXCIjZTRlOGZmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJSYWluXCIsXG4gICAgICBpZDogXCJ0N1FiODY1NVoxVmZCR3I1WEJcIixcbiAgICAgIGNvbG9yMTogXCIjZTRlOGZmXCIsXG4gICAgICBjb2xvcjI6IFwiIzNjM2NmZlwiLFxuICAgICAgY29sb3IzOiBcIiNlNGU4ZmZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRodW5kZXJzdG9ybVwiLFxuICAgICAgaWQ6IFwiM29zeFl6SVFScU40RE9FZGRDXCIsXG4gICAgICBjb2xvcjE6IFwiI2U2ZWFlZlwiLFxuICAgICAgY29sb3IyOiBcIm1pZG5pZ2h0Ymx1ZVwiLFxuICAgICAgY29sb3IzOiBcIiNlNmVhZWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNub3dcIixcbiAgICAgIGlkOiBcIjEyd3RlTVRYeGpMYVZPXCIsXG4gICAgICBjb2xvcjE6IFwiYWxpY2VibHVlXCIsXG4gICAgICBjb2xvcjI6IFwibGlnaHRibHVlXCIsXG4gICAgICBjb2xvcjM6IFwiYWxpY2VibHVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJNaXN0XCIsXG4gICAgICBpZDogXCJzWm12ODVwWjhORzYwSFU5UUtcIixcbiAgICAgIGNvbG9yMTogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjI6IFwiI2U3ZjBmN1wiLFxuICAgICAgY29sb3IzOiBcIiNlN2YwZjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNtb2tlXCIsXG4gICAgICBpZDogXCJyMk9NdVRDRm8wcnYycmdBTDVcIixcbiAgICAgIGNvbG9yMTogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjI6IFwiI2U3ZjBmN1wiLFxuICAgICAgY29sb3IzOiBcIiNlN2YwZjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkhhemVcIixcbiAgICAgIGlkOiBcImRnZUlINVJQeW5BNlFcIixcbiAgICAgIGNvbG9yMTogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjI6IFwiI2U3ZjBmN1wiLFxuICAgICAgY29sb3IzOiBcIiNlN2YwZjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkR1c3RcIixcbiAgICAgIGlkOiBcInRxdFpEajVCcUMwQ1lcIixcbiAgICAgIGNvbG9yMTogXCIjZWVmMWI5XCIsXG4gICAgICBjb2xvcjI6IFwiI2VlZjFiOVwiLFxuICAgICAgY29sb3IzOiBcIiNlZWYxYjlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZvZ1wiLFxuICAgICAgaWQ6IFwibDJKZTlkVUk1THB6ZkhHVGVcIixcbiAgICAgIGNvbG9yMTogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjI6IFwiI2U3ZjBmN1wiLFxuICAgICAgY29sb3IzOiBcIiNlN2YwZjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNhbmRcIixcbiAgICAgIGlkOiBcIkJYUGxNck85Y3lZVEtcIixcbiAgICAgIGNvbG9yMTogXCIjZWVmMWI5XCIsXG4gICAgICBjb2xvcjI6IFwiI2VlZjFiOVwiLFxuICAgICAgY29sb3IzOiBcIiNlZWYxYjlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFzaFwiLFxuICAgICAgaWQ6IFwicjVnSHQyVENJaUhLMFwiLFxuICAgICAgY29sb3IxOiBcIiNlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjM6IFwiI2U3ZjBmN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiU3F1YWxsXCIsXG4gICAgICBpZDogXCJIbVRMYXR3TFdwVFFrXCIsXG4gICAgICBjb2xvcjE6IFwiZTdmMGY3XCIsXG4gICAgICBjb2xvcjI6IFwiZTdmMGY3XCIsXG4gICAgICBjb2xvcjM6IFwiZTdmMGY3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJUb3JuYWRvXCIsXG4gICAgICBpZDogXCJNWHZEaGxtRDBlQjVxTnZ2alpcIixcbiAgICAgIGNvbG9yMTogXCJlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCJlN2YwZjdcIixcbiAgICAgIGNvbG9yMzogXCJlN2YwZjdcIixcbiAgICB9LFxuICBdO1xuICBjb25zdCB3ZWF0aGVyTG9nbyA9XG4gICAgd2VhdGhlclBlcnNvbmFbXG4gICAgICB3ZWF0aGVyUGVyc29uYS5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmRlc2NyaXB0aW9uID09PSBwcm9jZXNzZWRDaXR5V2VhdGhlckRlc2NyaXB0aW9uXG4gICAgICApXG4gICAgXS5pZDtcbiAgdXJsc1szXSA9IGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy8ke3dlYXRoZXJMb2dvfT9hcGlfa2V5PUlNNkVUUTNDbGxVQnVxc1N5UWlJRGllSm5CMkxYVUNDYDtcbiAgY29uc3Qgd2VhdGhlckNvbG9yMSA9XG4gICAgd2VhdGhlclBlcnNvbmFbXG4gICAgICB3ZWF0aGVyUGVyc29uYS5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmRlc2NyaXB0aW9uID09PSBwcm9jZXNzZWRDaXR5V2VhdGhlckRlc2NyaXB0aW9uXG4gICAgICApXG4gICAgXS5jb2xvcjE7XG4gIGNvbnN0IHdlYXRoZXJDb2xvcjIgPVxuICAgIHdlYXRoZXJQZXJzb25hW1xuICAgICAgd2VhdGhlclBlcnNvbmEuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5kZXNjcmlwdGlvbiA9PT0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEZXNjcmlwdGlvblxuICAgICAgKVxuICAgIF0uY29sb3IyO1xuICBjb25zdCB3ZWF0aGVyQ29sb3IzID1cbiAgICB3ZWF0aGVyUGVyc29uYVtcbiAgICAgIHdlYXRoZXJQZXJzb25hLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuZGVzY3JpcHRpb24gPT09IHByb2Nlc3NlZENpdHlXZWF0aGVyRGVzY3JpcHRpb25cbiAgICAgIClcbiAgICBdLmNvbG9yMztcblxuICBpY29uQ2hhbmdlcih1cmxzWzNdKTtcbiAgY29sb3JDaGFuZ2VyKHdlYXRoZXJDb2xvcjEsIHdlYXRoZXJDb2xvcjIsIHdlYXRoZXJDb2xvcjMpO1xufTtcblxuY29uc3QgcGFnZVVwZGF0ZXIgPSAodXJsKSA9PiB7XG4gIGdldENpdHlEYXRhKHVybClcbiAgICAudGhlbigocmF3Q2l0eVdlYXRoZXJEYXRhKSA9PiBwcm9jZXNzQ2l0eURhdGEocmF3Q2l0eVdlYXRoZXJEYXRhKSlcbiAgICAudGhlbigocHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhKSA9PlxuICAgICAgaW5mb3JtYXRpb25zQ2hhbmdlcihwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEpXG4gICAgKVxuICAgIC50aGVuKChwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGFEZXNjcmlwdGlvbikgPT5cbiAgICAgIG1vb2RTZWxlY3Rvcihwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGFEZXNjcmlwdGlvbilcbiAgICApO1xufTtcblxuY29uc3QgdXNlckRlbWFuZCA9IChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUudHlwZSA9PT0gXCJjbGlja1wiKSB7XG4gICAgaWYgKGRvbVBvc2l0aW9ucy5pbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgaWNvbkNoYW5nZXIodXJsc1swXSk7XG4gICAgICB1cmxzWzFdID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7ZG9tUG9zaXRpb25zLmlucHV0LnZhbHVlfSZhcHBpZD0wMzkyM2IyM2FmNmQwMmRhZWQ5ZjFjOTBiOTVhY2ZjOGA7XG4gICAgICBwYWdlVXBkYXRlcih1cmxzWzFdKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUb2RheSA9ICgpID0+IHtcbiAgZG9tUG9zaXRpb25zLmRhdGUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xufTtcblxuY29uc3QgRXZlbnRBZGRlciA9ICgpID0+IHtcbiAgZG9tUG9zaXRpb25zLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4gdXNlckRlbWFuZChlKSk7XG4gIGRvbVBvc2l0aW9ucy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB1c2VyRGVtYW5kKGUpKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBkYXRlVG9kYXkoKTtcbiAgICBpY29uQ2hhbmdlcih1cmxzWzBdKTtcbiAgICB1cmxzWzFdID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPVJhYmF0JmFwcGlkPTAzOTIzYjIzYWY2ZDAyZGFlZDlmMWM5MGI5NWFjZmM4YDtcbiAgICBwYWdlVXBkYXRlcih1cmxzWzFdKTtcbiAgfSk7XG59O1xuXG5FdmVudEFkZGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=