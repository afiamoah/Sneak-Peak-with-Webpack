/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  font-family: sans-serif, Verdana;\\r\\n}\\r\\n\\r\\n.main-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 500px;\\r\\n  height: auto;\\r\\n  margin: auto auto;\\r\\n  margin-top: 15%;\\r\\n  background-color: #8f8f8f;\\r\\n  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\\r\\n}\\r\\n\\r\\n.list-items {\\r\\n  width: 400px;\\r\\n  font-size: larger;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.list-items:focus {\\r\\n  outline: none;\\r\\n  background-color: lightyellow;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.Title {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  background-color: white;\\r\\n  margin-bottom: 2px;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  width: 100%;\\r\\n  background-color: white;\\r\\n  margin-bottom: 2px;\\r\\n}\\r\\n\\r\\n.NewItem {\\r\\n  border: none;\\r\\n  font-size: larger;\\r\\n  font-style: italic;\\r\\n  padding: 20px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.NewItem:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.DisplayItems {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.TodoList {\\r\\n  background-color: white;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  padding: 20px;\\r\\n  margin-bottom: 2px;\\r\\n}\\r\\n\\r\\n.TodoList:focus {\\r\\n  background-color: yellow;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.CompleteAll {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  padding: 20px;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  font-size: larger;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.fa-trash {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lib/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://lib/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://lib/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://lib/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://lib/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_ClearItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ClearItems.js */ \"./src/modules/ClearItems.js\");\n/* harmony import */ var _modules_idGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/idGenerator.js */ \"./src/modules/idGenerator.js\");\n/* harmony import */ var _modules_EditTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/EditTodo.js */ \"./src/modules/EditTodo.js\");\n/* harmony import */ var _modules_ShowItems_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ShowItems.js */ \"./src/modules/ShowItems.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst DisplayItems=document.querySelector('.DisplayItems')\r\nconst GetItems=localStorage.getItem('Todo')\r\nconst DeleteItem=document.querySelectorAll('.RemoveItems')\r\n// const DeleteItems=document.querySelector('.')\r\nconst Items=document.querySelector('.NewItem')\r\nlet ItemsContainer=[]\r\nlet holdItems={}\r\nlet Index=1\r\nlet count=1;\r\nconst Validate = () => {\r\nif(Items.value !==''){\r\n   return true;\r\n}else{\r\n   return false;\r\n}\r\n}\r\n\r\nconst GetCount = () => {\r\n    const getCount = JSON.parse(localStorage.getItem('Todo'));\r\n    if(getCount != null){\r\n    count=count+getCount.length      \r\n      return count;\r\n    }else{\r\n    count=Index;       \r\n    }\r\n}\r\n\r\nconst ShowComplete = () =>{\r\n   const ListItems=JSON.parse(localStorage.getItem('Todo'))\r\n   ListItems.forEach((item)=>{\r\nif(item.Completed){\r\n    document.querySelectorAll('[data-completed=\"true\"]').forEach((Item)=>{\r\n        Item.style.textDecoration = \"line-through\";\r\n        Item.checked=true\r\n    })\r\n}\r\n   })\r\n  }\r\n\r\nconst ShowAllItems = () =>{\r\n   DisplayItems.innerHTML='';\r\n   if(GetItems !== null){\r\n    const AllItems=JSON.parse(localStorage.getItem('Todo'))\r\n    ItemsContainer=AllItems;\r\n    AllItems.forEach((item,index) => {\r\n       DisplayItems.innerHTML+= `\r\n       <div class=\"TodoList\">\r\n       <div class=\"form\">\r\n    <input type=\"checkbox\" placeholder=\"...\" class=\"cancelItem\" id=\"${index}\" data-completed=\"${item.Completed}\"> \r\n    <input type=\"text\" class=\"list-items\" value=\"${item.Description}\" id=\"${index}\" data-completed=\"${item.Completed}\">\r\n   </div>\r\n   <span class=\"RemoveItems\" button id=\"${index}\"><i  id=\"del+${index}\" class=\"fa fa-trash\" class=\"del\" name=\"del\" aria-hidden=\"true\"></i><i id=\"edit+${index}\" class=\"fas fa-ellipsis-v\"></i></span>\r\n   </div>\r\n           `  \r\n          \r\n    });\r\n    ShowComplete()\r\n   }else{\r\n       []\r\n   }\r\n}\r\n\r\n\r\n\r\nconst SaveItems= ()=>{\r\nGetCount();\r\nholdItems = {\r\nid:count,\r\nDescription:Items.value,\r\nCompleted:false\r\n}\r\nItemsContainer.push(holdItems)\r\nlocalStorage.setItem('Todo',JSON.stringify(ItemsContainer))\r\n}\r\n\r\nconst DisplayAllItems = () =>{\r\n   Items.addEventListener('keypress',(event)=>{\r\n   if(event.key == 'Enter'){\r\n       if(Validate()){\r\n           SaveItems();\r\n           (0,_modules_ShowItems_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n   }\r\n   }\r\n   })\r\n}\r\n\r\n\r\nconst RemoveItem= () =>{ \r\n   document.querySelectorAll('.RemoveItems').forEach((itemtoRemove)=>{\r\n       itemtoRemove.addEventListener('click',(event)=>{\r\n       const SelectedItem=event.target.id;\r\n       const MyItems=ItemsContainer.filter((List,index)=>{\r\n           if(SelectedItem != index){\r\n           return List\r\n           }\r\n       })\r\n       localStorage.setItem('Todo',JSON.stringify(MyItems))\r\n       ;(0,_modules_idGenerator_js__WEBPACK_IMPORTED_MODULE_2__.SortItems)()\r\n       ;(0,_modules_ShowItems_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n       })\r\n   })  \r\n}\r\n\r\n\r\n\r\n\r\n\r\nconst CancelTask= () =>{  \r\ndocument.querySelectorAll('.cancelItem').forEach((cancelledItem)=>{\r\ncancelledItem.addEventListener('change',(event)=>{\r\n   const SelectedItem=event.target.id;\r\n   if(event.target.checked){\r\n   document.querySelectorAll('.list-items').forEach((Item,index)=>{\r\n   if(event.target.id == index){\r\n   Item.style.textDecoration = \"line-through\"; \r\n   (0,_modules_ClearItems_js__WEBPACK_IMPORTED_MODULE_1__.CompletedTrue)(event)\r\n   }\r\n   })   \r\n   };\r\n   })\r\n   })\r\n   }\r\n\r\nconst UncheckTask= () =>{  \r\n   document.querySelectorAll('.cancelItem').forEach((cancelledItem)=>{\r\n   cancelledItem.addEventListener('change',(event)=>{\r\n       const SelectedItem=event.target.id;\r\n       if(!event.target.checked){\r\n           document.querySelectorAll('.list-items').forEach((Item,index)=>{\r\n           if(event.target.id == index){               \r\n           Item.style.textDecoration = \"none\"; \r\n           (0,_modules_ClearItems_js__WEBPACK_IMPORTED_MODULE_1__.CompletedFalse)(event)      \r\n   }\r\n   })   \r\n   };\r\n   })\r\n   })\r\n   }\r\n\r\nconst ClearAllCompletedTask = () =>{\r\ndocument.querySelector('.ClearAll').addEventListener('click',() =>{\r\n   const AllList=JSON.parse(localStorage.getItem('Todo'));\r\n   const MyItems=AllList.filter((List)=>{\r\n       if(List.Completed !=true){\r\n       return List\r\n       }\r\n   })\r\n   localStorage.setItem('Todo',JSON.stringify(MyItems))\r\n    ;(0,_modules_idGenerator_js__WEBPACK_IMPORTED_MODULE_2__.SortItems)();\r\n   (0,_modules_ShowItems_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n   document.querySelector('.ClearAll').style.textDecoration= \"line-through\";\r\n   })\r\n\r\n   }\r\nconst ChangeColor = () =>{\r\n   document.querySelectorAll('.list-items').forEach((container)=>{   \r\n       container.addEventListener('focus',(event)=>{\r\n           document.querySelectorAll('.TodoList').forEach((Item,index)=>{   \r\n               if(event.target.id == index){          \r\n               Item.style.background=\"lightyellow\"\r\n               document.getElementById(`del+${index}`).style.visibility=\"visible\"\r\n               document.getElementById(`edit+${index}`).style.visibility=\"hidden\"\r\n\r\n               }\r\n       })\r\n\r\n   })\r\n})\r\n\r\ndocument.querySelectorAll('.list-items').forEach((container)=>{   \r\n   container.addEventListener('focusout',(event)=>{\r\n       document.querySelectorAll('.TodoList').forEach((Item,index)=>{   \r\n           if(event.target.id == index){          \r\n           Item.style.background=\"white\"\r\n           document.getElementById(`del+${index}`).style.visibility=\"hidden\"\r\n           document.getElementById(`edit+${index}`).style.visibility=\"visible\"\r\n           \r\n           }\r\n   })\r\n\r\n})\r\n})\r\n}\r\n\r\n\r\nDisplayAllItems();\r\nShowAllItems();\r\nRemoveItem()\r\nCancelTask()\r\nUncheckTask()\r\nClearAllCompletedTask();\r\nChangeColor()\r\n;(0,_modules_EditTodo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n//https://github.com/rbreva/ToDoList/issues/2#issue-1392539855\r\n\r\n\r\n\n\n//# sourceURL=webpack://lib/./src/index.js?");

/***/ }),

/***/ "./src/modules/ClearItems.js":
/*!***********************************!*\
  !*** ./src/modules/ClearItems.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CompletedFalse\": () => (/* binding */ CompletedFalse),\n/* harmony export */   \"CompletedTrue\": () => (/* binding */ CompletedTrue)\n/* harmony export */ });\nconst CompletedTrue = (event) =>{ \r\n    const getItem=JSON.parse(localStorage.getItem('Todo'));\r\n    getItem.forEach((item,id) =>{\r\n        if(event.target.id == id){\r\n            item.Completed = true;\r\n            return item\r\n        }\r\n      })\r\n      localStorage.setItem('Todo',JSON.stringify(getItem))  \r\n \r\n }\r\n\r\n const CompletedFalse = (event) =>{ \r\n    const getItem=JSON.parse(localStorage.getItem('Todo'));\r\n    getItem.forEach((item,id) =>{\r\n        if(event.target.id == id){\r\n            item.Completed = false;\r\n            return item\r\n        }\r\n      })\r\n      localStorage.setItem('Todo',JSON.stringify(getItem))  \r\n \r\n }\n\n//# sourceURL=webpack://lib/./src/modules/ClearItems.js?");

/***/ }),

/***/ "./src/modules/EditTodo.js":
/*!*********************************!*\
  !*** ./src/modules/EditTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EditItems)\n/* harmony export */ });\n/* harmony import */ var _ShowItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowItems.js */ \"./src/modules/ShowItems.js\");\n\r\n\r\nfunction EditItems(){\r\n    document.querySelectorAll('.list-items').forEach((container)=>{  \r\n    container.addEventListener('keypress',(event)=>{\r\n        if(event.key == 'Enter'){\r\n         const MyItems = JSON.parse(localStorage.getItem('Todo'))\r\n          MyItems.forEach((List,index)=>{\r\n           if(event.target.id == index){\r\n            List.Description = event.target.value;\r\n            return List\r\n           }\r\n         })\r\n         localStorage.setItem('Todo',JSON.stringify(MyItems))\r\n         ;(0,_ShowItems_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        }\r\n })\r\n })  \r\n }\n\n//# sourceURL=webpack://lib/./src/modules/EditTodo.js?");

/***/ }),

/***/ "./src/modules/ShowItems.js":
/*!**********************************!*\
  !*** ./src/modules/ShowItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowItems)\n/* harmony export */ });\nconst DisplayItems=document.querySelector('.DisplayItems')\r\nlet ItemsContainer=[]\r\n\r\nfunction ShowItems() {\r\n    window.location.reload();\r\n    DisplayItems.innerHTML='';\r\n    const AllItems=JSON.parse(localStorage.getItem('Todo'))\r\n    ItemsContainer=AllItems;\r\n    ItemsContainer.forEach((item,index) => {\r\n    DisplayItems.innerHTML+= `\r\n    <div class=\"TodoList\" data-completed=\"${item.Completed}\">\r\n    <div class=\"form\">\r\n <input type=\"checkbox\" placeholder=\"...\" class=\"cancelItem\" id=\"${index}\"> \r\n    <input type=\"text\" class=\"list-items\" value=\"${item.Description}\" id=\"${index}\">\r\n </div>\r\n    <span class=\"RemoveItems\" button id=\"${index}\"><i  id=\"del+${index}\" class=\"fa fa-trash\" aria-hidden=\"true\"></i><i id=\"edit+${index}\" class=\"fas fa-ellipsis-v\"></i></span>\r\n </div>` \r\n     });   \r\n\r\n }\r\n\r\n\n\n//# sourceURL=webpack://lib/./src/modules/ShowItems.js?");

/***/ }),

/***/ "./src/modules/idGenerator.js":
/*!************************************!*\
  !*** ./src/modules/idGenerator.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetCount\": () => (/* binding */ GetCount),\n/* harmony export */   \"SortItems\": () => (/* binding */ SortItems)\n/* harmony export */ });\n\r\nlet Index=1\r\nlet count=1;\r\nlet ItemsContainer=[]\r\nconst GetCount = () => {\r\n    const getCount = JSON.parse(localStorage.getItem('Todo'));\r\n    if(getCount != null){\r\n    count=count+getCount.length      \r\n      return count;\r\n    }else{\r\n    count=Index;       \r\n    }\r\n}\r\n\r\n\r\n const SortItems = () =>{\r\n        const MyItems = JSON.parse(localStorage.getItem('Todo'));\r\n        ItemsContainer=MyItems\r\n       for(let x=0;x<ItemsContainer.length;x++){\r\n        ItemsContainer[x].id=x+1\r\n       }  \r\n        localStorage.setItem('Todo',JSON.stringify(ItemsContainer))    \r\n    \r\n      }\r\n  \n\n//# sourceURL=webpack://lib/./src/modules/idGenerator.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});