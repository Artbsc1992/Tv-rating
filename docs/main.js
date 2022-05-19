/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/love.png */ \"./assets/icons/love.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/heart.png */ \"./assets/icons/heart.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  background: linear-gradient(to right, #231d53, #302b63, #231d53);\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nol,\\r\\nul,\\r\\nform {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\nol,\\r\\nul {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nnav img {\\r\\n  width: 150px;\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\nnav a {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nfooter h3 a {\\r\\n  text-decoration: none;\\r\\n  color: rgb(37, 36, 36);\\r\\n}\\r\\n\\r\\nnav a:hover {\\r\\n  background-color: rgb(219, 213, 213);\\r\\n  border-radius: 25px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.notScrollable {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.showList {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 7rem;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.reservations {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  bottom: 0;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  z-index: 1000;\\r\\n  background-color: rgb(226, 225, 225, 80%);\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.reservations .reservation-inner {\\r\\n  position: relative;\\r\\n  width: 60%;\\r\\n  margin: 5em auto;\\r\\n  background-color: white;\\r\\n  border-radius: 1em;\\r\\n}\\r\\n\\r\\n.reservations .reservation-inner img {\\r\\n  border-top-left-radius: 1em;\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.reservation-heading {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.reservation-heading ul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1em;\\r\\n  padding: 3em 1em;\\r\\n}\\r\\n\\r\\n.reservation-heading ul a {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n#show-reservations,\\r\\n#reservation-form {\\r\\n  padding: 2em;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#reservation-form {\\r\\n  border-top: 1px solid rgb(226, 226, 226);\\r\\n}\\r\\n\\r\\n#add-reservation {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1em;\\r\\n  width: 50%;\\r\\n  margin: 2em auto;\\r\\n}\\r\\n\\r\\n#add-reservation button {\\r\\n  align-self: flex-start;\\r\\n  padding: 10px 15px;\\r\\n  border-radius: 0.7em;\\r\\n  border: 2px solid green;\\r\\n  background-color: rgb(204, 255, 204);\\r\\n  font-weight: 600;\\r\\n  color: green;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-sec input {\\r\\n  width: 30%;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n#add-reservation input {\\r\\n  height: 2.8em;\\r\\n  padding: 5px 10px;\\r\\n  margin: 2px 2px;\\r\\n  border-radius: 0.7em;\\r\\n  border: 2px gray solid;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#add-reservation input:focus {\\r\\n  border: 2px rgb(63, 140, 255) solid;\\r\\n}\\r\\n\\r\\n#form-status.success {\\r\\n  padding: 0.8em;\\r\\n  background-color: rgb(192, 255, 200);\\r\\n  color: rgb(0, 71, 9);\\r\\n  border-radius: 0.7em;\\r\\n}\\r\\n\\r\\n#form-status.error {\\r\\n  padding: 0.8em;\\r\\n  background-color: pink;\\r\\n  color: rgb(71, 0, 0);\\r\\n  border-radius: 0.7em;\\r\\n}\\r\\n\\r\\n#show-reservations h3,\\r\\n#reservation-form h3 {\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n#show-reservations li {\\r\\n  margin-top: 1em;\\r\\n}\\r\\n\\r\\n.badge {\\r\\n  padding: 3px 10px;\\r\\n  background-color: rgb(134, 197, 255);\\r\\n  color: rgb(0, 69, 116);\\r\\n  border-radius: 5px;\\r\\n  border: 1px solid rgb(0, 69, 116);\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n#show-reservations .reservations-error {\\r\\n  display: block;\\r\\n  padding: 0.8em;\\r\\n  background-color: pink;\\r\\n  color: rgb(71, 0, 0);\\r\\n  border-radius: 0.7em;\\r\\n}\\r\\n\\r\\n#close-reservation-popup {\\r\\n  position: absolute;\\r\\n  top: 15px;\\r\\n  right: 20px;\\r\\n  z-index: 1001;\\r\\n}\\r\\n\\r\\n#close-reservation-popup img {\\r\\n  width: 20px;\\r\\n  cursor: pointer;\\r\\n  background-color: white;\\r\\n  padding: 6px;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.poppup {\\r\\n  background-color: aquamarine;\\r\\n  padding: 10px;\\r\\n  width: 80%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.img-sec {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.movie-img {\\r\\n  height: 400px;\\r\\n  width: 400px;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  height: 1rem;\\r\\n  width: 1rem;\\r\\n}\\r\\n\\r\\n.comment-sec {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comment-sec h2 {\\r\\n  align-self: center;\\r\\n  margin: 20px 20px 20px 20px;\\r\\n}\\r\\n\\r\\n.comment-sec form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  margin-left: 40px;\\r\\n  margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.comment-sec textarea {\\r\\n  padding: 5px;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.detail-sec {\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  background-color: #fff;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.detail-sec h2 {\\r\\n  margin: 10px 10px 10px 10px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  z-index: 1000;\\r\\n  padding: 20px;\\r\\n  background-color: rgba(158, 153, 153, 0.8);\\r\\n}\\r\\n\\r\\n.heart {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center bottom;\\r\\n  background-position-y: 130%;\\r\\n  display: inline-block;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  background-size: 15px;\\r\\n}\\r\\n\\r\\n.heart.active {\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: center bottom;\\r\\n  background-position-y: 130%;\\r\\n  display: inline-block;\\r\\n  width: 20px;\\r\\n  height: 20px;\\r\\n  background-size: 15px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  background-color: aqua;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  .reservations .reservation-inner {\\r\\n    position: relative;\\r\\n    width: 98%;\\r\\n    margin: 3px auto;\\r\\n  }\\r\\n\\r\\n  .reservation-heading {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .reservations .reservation-inner img {\\r\\n    border-top-left-radius: 1em;\\r\\n    border-top-right-radius: 1em;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  #add-reservation {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.home-posters {\\r\\n  display: block;\\r\\n  margin: auto;\\r\\n  border-radius: 20px 20px 20px 20px;\\r\\n  box-shadow: 10px 7px 7px 2px rgba(0,0,0,0.6);\\r\\n}\\r\\n\\r\\n.show-name {\\r\\n  display: block;\\r\\n  text-align: center;\\r\\n  margin-top: 1rem;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  display: block;\\r\\n  margin: auto;\\r\\n  border: none;\\r\\n  background-color: #bfdbfd;\\r\\n}\\r\\n\\r\\n.btns {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n}\\r\\n.comment-btn,\\r\\n.reservation-btn {\\r\\n  box-shadow:inset 0px 1px 3px 0px #9fb4f2;\\r\\n\\tbackground:linear-gradient(to bottom, #7892c2 5%, #476e9e 100%);\\r\\n\\tbackground-color:#7892c2;\\r\\n\\tborder-radius:5px;\\r\\n\\tborder:1px solid #4e6096;\\r\\n\\tdisplay:inline-block;\\r\\n\\tcursor:pointer;\\r\\n\\tcolor:#ffffff;\\r\\n\\tfont-family:Arial;\\r\\n\\tfont-size:15px;\\r\\n\\tfont-weight:bold;\\r\\n\\tpadding:11px 23px;\\r\\n\\ttext-shadow:0px -1px 0px #283966;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_icons_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/logo.png */ \"./assets/icons/logo.png\");\n/* harmony import */ var _assets_icons_fav_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/fav.png */ \"./assets/icons/fav.png\");\n/* harmony import */ var _assets_icons_close_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/close.png */ \"./assets/icons/close.png\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_likesApi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/likesApi.js */ \"./src/modules/likesApi.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n\n\n\n\n\n\n\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n\n//# sourceURL=webpack://webpack_template/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reservations_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservations-api.js */ \"./src/modules/reservations-api.js\");\n\n\nconst comment = document.createElement('div');\ncomment.classList.add('reservations');\n\nconst closePopUp = () => {\n  document.body.removeChild(comment);\n  comment.innerHTML = '';\n};\n\nconst renderComments = async (showId, container) => {\n  container = container.querySelector('ul');\n  container.innerHTML = '';\n  try {\n    const comm = await (0,_reservations_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchcomments)(showId);\n    comm.forEach((comments) => {\n      const item = document.createElement('li');\n      item.innerHTML = `\n      ${comments.creation_date} ${comments.username} :  ${comments.comment}  \n      `;\n      container.append(item);\n    });\n  } catch (error) {\n    const item = document.createElement('li');\n    item.innerHTML = `\n      <span class=\"reservations-error\">${error}</span>\n    `;\n    container.append(item);\n  }\n};\n\nconst showPop = async (showId) => {\n  try {\n    document.body.append(comment);\n    const show = await (0,_reservations_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchShow)(showId);\n    comment.innerHTML = ` <div class=\"reservation-inner\">\n    <span id=\"close-reservation-popup\" ><img src=\"./img/close.png\" alt=\"Close Reservation Popup\"/></span>\n    <section class=\"reservation-heading\">\n      <img src=\"${show.image.original}\" alt=\"${show.name}\" />\n      <ul>\n        <li><h2>${show.name}</h2></li> \n        <li>${show.summary}</li>\n        <li>Language: ${show.language}</li>\n        <li>Avg. Rating: ${show.rating.average}</li>\n        <li>Show type:  ${show.type}</li>\n        <li>Genres: ${show.genres.map((genre) => `<span class=\"genre-label\"> ${genre}</span>`)}</li>\n        </ul>\n    </section>\n    <section id=\"show-reservations\">\n      <h3>comments</h3>\n      <ul class=\"reservations-list\">\n      </ul>\n      </section>\n      <div class=\"comment-sec\">\n      <h2>Add a comment</h2>\n      <form action=\"\">\n      <input type=\"text\" placeholder=\"Your name\">\n      <textarea name=\"\" id=\"\" cols=\"10\" rows=\"10\" placeholder=\"your insights\" ></textarea>\n      </form>\n      </div>\n      </div>\n    `;\n    const commentscontainer = comment.querySelector('#show-reservations');\n    renderComments(showId, commentscontainer);\n  } catch (error) {\n    comment.innerHTML = `\n      <div class=\"reservation-inner\">\n        <span id=\"close-reservation-popup\" ><img src=\"./img/close.png\" alt=\"Close Reservation Popup\"/></span>\n        <p>Something went wrong. Please try again later. </p>\n        <small>${error && error}</small>\n      </div>\n    `;\n  }\n\n  comment.querySelector('#close-reservation-popup').addEventListener('click', closePopUp);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPop);\n\n\n//# sourceURL=webpack://webpack_template/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/counter-shows.js":
/*!**************************************!*\
  !*** ./src/modules/counter-shows.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counterShows = (shows) => shows.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterShows);\n\n//# sourceURL=webpack://webpack_template/./src/modules/counter-shows.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAPI.js */ \"./src/modules/fetchAPI.js\");\n/* harmony import */ var _reservations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservations.js */ \"./src/modules/reservations.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _counter_shows_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter-shows.js */ \"./src/modules/counter-shows.js\");\n/* harmony import */ var _likesApi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./likesApi.js */ \"./src/modules/likesApi.js\");\n\n\n\n\n\n\n\n\n\n\nconst ul = document.createElement('ul');\nul.classList = 'showList';\nconst div = document.querySelector('.shows');\ndiv.append(ul);\nconst counter = document.querySelector('a');\n\nconst filterLikes = (showId, likesList) => {\n  const result = likesList.find((item) => +item.item_id === showId);\n  if (!result) {\n    return 0;\n  }\n  return result.likes;\n};\n\nconst render = async () => {\n  ul.innerHTML = '';\n  const shows = await (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  counter.textContent = `Shows (${(0,_counter_shows_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(shows)})`;\n\n  const fetchedLikes = await (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_4__.getLikes)();\n  shows.forEach((show) => {\n    const li = document.createElement('li');\n    let likes = filterLikes(show.id, fetchedLikes);\n    li.innerHTML = `\n            <img class='home-posters' src=\"${show.img}\" alt=\"movie\">\n            <img class='heart' src='../img/love.png' alt='heart'>\n            <p class='show-name'>${show.name}</p>\n            <button type='button' data-id='${show.id}' class='like'>Likes ${likes}</button>\n            <span class='heart'></span>\n            <div class='btns'>\n            <button class='comment-btn' data-comment=\"true\" data-id=\"${show.id}\">Comments</button>\n            <button class='reservation-btn' data-reservation=\"true\" data-id=\"${show.id}\">Reservations</button>\n            </div>\n        `;\n    const reservationBtn = li.querySelector('[data-reservation]');\n\n    ul.append(li);\n    reservationBtn.addEventListener('click', (e) => (0,_reservations_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.dataset.id));\n\n    const commentBtn = li.querySelector('[data-comment]');\n\n    ul.append(li);\n    commentBtn.addEventListener('click', (e) => (0,_comment_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target.dataset.id));\n\n    const heartContainer = li.querySelector('.heart');\n    const likeBtn = li.querySelector('.like');\n    likeBtn.addEventListener('click', async () => {\n      heartContainer.classList.add('active');\n      await (0,_likesApi_js__WEBPACK_IMPORTED_MODULE_4__.putLikes)(show.id);\n      likeBtn.innerHTML = `Likes ${likes += 1}`;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://webpack_template/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/fetchAPI.js":
/*!*********************************!*\
  !*** ./src/modules/fetchAPI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst apiShows = 'https://api.tvmaze.com/shows?page=0';\n\nconst fetchShows = async () => {\n  const response = await fetch(apiShows);\n  let shows = await response.json();\n  shows = shows.slice(0, 10);\n  const mapedShows = shows.map((show) => ({\n    id: show.id,\n    name: show.name,\n    img: show.image.medium,\n  }));\n  return mapedShows;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchShows);\n\n//# sourceURL=webpack://webpack_template/./src/modules/fetchAPI.js?");

/***/ }),

/***/ "./src/modules/likesApi.js":
/*!*********************************!*\
  !*** ./src/modules/likesApi.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"putLikes\": () => (/* binding */ putLikes)\n/* harmony export */ });\nconst likesApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/likes';\n\nconst getLikes = async () => {\n  const response = await fetch(likesApi);\n  const showLikes = await response.json();\n  return showLikes;\n};\n\nconst putLikes = async (idShow) => {\n  await fetch(likesApi, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ item_id: idShow }),\n  });\n};\n\n\n//# sourceURL=webpack://webpack_template/./src/modules/likesApi.js?");

/***/ }),

/***/ "./src/modules/reservations-api.js":
/*!*****************************************!*\
  !*** ./src/modules/reservations-api.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchReservations\": () => (/* binding */ fetchReservations),\n/* harmony export */   \"fetchShow\": () => (/* binding */ fetchShow),\n/* harmony export */   \"fetchcomments\": () => (/* binding */ fetchcomments),\n/* harmony export */   \"postReservation\": () => (/* binding */ postReservation)\n/* harmony export */ });\nconst fetchShow = async (showId) => {\n  const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);\n  if (!res.ok) {\n    throw new Error('Something went wrong fetching the given show.');\n  }\n  const show = await res.json();\n  return show;\n};\n\nconst fetchcomments = async (showId) => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/comments?item_id=${showId}`);\n  if (res.status === 400) {\n    throw new Error('This show doesn\\'t have comments yet.');\n  }\n\n  if (!res.ok) {\n    throw new Error('Something went wrong fetching the show\\'s comments');\n  }\n\n  const comments = await res.json();\n  return comments;\n};\nconst fetchReservations = async (showId) => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/reservations?item_id=${showId}`);\n  if (res.status === 400) {\n    throw new Error('This show doesn\\'t have reservations yet.');\n  }\n\n  if (!res.ok) {\n    throw new Error('Something went wrong fetching the show\\'s reservations');\n  }\n\n  const reservations = await res.json();\n  return reservations;\n};\n\nconst postReservation = async (reservation) => {\n  reservation.date_start = new Date(reservation.date_start);\n  reservation.date_end = new Date(reservation.date_end);\n\n  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/reservations', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(reservation),\n  });\n\n  if (!res.ok) {\n    throw new Error('Something went wrong while adding a new reservation.');\n  }\n\n  return true;\n};\n\n\n\n\n//# sourceURL=webpack://webpack_template/./src/modules/reservations-api.js?");

/***/ }),

/***/ "./src/modules/reservations.js":
/*!*************************************!*\
  !*** ./src/modules/reservations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"resCounter\": () => (/* binding */ resCounter)\n/* harmony export */ });\n/* harmony import */ var _reservations_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservations-api.js */ \"./src/modules/reservations-api.js\");\n\r\n\r\nconst reservationsPopUp = document.createElement('div');\r\nreservationsPopUp.classList.add('reservations');\r\n\r\nconst closePopUp = () => {\r\n  document.body.classList.remove('notScrollable');\r\n  document.body.removeChild(reservationsPopUp);\r\n  reservationsPopUp.innerHTML = '';\r\n};\r\n\r\nconst resCounter = (reservationsList) => reservationsList.length;\r\n\r\nconst renderReservations = async (showId, container) => {\r\n  const counterContainer = container.querySelector('#reservations-counter');\r\n  container = container.querySelector('ul');\r\n  container.innerHTML = '';\r\n  try {\r\n    const reservations = await (0,_reservations_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchReservations)(showId);\r\n    counterContainer.innerHTML = resCounter(reservations);\r\n    reservations.forEach((reservation) => {\r\n      const item = document.createElement('li');\r\n      item.innerHTML = `\r\n        ${reservation.date_start} to ${reservation.date_end} by ${reservation.username}\r\n      `;\r\n      container.append(item);\r\n    });\r\n  } catch (error) {\r\n    const item = document.createElement('li');\r\n    item.innerHTML = `\r\n      <span class=\"reservations-error\">${error}</span>\r\n    `;\r\n    container.append(item);\r\n  }\r\n};\r\n\r\nconst addReservation = async (username, dateStart, dateEnd, itemId) => {\r\n  const formStatus = document.getElementById('form-status');\r\n  try {\r\n    await (0,_reservations_api_js__WEBPACK_IMPORTED_MODULE_0__.postReservation)({\r\n      username, date_start: dateStart, date_end: dateEnd, item_id: itemId,\r\n    });\r\n    formStatus.classList.add('success');\r\n    formStatus.innerHTML = 'Reservation Added';\r\n    formStatus.hidden = false;\r\n    setTimeout(() => {\r\n      formStatus.hidden = true;\r\n    }, 2000);\r\n  } catch (error) {\r\n    formStatus.classList.add('error');\r\n    formStatus.innerHTML = error;\r\n    formStatus.hidden = false;\r\n    setTimeout(() => {\r\n      formStatus.hidden = true;\r\n    }, 2000);\r\n  }\r\n};\r\n\r\nconst showPopUp = async (showId) => {\r\n  try {\r\n    document.body.classList.add('notScrollable');\r\n    document.body.append(reservationsPopUp);\r\n    const show = await (0,_reservations_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchShow)(showId);\r\n    reservationsPopUp.innerHTML = `\r\n      <div class=\"reservation-inner\">\r\n        <span id=\"close-reservation-popup\" ><img src=\"./img/close.png\" alt=\"Close Reservation Popup\"/></span>\r\n        <section class=\"reservation-heading\">\r\n          <img src=\"${show.image.original}\" alt=\"${show.name}\" />\r\n          <ul>\r\n            <li><h2>${show.name}</h2></li> \r\n            <li>${show.summary}</li>\r\n            <li>Language: ${show.language}</li>\r\n            <li>Avg. Rating: ${show.rating.average}</li>\r\n            <li>Show type:  ${show.type}</li>\r\n            <li>Genres: ${show.genres.map((genre) => `<span class=\"genre-label\"> ${genre}</span>`)}</li>\r\n            <li>Official Site <a href=\"${show.officialSite}\">🌐</a></li>\r\n            </ul>\r\n        </section>\r\n        <section id=\"show-reservations\">\r\n          <h3>Show's Reservations <span id=\"reservations-counter\" class=\"badge\">0</span></h3>\r\n          <ul class=\"reservations-list\">\r\n          </ul>\r\n        </section>\r\n        <section id=\"reservation-form\">\r\n          <h3>Add a Reservation</h3>\r\n          <form id=\"add-reservation\">\r\n            <span id=\"form-status\"></span>\r\n            <input type=\"text\" name=\"username\" id=\"username\" placeholder=\"Your name\" />\r\n            <input type=\"date\" name=\"date_start\" id=\"date_start\" placeholder=\"Start date\"  />\r\n            <input type=\"date\" name=\"date_end\" id=\"date_end\" placeholder=\"End date\"  />\r\n            <button type=\"submit\">Reserve</button>\r\n          </form>\r\n        </section>\r\n      </div>\r\n    `;\r\n    const reservationsListContainer = reservationsPopUp.querySelector('#show-reservations');\r\n    const reservationForm = reservationsPopUp.querySelector('#add-reservation');\r\n    reservationForm.addEventListener('submit', async (e) => {\r\n      e.preventDefault();\r\n      const { username, date_start: dateStart, date_end: dateEnd } = reservationForm.elements;\r\n      await addReservation(username.value, dateStart.value, dateEnd.value, showId);\r\n      await renderReservations(showId, reservationsListContainer);\r\n      reservationForm.reset();\r\n    });\r\n    renderReservations(showId, reservationsListContainer);\r\n  } catch (error) {\r\n    reservationsPopUp.innerHTML = `\r\n      <div class=\"reservation-inner\">\r\n        <span id=\"close-reservation-popup\" ><img src=\"./img/close.png\" alt=\"Close Reservation Popup\"/></span>\r\n        <p>Something went wrong. Please try again later. </p>\r\n        <small>${error && error}</small>\r\n      </div>\r\n    `;\r\n  }\r\n\r\n  reservationsPopUp.querySelector('#close-reservation-popup').addEventListener('click', closePopUp);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopUp);\n\n//# sourceURL=webpack://webpack_template/./src/modules/reservations.js?");

/***/ }),

/***/ "./assets/icons/close.png":
/*!********************************!*\
  !*** ./assets/icons/close.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/close.png\";\n\n//# sourceURL=webpack://webpack_template/./assets/icons/close.png?");

/***/ }),

/***/ "./assets/icons/fav.png":
/*!******************************!*\
  !*** ./assets/icons/fav.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/fav.png\";\n\n//# sourceURL=webpack://webpack_template/./assets/icons/fav.png?");

/***/ }),

/***/ "./assets/icons/heart.png":
/*!********************************!*\
  !*** ./assets/icons/heart.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/heart.png\";\n\n//# sourceURL=webpack://webpack_template/./assets/icons/heart.png?");

/***/ }),

/***/ "./assets/icons/logo.png":
/*!*******************************!*\
  !*** ./assets/icons/logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/logo.png\";\n\n//# sourceURL=webpack://webpack_template/./assets/icons/logo.png?");

/***/ }),

/***/ "./assets/icons/love.png":
/*!*******************************!*\
  !*** ./assets/icons/love.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/love.png\";\n\n//# sourceURL=webpack://webpack_template/./assets/icons/love.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;