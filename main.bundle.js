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

const iconChanger = (url) => {
  if (url === `https://api.giphy.com/v1/gifs/8L0Pky6C83SzkzU55a?api_key=IM6ETQ3CllUBuqsSyQiIDieJnB2LXUCC`) {
    informationCard.style.backgroundSize = "70%";
  } else {
    informationCard.style.backgroundSize = "cover";
  }
  (0,_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.fetcher)(url).then((data) => {
    informationCard.style.backgroundImage = `url(${data.data.images.downsized.url})`;
  });
};

const informationsChanger = (processedCityWeatherData) => {
  cityTitle.textContent = processedCityWeatherData.city;
  temperature.textContent = processedCityWeatherData.temperature;
  weatherDescriptor.textContent = processedCityWeatherData.weather;
  dayTemperature.textContent = processedCityWeatherData.dayTemp;
  nightTemperature.textContent = processedCityWeatherData.nightTemp;
  humidity.textContent = processedCityWeatherData.humidity;
  wind.textContent = processedCityWeatherData.wind;

  return processedCityWeatherData.weather;
};

const colorChanger = (color1, color2, color3) => {
  header.style.backgroundColor = `${color1}`;
  informationContainer.style.backgroundColor = `${color2}`;
  footer.style.backgroundColor = `${color3}`;
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
    if (input.value !== "") {
      iconChanger(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[0]);
      _data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1] = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value}&appid=03923b23af6d02daed9f1c90b95acfc8`;
      pageUpdater(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1]);
    }
  }
};

input.addEventListener("keyup", (e) => userDemand(e));
searchButton.addEventListener("click", (e) => userDemand(e));

const dateToday = () => {
  date.textContent = new Date().toDateString();
};

window.addEventListener("load", () => {
  dateToday();
  iconChanger(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[0]);
  _data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1] = `http://api.openweathermap.org/geo/1.0/direct?q=Rabat&appid=03923b23af6d02daed9f1c90b95acfc8`;
  pageUpdater(_data_manipulation__WEBPACK_IMPORTED_MODULE_0__.urls[1]);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFPLG9DQUFvQyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVEQUFPO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtEQUFXO0FBQ2Isa0NBQWtDLG1FQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1REFBTztBQUN6QixNQUFNLHVEQUFPLHFEQUFxRCxZQUFZO0FBQzlFLGtCQUFrQix1REFBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsdURBQU87QUFDckIsRUFBRSx1REFBTztBQUNULGNBQWMsdURBQU87QUFDckIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9hc3NldHMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zYW5pdGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy91aS1tb25vc3BhY2UuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3M/ZmRkZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvZm9ybXMuY3NzPzUxMzQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzPzliMWIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzcz9iYTBlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzP2VmMjkiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzP2EyMGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3M/NjhhMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEtbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFJlc3RyaWN0IHNpemluZyB0byB0aGUgcGFnZSB3aWR0aCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lLCBpbWcsIGlucHV0LCB2aWRlbywgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL2Fzc2V0cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBSZXN0cmljdCBzaXppbmcgdG8gdGhlIHBhZ2Ugd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGlmcmFtZSwgaW1nLCBpbnB1dCwgdmlkZW8sIHNlbGVjdCwgdGV4dGFyZWEpIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MTYlMjcgaGVpZ2h0PSUyNzQlMjclM0UlM0NwYXRoIGQ9JTI3TTQgMGg2TDcgNCUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdHlwb2dyYXBoeSBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIFdpbmRvd0ZyYW1lOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjM3NWVtOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlciAvIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qKlxcbiAqIERvbid0IHNob3cgdGhlIGFycm93IGZvciBtdWx0aXBsZSBjaG9pY2Ugc2VsZWN0c1xcbiAqL1xcblxcbjp3aGVyZShzZWxlY3RbbXVsdGlwbGVdKSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJhbmdlXFxcIiBpXSkge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9mb3Jtcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGFBQWEsRUFBRSxNQUFNO0VBQ3JCLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsdUJBQXVCLEVBQUUsTUFBTTtBQUNqQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGdCQUFnQjtFQUNoQixnRkFBdUw7RUFDdkwsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdHlwb2dyYXBoeSBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDEgKi9cXG4gIGJvcmRlcjogMXB4IHNvbGlkIFdpbmRvd0ZyYW1lOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjM3NWVtOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHNlbGVjdCkge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzQnJTNFJTNDcGF0aCBkPSdNNCAwaDZMNyA0Jy8lM0UlM0Mvc3ZnJTNFXFxcIikgbm8tcmVwZWF0IHJpZ2h0IGNlbnRlciAvIDFlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcblxcbi8qKlxcbiAqIERvbid0IHNob3cgdGhlIGFycm93IGZvciBtdWx0aXBsZSBjaG9pY2Ugc2VsZWN0c1xcbiAqL1xcblxcbjp3aGVyZShzZWxlY3RbbXVsdGlwbGVdKSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBhbmQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW3R5cGU9XFxcImNvbG9yXFxcIiBpXSwgW3R5cGU9XFxcInJhbmdlXFxcIiBpXSkge1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuICogMS4gUmVtb3ZlIGFuaW1hdGlvbnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIFJlbW92ZSBmaXhlZCBiYWNrZ3JvdW5kIGF0dGFjaG1lbnRzIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAzLiBSZW1vdmUgdGltZWQgc2Nyb2xsaW5nIGJlaGF2aW9ycyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogNC4gUmVtb3ZlIHRyYW5zaXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgKixcXG4gIDo6YmVmb3JlLFxcbiAgOjphZnRlciB7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogLTFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMW1zICFpbXBvcnRhbnQ7IC8qIDEgKi9cXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogaW5pdGlhbCAhaW1wb3J0YW50OyAvKiAyICovXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogYXV0byAhaW1wb3J0YW50OyAvKiAzICovXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDsgLyogNCAqL1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3JlZHVjZS1tb3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztFQUtFOztBQUVGO0VBQ0U7OztJQUdFLGdDQUFnQyxFQUFFLE1BQU07SUFDeEMsa0NBQWtDLEVBQUUsTUFBTTtJQUMxQyx1Q0FBdUMsRUFBRSxNQUFNO0lBQy9DLHlDQUF5QyxFQUFFLE1BQU07SUFDakQsZ0NBQWdDLEVBQUUsTUFBTTtJQUN4QywrQkFBK0IsRUFBRSxNQUFNO0lBQ3ZDLGtDQUFrQyxFQUFFLE1BQU07RUFDNUM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiAqIDEuIFJlbW92ZSBhbmltYXRpb25zIHdoZW4gbW90aW9uIGlzIHJlZHVjZWQgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBSZW1vdmUgZml4ZWQgYmFja2dyb3VuZCBhdHRhY2htZW50cyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICogMy4gUmVtb3ZlIHRpbWVkIHNjcm9sbGluZyBiZWhhdmlvcnMgd2hlbiBtb3Rpb24gaXMgcmVkdWNlZCAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFJlbW92ZSB0cmFuc2l0aW9ucyB3aGVuIG1vdGlvbiBpcyByZWR1Y2VkIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICosXFxuICA6OmJlZm9yZSxcXG4gIDo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xbXMgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFtcyAhaW1wb3J0YW50OyAvKiAxICovXFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDsgLyogMSAqL1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGluaXRpYWwgIWltcG9ydGFudDsgLyogMiAqL1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDsgLyogMyAqL1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50OyAvKiA0ICovXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDBzICFpbXBvcnRhbnQ7IC8qIDQgKi9cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERvY3VtZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgYm9yZGVyIGJveCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQmFja2dyb3VuZHMgZG8gbm90IHJlcGVhdCBieSBkZWZhdWx0IChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRleHQgZGVjb3JhdGlvbiBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBBZGQgdmVydGljYWwgYWxpZ25tZW50IGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIGRlZmF1bHQgY3Vyc29yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIENoYW5nZSB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMy4gQnJlYWtzIHdvcmRzIHRvIHByZXZlbnQgb3ZlcmZsb3cgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNC4gVXNlIGEgNC1zcGFjZSB0YWIgd2lkdGggaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogNS4gUmVtb3ZlIHRoZSBncmV5IGhpZ2hsaWdodCBvbiBsaW5rcyBpbiBpT1MgKG9waW5pb25hdGVkKS5cXG4gKiA2LiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG46d2hlcmUoOnJvb3QpIHtcXG4gIGN1cnNvcjogZGVmYXVsdDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDsgLyogMyAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogNCAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDUgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogNiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGJvZHkpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEVkZ2UsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGgxKSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIG5lc3RlZCBsaXN0cyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRsLCBvbCwgdWwpIDp3aGVyZShkbCwgb2wsIHVsKSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKGhyKSB7XFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbGlzdCBzdHlsZSBvbiBuYXZpZ2F0aW9uIGxpc3RzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYpIDp3aGVyZShvbCwgdWwpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgVm9pY2VPdmVyIGZyb20gaWdub3JpbmcgbGlzdCBzZW1hbnRpY3MgaW4gU2FmYXJpIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKG5hdiBsaSk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXDIwMEJcXFwiO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDMuIFByZXZlbnQgb3ZlcmZsb3cgb2YgdGhlIGNvbnRhaW5lciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUocHJlKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxuICBvdmVyZmxvdzogYXV0bzsgLyogMyAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGFiYnJbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYiwgc3Ryb25nKSB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoY29kZSwga2JkLCBzYW1wKSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbjp3aGVyZShzbWFsbCkge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBhbGlnbm1lbnQgb24gbWVkaWEgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGF1ZGlvLCBjYW52YXMsIGlmcmFtZSwgaW1nLCBzdmcsIHZpZGVvKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpZnJhbWVzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShpZnJhbWUpIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBmaWxsIGNvbG9yIHRvIG1hdGNoIHRoZSB0ZXh0IGNvbG9yIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShzdmc6bm90KFtmaWxsXSkpIHtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogVGFidWxhciBkYXRhXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb2xsYXBzZSBib3JkZXIgc3BhY2luZyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDMuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZSh0YWJsZSkge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICB0ZXh0LWluZGVudDogMDsgLyogMyAqL1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gb24gY29udHJvbHMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIGlucHV0LCBzZWxlY3QpIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGJ1dHRvbiwgW3R5cGU9XFxcImJ1dHRvblxcXCIgaV0sIFt0eXBlPVxcXCJyZXNldFxcXCIgaV0sIFt0eXBlPVxcXCJzdWJtaXRcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBpbmNvbnNpc3RlbnQgYXBwZWFyYW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoZmllbGRzZXQpIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMGEwYTA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG46d2hlcmUocHJvZ3Jlc3MpIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqIDMuIENoYW5nZSB0aGUgcmVzaXplIGRpcmVjdGlvbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUodGV4dGFyZWEpIHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogMyAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKFt0eXBlPVxcXCJzZWFyY2hcXFwiIGldKSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSB0ZXh0IHN0eWxlIG9mIHBsYWNlaG9sZGVycyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgb3BhY2l0eTogMC41NDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgdXBsb2FkIGJ1dHRvbnMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IHN0eWxlcyBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRpYWxvZykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IHNvbGlkO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG46d2hlcmUoZGlhbG9nOm5vdChbb3Blbl0pKSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoZGV0YWlscyA+IHN1bW1hcnk6Zmlyc3Qtb2YtdHlwZSkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBBY2Nlc3NpYmlsaXR5XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBidXN5IGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1idXN5PVxcXCJ0cnVlXFxcIiBpXSkge1xcbiAgY3Vyc29yOiBwcm9ncmVzcztcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBjb250cm9sIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1jb250cm9sc10pIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBkaXNhYmxlZCwgbm90LWVkaXRhYmxlLCBvciBvdGhlcndpc2VcXG4gKiBpbm9wZXJhYmxlIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1kaXNhYmxlZD1cXFwidHJ1ZVxcXCIgaV0sIFtkaXNhYmxlZF0pIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBkaXNwbGF5IG9uIHZpc3VhbGx5IGhpZGRlbiBhY2Nlc3NpYmxlIGVsZW1lbnRzXFxuICogaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKFthcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiIGldW2hpZGRlbl0pIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxufVxcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dOm5vdCg6Zm9jdXMpKSB7XFxuICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7O0VBR0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5Qiw0QkFBNEIsRUFBRSxNQUFNO0FBQ3RDOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSx3QkFBd0IsRUFBRSxNQUFNO0VBQ2hDLHVCQUF1QixFQUFFLE1BQU07QUFDakM7O0FBRUE7Ozs7Ozs7RUFPRTs7QUFFRjtFQUNFLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGdCQUFnQixFQUFFLE1BQU07RUFDeEIseUJBQXlCLEVBQUUsTUFBTTtFQUNqQyxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLFdBQVcsRUFBRSxNQUFNO0VBQ25CLHdDQUF3QyxFQUFFLE1BQU07RUFDaEQsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjLEVBQUUsTUFBTTtFQUN0QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOzs7O0VBSUU7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSwwQkFBMEI7RUFDMUIsaUNBQWlDO0FBQ25DOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7OztFQUlFOztBQUVGO0VBQ0UseUJBQXlCLEVBQUUsTUFBTTtFQUNqQyxxQkFBcUIsRUFBRSxNQUFNO0VBQzdCLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsU0FBUyxFQUFFLE1BQU07RUFDakIsZ0JBQWdCLEVBQUUsTUFBTTtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBEb2N1bWVudFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIGJvcmRlciBib3ggc2l6aW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEJhY2tncm91bmRzIGRvIG5vdCByZXBlYXQgYnkgZGVmYXVsdCAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0ZXh0IGRlY29yYXRpb24gaW5oZXJpdGFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIHZlcnRpY2FsIGFsaWdubWVudCBpbmhlcml0YW5jZSBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gVXNlIHRoZSBkZWZhdWx0IGN1cnNvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKiAyLiBDaGFuZ2UgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDMuIEJyZWFrcyB3b3JkcyB0byBwcmV2ZW50IG92ZXJmbG93IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDQuIFVzZSBhIDQtc3BhY2UgdGFiIHdpZHRoIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDUuIFJlbW92ZSB0aGUgZ3JleSBoaWdobGlnaHQgb24gbGlua3MgaW4gaU9TIChvcGluaW9uYXRlZCkuXFxuICogNi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuOndoZXJlKDpyb290KSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IC8qIDMgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDQgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiA0ICovXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiA1ICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDYgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShib2R5KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBFZGdlLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShoMSkge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBvbiBuZXN0ZWQgbGlzdHMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkbCwgb2wsIHVsKSA6d2hlcmUoZGwsIG9sLCB1bCkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC5cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbjp3aGVyZShocikge1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGxpc3Qgc3R5bGUgb24gbmF2aWdhdGlvbiBsaXN0cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUobmF2KSA6d2hlcmUob2wsIHVsKSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IFZvaWNlT3ZlciBmcm9tIGlnbm9yaW5nIGxpc3Qgc2VtYW50aWNzIGluIFNhZmFyaSAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShuYXYgbGkpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDBCXFxcIjtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKiAzLiBQcmV2ZW50IG92ZXJmbG93IG9mIHRoZSBjb250YWluZXIgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHByZSkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIDMgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShhYmJyW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGIsIHN0cm9uZykge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuOndoZXJlKGNvZGUsIGtiZCwgc2FtcCkge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG46d2hlcmUoc21hbGwpIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgYWxpZ25tZW50IG9uIG1lZGlhIGVsZW1lbnRzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShhdWRpbywgY2FudmFzLCBpZnJhbWUsIGltZywgc3ZnLCB2aWRlbykge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaWZyYW1lcyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoaWZyYW1lKSB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgZmlsbCBjb2xvciB0byBtYXRjaCB0aGUgdGV4dCBjb2xvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoc3ZnOm5vdChbZmlsbF0pKSB7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29sbGFwc2UgYm9yZGVyIHNwYWNpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKiAzLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUodGFibGUpIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDMgKi9cXG59XFxuXFxuLyogRm9ybXNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIG9uIGNvbnRyb2xzIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46d2hlcmUoYnV0dG9uLCBpbnB1dCwgc2VsZWN0KSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShidXR0b24sIFt0eXBlPVxcXCJidXR0b25cXFwiIGldLCBbdHlwZT1cXFwicmVzZXRcXFwiIGldLCBbdHlwZT1cXFwic3VibWl0XFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgaW5jb25zaXN0ZW50IGFwcGVhcmFuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKGZpZWxkc2V0KSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuOndoZXJlKHByb2dyZXNzKSB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKiAzLiBDaGFuZ2UgdGhlIHJlc2l6ZSBkaXJlY3Rpb24gaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOndoZXJlKHRleHRhcmVhKSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIHJlc2l6ZTogdmVydGljYWw7IC8qIDMgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShbdHlwZT1cXFwic2VhcmNoXFxcIiBpXSkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgdGV4dCBzdHlsZSBvZiBwbGFjZWhvbGRlcnMgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIG9wYWNpdHk6IDAuNTQ7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIHVwbG9hZCBidXR0b25zIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzdHlsZXMgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjp3aGVyZShkaWFsb2cpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBzb2xpZDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGhlaWdodDogLW1vei1maXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuOndoZXJlKGRpYWxvZzpub3QoW29wZW5dKSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBTYWZhcmkuXFxuICovXFxuXFxuOndoZXJlKGRldGFpbHMgPiBzdW1tYXJ5OmZpcnN0LW9mLXR5cGUpIHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogQWNjZXNzaWJpbGl0eVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gYnVzeSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtYnVzeT1cXFwidHJ1ZVxcXCIgaV0pIHtcXG4gIGN1cnNvcjogcHJvZ3Jlc3M7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gY29udHJvbCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtY29udHJvbHNdKSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBjdXJzb3Igb24gZGlzYWJsZWQsIG5vdC1lZGl0YWJsZSwgb3Igb3RoZXJ3aXNlXFxuICogaW5vcGVyYWJsZSBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46d2hlcmUoW2FyaWEtZGlzYWJsZWQ9XFxcInRydWVcXFwiIGldLCBbZGlzYWJsZWRdKSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgZGlzcGxheSBvbiB2aXN1YWxseSBoaWRkZW4gYWNjZXNzaWJsZSBlbGVtZW50c1xcbiAqIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbjp3aGVyZShbYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiBpXVtoaWRkZW5dKSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG46d2hlcmUoW2FyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgaV1baGlkZGVuXTpub3QoOmZvY3VzKSkge1xcbiAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBzeXN0ZW0tdWkgZm9udC1mYW1pbHkgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJXFxcIiksIGxvY2FsKFxcXCJVYnVudHVcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgQm9sZFxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGQgSXRhbGljXFxcIiksIGxvY2FsKFxcXCJVYnVudHUtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIkhlbHZldGljYU5ldWUtQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3N5c3RlbS11aS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSxzQkFBc0I7RUFDdEIscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix5SUFBeUk7QUFDM0k7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlJQUFpSTtBQUNuSTs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDBKQUEwSjtBQUM1SlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSVxcXCIpLCBsb2NhbChcXFwiVWJ1bnR1XFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tUmVndWxhclxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZVxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1JdGFsaWNcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dS1Cb2xkXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tQm9sZFxcXCIpLCBsb2NhbChcXFwiSGVsdmV0aWNhTmV1ZS1Cb2xkXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250XFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1LUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJIZWx2ZXRpY2FOZXVlLUJvbGRJdGFsaWNcXFwiKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCB1c2VyIGludGVyZmFjZSBmb250IGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHN5c3RlbS11aSxcXG4gICAgLyogbWFjT1MgMTAuMTEtMTAuMTIgKi8gLWFwcGxlLXN5c3RlbSxcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiU2Vnb2UgVUlcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHVcXFwiLFxcbiAgICAvKiBHbm9tZSAzKyAqLyBcXFwiQ2FudGFyZWxsXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBTYW5zXFxcIixcXG4gICAgLyogZmFsbGJhY2sgKi8gc2Fucy1zZXJpZixcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgZGVmYXVsdCBtb25vc3BhY2UgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTpcXG4gICAgdWktbW9ub3NwYWNlLFxcbiAgICAvKiBtYWNPUyAxMC4xMCsgKi8gXFxcIk1lbmxvXFxcIixcXG4gICAgLyogV2luZG93cyA2KyAqLyBcXFwiQ29uc29sYXNcXFwiLFxcbiAgICAvKiBBbmRyb2lkIDQrICovIFxcXCJSb2JvdG8gTW9ub1xcXCIsXFxuICAgIC8qIFVidW50dSAxMC4xMCsgKi8gXFxcIlVidW50dSBNb25vc3BhY2VcXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDUrICovIFxcXCJOb3RvIE1vbm9cXFwiLFxcbiAgICAvKiBLREUgUGxhc21hIDQrICovIFxcXCJPeHlnZW4gTW9ub1xcXCIsXFxuICAgIC8qIExpbnV4L09wZW5PZmZpY2UgZmFsbGJhY2sgKi8gXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIG1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgZW1vamkgKi8gXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLFxcbiAgICAvKiBXaW5kb3dzIGVtb2ppICovIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLFxcbiAgICAvKiBMaW51eCBlbW9qaSAqLyBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9zYW5pdGl6ZS5jc3MvdHlwb2dyYXBoeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRTs7Ozs7Ozs7Ozs7O3dDQVlzQztBQUN4Qzs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFOzs7Ozs7Ozs7Ozs7O3dDQWFzQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgdXNlciBpbnRlcmZhY2UgZm9udCBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OlxcbiAgICBzeXN0ZW0tdWksXFxuICAgIC8qIG1hY09TIDEwLjExLTEwLjEyICovIC1hcHBsZS1zeXN0ZW0sXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvXFxcIixcXG4gICAgLyogVWJ1bnR1IDEwLjEwKyAqLyBcXFwiVWJ1bnR1XFxcIixcXG4gICAgLyogR25vbWUgMysgKi8gXFxcIkNhbnRhcmVsbFxcXCIsXFxuICAgIC8qIEtERSBQbGFzbWEgNSsgKi8gXFxcIk5vdG8gU2Fuc1xcXCIsXFxuICAgIC8qIGZhbGxiYWNrICovIHNhbnMtc2VyaWYsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGRlZmF1bHQgbW9ub3NwYWNlIHVzZXIgaW50ZXJmYWNlIGZvbnQgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6XFxuICAgIHVpLW1vbm9zcGFjZSxcXG4gICAgLyogbWFjT1MgMTAuMTArICovIFxcXCJNZW5sb1xcXCIsXFxuICAgIC8qIFdpbmRvd3MgNisgKi8gXFxcIkNvbnNvbGFzXFxcIixcXG4gICAgLyogQW5kcm9pZCA0KyAqLyBcXFwiUm9ib3RvIE1vbm9cXFwiLFxcbiAgICAvKiBVYnVudHUgMTAuMTArICovIFxcXCJVYnVudHUgTW9ub3NwYWNlXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA1KyAqLyBcXFwiTm90byBNb25vXFxcIixcXG4gICAgLyogS0RFIFBsYXNtYSA0KyAqLyBcXFwiT3h5Z2VuIE1vbm9cXFwiLFxcbiAgICAvKiBMaW51eC9PcGVuT2ZmaWNlIGZhbGxiYWNrICovIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLFxcbiAgICAvKiBmYWxsYmFjayAqLyBtb25vc3BhY2UsXFxuICAgIC8qIG1hY09TIGVtb2ppICovIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuICAgIC8qIFdpbmRvd3MgZW1vamkgKi8gXFxcIlNlZ29lIFVJIEVtb2ppXFxcIixcXG4gICAgLyogV2luZG93cyBlbW9qaSAqLyBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIixcXG4gICAgLyogTGludXggZW1vamkgKi8gXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHN5c3RlbS11aSBmb250LWZhbWlseSBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhclxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ub1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9ub1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm9cXFwiKSwgbG9jYWwoXFxcIk1lbmxvXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtUmVndWxhckl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUl0YWxpY1xcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZFxcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUJvbGRcXFwiKSwgbG9jYWwoXFxcIk1lbmxvLUJvbGRcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBzcmM6IGxvY2FsKFxcXCIuQXBwbGVTeXN0ZW1VSUZvbnRNb25vc3BhY2VkLUJvbGRJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlNlZ29lIFVJIE1vbm8gQm9sZCBJdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZEl0YWxpY1xcXCIpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3VpLW1vbm9zcGFjZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIscUlBQXFJO0FBQ3ZJOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix1S0FBdUs7QUFDeks7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLHNKQUFzSjtBQUN4Sjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFMQUFxTDtBQUN2TFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKipcXG4gKiBBZGQgdGhlIGNvcnJlY3Qgc3lzdGVtLXVpIGZvbnQtZmFtaWx5IGluIENocm9tZSwgRWRnZSwgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFyXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vXFxcIiksIGxvY2FsKFxcXCJVYnVudHVNb25vXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9ub1xcXCIpLCBsb2NhbChcXFwiTWVubG9cXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1SZWd1bGFySXRhbGljXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1JdGFsaWNcXFwiKSwgbG9jYWwoXFxcIlJvYm90by1Nb25vLUl0YWxpY1xcXCIpLCBsb2NhbChcXFwiTWVubG8tSXRhbGljXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgc3JjOiBsb2NhbChcXFwiLkFwcGxlU3lzdGVtVUlGb250TW9ub3NwYWNlZC1Cb2xkXFxcIiksIGxvY2FsKFxcXCJTZWdvZSBVSSBNb25vIEJvbGRcXFwiKSwgbG9jYWwoXFxcIlVidW50dU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiUm9ib3RvLU1vbm8tQm9sZFxcXCIpLCBsb2NhbChcXFwiTWVubG8tQm9sZFxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2U7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHNyYzogbG9jYWwoXFxcIi5BcHBsZVN5c3RlbVVJRm9udE1vbm9zcGFjZWQtQm9sZEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiU2Vnb2UgVUkgTW9ubyBCb2xkIEl0YWxpY1xcXCIpLCBsb2NhbChcXFwiVWJ1bnR1TW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJSb2JvdG8tTW9uby1Cb2xkSXRhbGljXFxcIiksIGxvY2FsKFxcXCJNZW5sby1Cb2xkSXRhbGljXFxcIik7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uZmxleC1oZWFkZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG59XFxuLmxvZ28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmxvZ28tdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpZGRlbi1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuI2NsaWVudC1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4jY2xpZW50LWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4jY2xpZW50LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuICBib3R0b206IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNzAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxODgsIDE0MywgMC42KTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICBoZWlnaHQ6IDEzJTtcXG59XFxuXFxuLmNhcmQtaW5zaWRlLWZsZXhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gIGhlaWdodDogODclO1xcbn1cXG5cXG4uaW5mb3JtYXRpb25zLWJsb2NrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvcm1hdGlvbnMtYmxvY2tzLXR3byB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmluZm9ybWF0aW9ucyB7XFxuICBib3JkZXItYmxvY2stZW5kOiA1cHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTg4LCAxNDMsIDAuNik7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbmRpY2F0b3JzIHtcXG4gIGhlaWdodDogNDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE4OCwgMTQzLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xcbn1cXG5cXG4uZmxleC1mb290ZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiBibHVlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsU0FBUztFQUNULDJCQUEyQjtFQUMzQixTQUFTO0VBQ1QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMENBQTBDO0VBQzFDLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBDQUEwQztFQUMxQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XFxuICAvKiAoNjIuNS8xMDApICogMTZweCA9IDEwcHggKi9cXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAvKiAxNHB4ICovXFxuICAtLWZvbnQtc2l6ZS1zbWFsbDogMS40cmVtO1xcbiAgLyogMTZweCAqL1xcbiAgLS1mb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xcbiAgLyogMjRweCAqL1xcbiAgLS1mb250LXNpemUtbGFyZ2U6IDIuNHJlbTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1kZWZhdWx0KTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2VhZ3JlZW47XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uZmxleC1oZWFkZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuXFxuLmxvZ28tY29udGFpbmVyIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG59XFxuLmxvZ28ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmxvZ28tdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhpZGRlbi1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG9wYWNpdHk6IDA7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuXFxuI2NsaWVudC1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4jY2xpZW50LWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4jY2xpZW50LWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuICBib3R0b206IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRhdGUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaW5mb3JtYXRpb24tY29udGFpbmVyIHtcXG4gIGNvbG9yOiBibHVlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluZm9ybWF0aW9uLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNzAwcHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5jaXR5LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQzLCAxODgsIDE0MywgMC42KTtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuICBoZWlnaHQ6IDEzJTtcXG59XFxuXFxuLmNhcmQtaW5zaWRlLWZsZXhlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxhcmdlKTtcXG4gIGhlaWdodDogODclO1xcbn1cXG5cXG4uaW5mb3JtYXRpb25zLWJsb2NrcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA2MCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmZvcm1hdGlvbnMtYmxvY2tzLXR3byB7XFxuICBoZWlnaHQ6IDQwJTtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmluZm9ybWF0aW9ucyB7XFxuICBib3JkZXItYmxvY2stZW5kOiA1cHggc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTg4LCAxNDMsIDAuNik7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbmRpY2F0b3JzIHtcXG4gIGhlaWdodDogNDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDE4OCwgMTQzLCAwLjYpO1xcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xcbn1cXG5cXG4uZmxleC1mb290ZXIge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGFyZ2UpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiBibHVlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNzZXRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3NldHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3JlZHVjZS1tb3Rpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2FuaXRpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Nhbml0aXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N5c3RlbS11aS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3lzdGVtLXVpLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdWktbW9ub3NwYWNlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91aS1tb25vc3BhY2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGNvbnN0IHVybHMgPSBbXG4gIGBodHRwczovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy82MDM2cDBjVG5qVXJORnBBbHI/YXBpX2tleT1JTTZFVFEzQ2xsVUJ1cXNTeVFpSURpZUpuQjJMWFVDQ2AsXG5dO1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc0NpdHlEYXRhID0gKHJhd0NpdHlXZWF0aGVyRGF0YSkgPT4ge1xuICBjb25zdCBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEgPSB7fTtcbiAgaWYgKHJhd0NpdHlXZWF0aGVyRGF0YSA9PT0gbnVsbCkge1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5jaXR5ID0gYENvdWxkbid0IGZpbmQgdGhhdCBjaXR5IGluIG91ciBkYXRhYmFzZWA7XG4gICAgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlID0gYE5vIGRhdGFgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS53ZWF0aGVyID0gYE5vIGRhdGFgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5kYXlUZW1wID0gYE5vIGRhdGFgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5uaWdodFRlbXAgPSBgTm8gZGF0YWA7XG4gICAgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLmh1bWlkaXR5ID0gYE5vIGRhdGFgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS53aW5kID0gYE5vIGRhdGFgO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5jaXR5ID0gcmF3Q2l0eVdlYXRoZXJEYXRhLm5hbWU7XG4gICAgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlID0gYCR7cmF3Q2l0eVdlYXRoZXJEYXRhLm1haW4udGVtcH0gS2A7XG4gICAgcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLndlYXRoZXIgPSByYXdDaXR5V2VhdGhlckRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5kYXlUZW1wID0gYERheSAke3Jhd0NpdHlXZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4fSBLYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEubmlnaHRUZW1wID0gYE5pZ2h0ICR7cmF3Q2l0eVdlYXRoZXJEYXRhLm1haW4udGVtcF9taW59IEtgO1xuICAgIHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5odW1pZGl0eSA9IGAke3Jhd0NpdHlXZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSAlYDtcbiAgICBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEud2luZCA9IGAke3Jhd0NpdHlXZWF0aGVyRGF0YS53aW5kLnNwZWVkfSBtL3NgO1xuICB9XG4gIHJldHVybiBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q2l0eURhdGEgPSAodXJsKSA9PlxuICBmZXRjaGVyKHVybClcbiAgICAudGhlbigoY2l0eU5hbWVEYXRhKSA9PiB7XG4gICAgICB1cmxzWzJdID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2NpdHlOYW1lRGF0YVtcIjBcIl0ubGF0fSZsb249JHtjaXR5TmFtZURhdGFbXCIwXCJdLmxvbn0mYXBwaWQ9MDM5MjNiMjNhZjZkMDJkYWVkOWYxYzkwYjk1YWNmYzhgO1xuICAgICAgcmV0dXJuIGZldGNoZXIodXJsc1syXSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGZldGNoZXIsIHVybHMsIHByb2Nlc3NDaXR5RGF0YSwgZ2V0Q2l0eURhdGEgfSBmcm9tIFwiLi9kYXRhLW1hbmlwdWxhdGlvblwiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvZm9ybXMuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvYXNzZXRzLmNzc1wiO1xuaW1wb3J0IFwic2FuaXRpemUuY3NzL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvcmVkdWNlLW1vdGlvbi5jc3NcIjtcbmltcG9ydCBcInNhbml0aXplLmNzcy9zeXN0ZW0tdWkuY3NzXCI7XG5pbXBvcnQgXCJzYW5pdGl6ZS5jc3MvdWktbW9ub3NwYWNlLmNzc1wiO1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsaWVudC1pbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJ1dHRvblwiKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWNvbnRhaW5lclwiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5jb25zdCBpbmZvcm1hdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb3JtYXRpb24tY29udGFpbmVyXCIpO1xuY29uc3QgaW5mb3JtYXRpb25DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmZvcm1hdGlvbi1jYXJkXCIpO1xuY29uc3QgY2l0eVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LXRpdGxlXCIpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBlcmF0dXJlXCIpO1xuY29uc3QgZGF5VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS10ZW1wZXJhdHVyZVwiKTtcbmNvbnN0IG5pZ2h0VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5pZ2h0LXRlbXBlcmF0dXJlXCIpO1xuY29uc3Qgd2VhdGhlckRlc2NyaXB0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZGVzY3JpcHRvclwiKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRcIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlXCIpO1xuXG5jb25zdCBpY29uQ2hhbmdlciA9ICh1cmwpID0+IHtcbiAgaWYgKHVybCA9PT0gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLzhMMFBreTZDODNTemt6VTU1YT9hcGlfa2V5PUlNNkVUUTNDbGxVQnVxc1N5UWlJRGllSm5CMkxYVUNDYCkge1xuICAgIGluZm9ybWF0aW9uQ2FyZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiNzAlXCI7XG4gIH0gZWxzZSB7XG4gICAgaW5mb3JtYXRpb25DYXJkLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICB9XG4gIGZldGNoZXIodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgaW5mb3JtYXRpb25DYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmRhdGEuaW1hZ2VzLmRvd25zaXplZC51cmx9KWA7XG4gIH0pO1xufTtcblxuY29uc3QgaW5mb3JtYXRpb25zQ2hhbmdlciA9IChwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEpID0+IHtcbiAgY2l0eVRpdGxlLnRleHRDb250ZW50ID0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLmNpdHk7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlO1xuICB3ZWF0aGVyRGVzY3JpcHRvci50ZXh0Q29udGVudCA9IHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS53ZWF0aGVyO1xuICBkYXlUZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YS5kYXlUZW1wO1xuICBuaWdodFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLm5pZ2h0VGVtcDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEuaHVtaWRpdHk7XG4gIHdpbmQudGV4dENvbnRlbnQgPSBwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEud2luZDtcblxuICByZXR1cm4gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEYXRhLndlYXRoZXI7XG59O1xuXG5jb25zdCBjb2xvckNoYW5nZXIgPSAoY29sb3IxLCBjb2xvcjIsIGNvbG9yMykgPT4ge1xuICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7Y29sb3IxfWA7XG4gIGluZm9ybWF0aW9uQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2NvbG9yMn1gO1xuICBmb290ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7Y29sb3IzfWA7XG59O1xuXG5jb25zdCBtb29kU2VsZWN0b3IgPSAocHJvY2Vzc2VkQ2l0eVdlYXRoZXJEZXNjcmlwdGlvbikgPT4ge1xuICBjb25zdCB3ZWF0aGVyUGVyc29uYSA9IFtcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJObyBkYXRhXCIsXG4gICAgICBpZDogXCI4TDBQa3k2QzgzU3prelU1NWFcIixcbiAgICAgIGNvbG9yMTogXCJkYXJrc2VhZ3JlZW5cIixcbiAgICAgIGNvbG9yMjogXCJ3aGl0ZVwiLFxuICAgICAgY29sb3IzOiBcImRhcmtzZWFncmVlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiQ2xlYXJcIixcbiAgICAgIGlkOiBcImxvVXFDTVNmWEhjc1ZiM2NVWlwiLFxuICAgICAgY29sb3IxOiBcImRhcmtzZWFncmVlblwiLFxuICAgICAgY29sb3IyOiBcImdvbGRcIixcbiAgICAgIGNvbG9yMzogXCJkYXJrc2VhZ3JlZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkNsb3Vkc1wiLFxuICAgICAgaWQ6IFwiYzMxV1hHSzFqTFFCeVwiLFxuICAgICAgY29sb3IxOiBcImRhcmtzZWFncmVlblwiLFxuICAgICAgY29sb3IyOiBcIndoaXRlXCIsXG4gICAgICBjb2xvcjM6IFwiZGFya3NlYWdyZWVuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJEcml6emxlXCIsXG4gICAgICBpZDogXCIzb0VkdmJlbFRtTVhPUTlWRE9cIixcbiAgICAgIGNvbG9yMTogXCIjZTRlOGZmXCIsXG4gICAgICBjb2xvcjI6IFwiIzNjM2NmZlwiLFxuICAgICAgY29sb3IzOiBcIiNlNGU4ZmZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJhaW5cIixcbiAgICAgIGlkOiBcInQ3UWI4NjU1WjFWZkJHcjVYQlwiLFxuICAgICAgY29sb3IxOiBcIiNlNGU4ZmZcIixcbiAgICAgIGNvbG9yMjogXCIjM2MzY2ZmXCIsXG4gICAgICBjb2xvcjM6IFwiI2U0ZThmZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiVGh1bmRlcnN0b3JtXCIsXG4gICAgICBpZDogXCIzb3N4WXpJUVJxTjRET0VkZENcIixcbiAgICAgIGNvbG9yMTogXCIjZTZlYWVmXCIsXG4gICAgICBjb2xvcjI6IFwibWlkbmlnaHRibHVlXCIsXG4gICAgICBjb2xvcjM6IFwiI2U2ZWFlZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiU25vd1wiLFxuICAgICAgaWQ6IFwiMTJ3dGVNVFh4akxhVk9cIixcbiAgICAgIGNvbG9yMTogXCJhbGljZWJsdWVcIixcbiAgICAgIGNvbG9yMjogXCJsaWdodGJsdWVcIixcbiAgICAgIGNvbG9yMzogXCJhbGljZWJsdWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1pc3RcIixcbiAgICAgIGlkOiBcInNabXY4NXBaOE5HNjBIVTlRS1wiLFxuICAgICAgY29sb3IxOiBcIiNlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjM6IFwiI2U3ZjBmN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiU21va2VcIixcbiAgICAgIGlkOiBcInIyT011VENGbzBydjJyZ0FMNVwiLFxuICAgICAgY29sb3IxOiBcIiNlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjM6IFwiI2U3ZjBmN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiSGF6ZVwiLFxuICAgICAgaWQ6IFwiZGdlSUg1UlB5bkE2UVwiLFxuICAgICAgY29sb3IxOiBcIiNlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjM6IFwiI2U3ZjBmN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiRHVzdFwiLFxuICAgICAgaWQ6IFwidHF0WkRqNUJxQzBDWVwiLFxuICAgICAgY29sb3IxOiBcIiNlZWYxYjlcIixcbiAgICAgIGNvbG9yMjogXCIjZWVmMWI5XCIsXG4gICAgICBjb2xvcjM6IFwiI2VlZjFiOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiRm9nXCIsXG4gICAgICBpZDogXCJsMkplOWRVSTVMcHpmSEdUZVwiLFxuICAgICAgY29sb3IxOiBcIiNlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCIjZTdmMGY3XCIsXG4gICAgICBjb2xvcjM6IFwiI2U3ZjBmN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiU2FuZFwiLFxuICAgICAgaWQ6IFwiQlhQbE1yTzljeVlUS1wiLFxuICAgICAgY29sb3IxOiBcIiNlZWYxYjlcIixcbiAgICAgIGNvbG9yMjogXCIjZWVmMWI5XCIsXG4gICAgICBjb2xvcjM6IFwiI2VlZjFiOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZGVzY3JpcHRpb246IFwiQXNoXCIsXG4gICAgICBpZDogXCJyNWdIdDJUQ0lpSEswXCIsXG4gICAgICBjb2xvcjE6IFwiI2U3ZjBmN1wiLFxuICAgICAgY29sb3IyOiBcIiNlN2YwZjdcIixcbiAgICAgIGNvbG9yMzogXCIjZTdmMGY3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBkZXNjcmlwdGlvbjogXCJTcXVhbGxcIixcbiAgICAgIGlkOiBcIkhtVExhdHdMV3BUUWtcIixcbiAgICAgIGNvbG9yMTogXCJlN2YwZjdcIixcbiAgICAgIGNvbG9yMjogXCJlN2YwZjdcIixcbiAgICAgIGNvbG9yMzogXCJlN2YwZjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlRvcm5hZG9cIixcbiAgICAgIGlkOiBcIk1YdkRobG1EMGVCNXFOdnZqWlwiLFxuICAgICAgY29sb3IxOiBcImU3ZjBmN1wiLFxuICAgICAgY29sb3IyOiBcImU3ZjBmN1wiLFxuICAgICAgY29sb3IzOiBcImU3ZjBmN1wiLFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IHdlYXRoZXJMb2dvID1cbiAgICB3ZWF0aGVyUGVyc29uYVtcbiAgICAgIHdlYXRoZXJQZXJzb25hLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuZGVzY3JpcHRpb24gPT09IHByb2Nlc3NlZENpdHlXZWF0aGVyRGVzY3JpcHRpb25cbiAgICAgIClcbiAgICBdLmlkO1xuICB1cmxzWzNdID0gYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzLyR7d2VhdGhlckxvZ299P2FwaV9rZXk9SU02RVRRM0NsbFVCdXFzU3lRaUlEaWVKbkIyTFhVQ0NgO1xuICBjb25zdCB3ZWF0aGVyQ29sb3IxID1cbiAgICB3ZWF0aGVyUGVyc29uYVtcbiAgICAgIHdlYXRoZXJQZXJzb25hLmZpbmRJbmRleChcbiAgICAgICAgKGVsZW1lbnQpID0+IGVsZW1lbnQuZGVzY3JpcHRpb24gPT09IHByb2Nlc3NlZENpdHlXZWF0aGVyRGVzY3JpcHRpb25cbiAgICAgIClcbiAgICBdLmNvbG9yMTtcbiAgY29uc3Qgd2VhdGhlckNvbG9yMiA9XG4gICAgd2VhdGhlclBlcnNvbmFbXG4gICAgICB3ZWF0aGVyUGVyc29uYS5maW5kSW5kZXgoXG4gICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmRlc2NyaXB0aW9uID09PSBwcm9jZXNzZWRDaXR5V2VhdGhlckRlc2NyaXB0aW9uXG4gICAgICApXG4gICAgXS5jb2xvcjI7XG4gIGNvbnN0IHdlYXRoZXJDb2xvcjMgPVxuICAgIHdlYXRoZXJQZXJzb25hW1xuICAgICAgd2VhdGhlclBlcnNvbmEuZmluZEluZGV4KFxuICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5kZXNjcmlwdGlvbiA9PT0gcHJvY2Vzc2VkQ2l0eVdlYXRoZXJEZXNjcmlwdGlvblxuICAgICAgKVxuICAgIF0uY29sb3IzO1xuXG4gIGljb25DaGFuZ2VyKHVybHNbM10pO1xuICBjb2xvckNoYW5nZXIod2VhdGhlckNvbG9yMSwgd2VhdGhlckNvbG9yMiwgd2VhdGhlckNvbG9yMyk7XG59O1xuXG5jb25zdCBwYWdlVXBkYXRlciA9ICh1cmwpID0+IHtcbiAgZ2V0Q2l0eURhdGEodXJsKVxuICAgIC50aGVuKChyYXdDaXR5V2VhdGhlckRhdGEpID0+IHByb2Nlc3NDaXR5RGF0YShyYXdDaXR5V2VhdGhlckRhdGEpKVxuICAgIC50aGVuKChwcm9jZXNzZWRDaXR5V2VhdGhlckRhdGEpID0+XG4gICAgICBpbmZvcm1hdGlvbnNDaGFuZ2VyKHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YSlcbiAgICApXG4gICAgLnRoZW4oKHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YURlc2NyaXB0aW9uKSA9PlxuICAgICAgbW9vZFNlbGVjdG9yKHByb2Nlc3NlZENpdHlXZWF0aGVyRGF0YURlc2NyaXB0aW9uKVxuICAgICk7XG59O1xuXG5jb25zdCB1c2VyRGVtYW5kID0gKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS50eXBlID09PSBcImNsaWNrXCIpIHtcbiAgICBpZiAoaW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGljb25DaGFuZ2VyKHVybHNbMF0pO1xuICAgICAgdXJsc1sxXSA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7aW5wdXQudmFsdWV9JmFwcGlkPTAzOTIzYjIzYWY2ZDAyZGFlZDlmMWM5MGI5NWFjZmM4YDtcbiAgICAgIHBhZ2VVcGRhdGVyKHVybHNbMV0pO1xuICAgIH1cbiAgfVxufTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB1c2VyRGVtYW5kKGUpKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHVzZXJEZW1hbmQoZSkpO1xuXG5jb25zdCBkYXRlVG9kYXkgPSAoKSA9PiB7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgZGF0ZVRvZGF5KCk7XG4gIGljb25DaGFuZ2VyKHVybHNbMF0pO1xuICB1cmxzWzFdID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9UmFiYXQmYXBwaWQ9MDM5MjNiMjNhZjZkMDJkYWVkOWYxYzkwYjk1YWNmYzhgO1xuICBwYWdlVXBkYXRlcih1cmxzWzFdKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9