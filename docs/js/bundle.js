/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/class/Copy.ts":
/*!******************************!*\
  !*** ./src/js/class/Copy.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Copy; });\nclass Copy {\n    constructor(recorder) {\n        this.recorder = recorder;\n        this.element = document.querySelector('.record input[type=button]');\n    }\n    init() {\n        this.attach();\n    }\n    attach() {\n        this.element.addEventListener('click', e => this.copy());\n    }\n    copy() {\n        this.recorder.selectRecord();\n        document.execCommand('copy');\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Copy.ts?");

/***/ }),

/***/ "./src/js/class/NotoriousMonster.ts":
/*!******************************************!*\
  !*** ./src/js/class/NotoriousMonster.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotoriousMonster; });\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ \"./src/js/class/Time.ts\");\n\nclass NotoriousMonster {\n    constructor(name, shortName) {\n        this.fullName = name;\n        this.shortName = shortName;\n        this.time = null;\n    }\n    full() {\n        return this.fullName;\n    }\n    short() {\n        return this.shortName;\n    }\n    unix() {\n        return this.time ? this.time.unix() : 0;\n    }\n    kill() {\n        this.time = new _Time__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n    reset() {\n        this.time = null;\n    }\n    text() {\n        return this.time ? `${this.shortName}${this.time.format()}` : '';\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/NotoriousMonster.ts?");

/***/ }),

/***/ "./src/js/class/Record.ts":
/*!********************************!*\
  !*** ./src/js/class/Record.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Record; });\nclass Record {\n    constructor() {\n        this.element = document.querySelector('.record textarea');\n    }\n    output(text) {\n        this.element.value = text;\n    }\n    select() {\n        this.element.select();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Record.ts?");

/***/ }),

/***/ "./src/js/class/Recorder.ts":
/*!**********************************!*\
  !*** ./src/js/class/Recorder.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recorder; });\n/* harmony import */ var _NotoriousMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotoriousMonster */ \"./src/js/class/NotoriousMonster.ts\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Record */ \"./src/js/class/Record.ts\");\n\n\nclass Recorder {\n    constructor() {\n        this.elements = Array.from(document.querySelectorAll('.report input'));\n        this.notoriousMonsters = this.elements.map(element => new _NotoriousMonster__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name, element.dataset.shortName));\n        this.record = new _Record__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n    init() {\n        this.attach();\n    }\n    attach() {\n        this.elements.forEach(element => {\n            element.addEventListener('click', e => {\n                this.report(element);\n                this.output();\n            });\n        });\n    }\n    report(input) {\n        const index = this.elements.indexOf(input);\n        this.notoriousMonsters[index].kill();\n    }\n    sort() {\n        return this.notoriousMonsters.slice().sort((a, b) => a.unix() - b.unix());\n    }\n    text() {\n        return this.sort().map(notoriousMonster => {\n            return notoriousMonster.text();\n        }).filter(text => !!text).join('\\u0020');\n    }\n    output() {\n        this.record.output(this.text());\n    }\n    reset() {\n        this.notoriousMonsters.forEach(notoriousMonster => {\n            notoriousMonster.reset();\n        });\n        this.output();\n    }\n    selectRecord() {\n        this.record.select();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Recorder.ts?");

/***/ }),

/***/ "./src/js/class/Reset.ts":
/*!*******************************!*\
  !*** ./src/js/class/Reset.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reset; });\nclass Reset {\n    constructor(recorder) {\n        this.recorder = recorder;\n        this.element = document.querySelector('.record input[type=reset]');\n    }\n    init() {\n        this.attach();\n    }\n    attach() {\n        this.element.addEventListener('click', e => this.reset());\n    }\n    reset() {\n        this.recorder.reset();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Reset.ts?");

/***/ }),

/***/ "./src/js/class/Time.ts":
/*!******************************!*\
  !*** ./src/js/class/Time.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Time; });\nclass Time {\n    constructor() {\n        this.time = new Date();\n    }\n    unix() {\n        return this.time.getTime();\n    }\n    hour() {\n        return `0${this.time.getHours()}`.slice(-2);\n    }\n    min() {\n        return `0${this.time.getMinutes()}`.slice(-2);\n    }\n    format() {\n        return `${this.hour()}:${this.min()}`;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Time.ts?");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Recorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Recorder */ \"./src/js/class/Recorder.ts\");\n/* harmony import */ var _class_Reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/Reset */ \"./src/js/class/Reset.ts\");\n/* harmony import */ var _class_Copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/Copy */ \"./src/js/class/Copy.ts\");\n\n\n\nconst recorder = new _class_Recorder__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nrecorder.init();\nconst reset = new _class_Reset__WEBPACK_IMPORTED_MODULE_1__[\"default\"](recorder);\nreset.init();\nconst copy = new _class_Copy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](recorder);\ncopy.init();\n\n\n//# sourceURL=webpack:///./src/js/main.ts?");

/***/ })

/******/ });