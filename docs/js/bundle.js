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

/***/ "./src/js/class/Import.ts":
/*!********************************!*\
  !*** ./src/js/class/Import.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Import; });\n/* harmony import */ var _data_nm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/nm */ \"./src/js/data/nm.ts\");\n\nclass Import {\n    constructor() {\n        this.element = document.querySelector('.import textarea');\n        this.button = document.querySelector('.import input');\n    }\n    init() {\n        this.attach();\n    }\n    attach() {\n        this.button.addEventListener('click', this.import.bind(this));\n    }\n    import() {\n        const arr = this.split().filter(parsed => parsed.index > 0 && parsed.time);\n        console.log(arr);\n    }\n    split() {\n        return this.element.value.split(/[\\u0020\\u3000\\|\\/、]+/).map(text => this.parse(text));\n    }\n    parse(text) {\n        return {\n            index: this.findNameIndex(this.parseName(text)),\n            time: this.parseTime(text)\n        };\n    }\n    parseName(text) {\n        const regExp = /[ぁ-んァ-ケー・ｦ-ﾟ亜-熙]+/;\n        return regExp.test(text) ? text.match(regExp)[0] : null;\n    }\n    parseTime(text) {\n        const regExp = /(\\d{1,2}):?(\\d{2})/;\n        if (regExp.test(text)) {\n            const matchResult = text.match(regExp);\n            return this.adjustTime(parseInt(matchResult[1]), parseInt(matchResult[2]));\n        }\n        else {\n            return null;\n        }\n    }\n    adjustTime(h, m) {\n        const now = new Date();\n        const target = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);\n        if (target.getTime() - now.getTime() > 0) {\n            return new Date(target.setDate(target.getDate() - 1));\n        }\n        else {\n            return target;\n        }\n    }\n    findNameIndex(target) {\n        return _data_nm__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex((names) => names.includes(target));\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Import.ts?");

/***/ }),

/***/ "./src/js/class/NotoriousMonster.ts":
/*!******************************************!*\
  !*** ./src/js/class/NotoriousMonster.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotoriousMonster; });\n/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ \"./src/js/class/Time.ts\");\n/* harmony import */ var _data_kana__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/kana */ \"./src/js/data/kana.ts\");\n\n\nclass NotoriousMonster {\n    constructor(name, shortName) {\n        this.fullName = name;\n        this.shortName = shortName;\n        this.time = null;\n    }\n    full() {\n        return this.fullName;\n    }\n    short(isHalfWidth = true) {\n        return isHalfWidth ? this.halfWidth() : this.shortName;\n    }\n    halfWidth() {\n        return this.shortName.replace(/[ァ-ヶー]/g, m => _data_kana__WEBPACK_IMPORTED_MODULE_1__[\"default\"][m]);\n    }\n    unix() {\n        return this.time ? this.time.unix() : 0;\n    }\n    kill() {\n        this.time = new _Time__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n    reset() {\n        this.time = null;\n    }\n    text() {\n        return this.time ? `${this.short()}${this.time.format()}` : '';\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/NotoriousMonster.ts?");

/***/ }),

/***/ "./src/js/class/NotoriousMonsters.ts":
/*!*******************************************!*\
  !*** ./src/js/class/NotoriousMonsters.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NotoriousMonsters; });\n/* harmony import */ var _NotoriousMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotoriousMonster */ \"./src/js/class/NotoriousMonster.ts\");\n\nclass NotoriousMonsters {\n    constructor(elements) {\n        this.all = elements.map(element => new _NotoriousMonster__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element.name, element.dataset.shortName));\n    }\n    kill(index) {\n        this.all[index].kill();\n    }\n    sort() {\n        return this.all.slice().sort((a, b) => a.unix() - b.unix());\n    }\n    text() {\n        return this.sort().map(notoriousMonster => {\n            return notoriousMonster.text();\n        }).filter(text => !!text).join('\\u0020');\n    }\n    reset() {\n        this.all.forEach(notoriousMonster => {\n            notoriousMonster.reset();\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/NotoriousMonsters.ts?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Recorder; });\n/* harmony import */ var _NotoriousMonsters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotoriousMonsters */ \"./src/js/class/NotoriousMonsters.ts\");\n/* harmony import */ var _Record__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Record */ \"./src/js/class/Record.ts\");\n/* harmony import */ var _Copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Copy */ \"./src/js/class/Copy.ts\");\n/* harmony import */ var _Reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reset */ \"./src/js/class/Reset.ts\");\n/* harmony import */ var _Import__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Import */ \"./src/js/class/Import.ts\");\n\n\n\n\n\nclass Recorder {\n    constructor() {\n        this.elements = Array.from(document.querySelectorAll('.report input'));\n        this.notoriousMonsters = new _NotoriousMonsters__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.elements);\n        this.record = new _Record__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.copy = new _Copy__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n        this.reset = new _Reset__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n        this.import = new _Import__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n    }\n    init() {\n        this.attach();\n        this.copy.init();\n        this.reset.init();\n        this.import.init();\n    }\n    attach() {\n        this.elements.forEach(element => {\n            element.addEventListener('click', e => this.report(element));\n        });\n    }\n    report(input) {\n        const index = this.elements.indexOf(input);\n        this.notoriousMonsters.kill(index);\n        this.output();\n    }\n    output() {\n        this.record.output(this.notoriousMonsters.text());\n    }\n    resetAll() {\n        this.notoriousMonsters.reset();\n        this.output();\n    }\n    selectRecord() {\n        this.record.select();\n    }\n    importReport(reports) {\n        reports.forEach(report => {\n            this.report(this.elements[report.index]);\n        });\n        this.output();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Recorder.ts?");

/***/ }),

/***/ "./src/js/class/Reset.ts":
/*!*******************************!*\
  !*** ./src/js/class/Reset.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Reset; });\nclass Reset {\n    constructor(recorder) {\n        this.recorder = recorder;\n        this.element = document.querySelector('.record input[type=reset]');\n    }\n    init() {\n        this.attach();\n    }\n    attach() {\n        this.element.addEventListener('click', e => this.reset());\n    }\n    reset() {\n        this.recorder.resetAll();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Reset.ts?");

/***/ }),

/***/ "./src/js/class/Time.ts":
/*!******************************!*\
  !*** ./src/js/class/Time.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Time; });\nclass Time {\n    constructor(time = null) {\n        this.time = time ? time : new Date();\n    }\n    unix() {\n        return this.time.getTime();\n    }\n    hour() {\n        return `0${this.time.getHours()}`.slice(-2);\n    }\n    min() {\n        return `0${this.time.getMinutes()}`.slice(-2);\n    }\n    format() {\n        return `${this.hour()}${this.min()}`;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/js/class/Time.ts?");

/***/ }),

/***/ "./src/js/data/kana.ts":
/*!*****************************!*\
  !*** ./src/js/data/kana.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst kanaMap = {\n    ア: \"ｱ\", イ: \"ｲ\", ウ: \"ｳ\", エ: \"ｴ\", オ: \"ｵ\",\n    カ: \"ｶ\", キ: \"ｷ\", ク: \"ｸ\", ケ: \"ｹ\", コ: \"ｺ\",\n    サ: \"ｻ\", シ: \"ｼ\", ス: \"ｽ\", セ: \"ｾ\", ソ: \"ｿ\",\n    タ: \"ﾀ\", チ: \"ﾁ\", ツ: \"ﾂ\", テ: \"ﾃ\", ト: \"ﾄ\",\n    ナ: \"ﾅ\", ニ: \"ﾆ\", ヌ: \"ﾇ\", ネ: \"ﾈ\", ノ: \"ﾉ\",\n    ハ: \"ﾊ\", ヒ: \"ﾋ\", フ: \"ﾌ\", ヘ: \"ﾍ\", ホ: \"ﾎ\",\n    マ: \"ﾏ\", ミ: \"ﾐ\", ム: \"ﾑ\", メ: \"ﾒ\", モ: \"ﾓ\",\n    ヤ: \"ﾔ\", ユ: \"ﾕ\", ヨ: \"ﾖ\",\n    ラ: \"ﾗ\", リ: \"ﾘ\", ル: \"ﾙ\", レ: \"ﾚ\", ロ: \"ﾛ\",\n    ワ: \"ﾜ\", ヲ: \"ｦ\", ン: \"ﾝ\", ー: \"ｰ\",\n    ヴ: \"ｳﾞ\",\n    ガ: \"ｶﾞ\", ギ: \"ｷﾞ\", グ: \"ｸﾞ\", ゲ: \"ｹﾞ\", ゴ: \"ｺﾞ\",\n    ザ: \"ｻﾞ\", ジ: \"ｼﾞ\", ズ: \"ｽﾞ\", ゼ: \"ｾﾞ\", ゾ: \"ｿﾞ\",\n    ダ: \"ﾀﾞ\", ヂ: \"ﾁﾞ\", ヅ: \"ﾂﾞ\", デ: \"ﾃﾞ\", ド: \"ﾄﾞ\",\n    バ: \"ﾊﾞ\", ビ: \"ﾋﾞ\", ブ: \"ﾌﾞ\", ベ: \"ﾍﾞ\", ボ: \"ﾎﾞ\",\n    パ: \"ﾊﾟ\", ピ: \"ﾋﾟ\", プ: \"ﾌﾟ\", ペ: \"ﾍﾟ\", ポ: \"ﾎﾟ\",\n    ァ: \"ｧ\", ィ: \"ｨ\", ゥ: \"ｩ\", ェ: \"ｪ\", ォ: \"ｫ\",\n    ャ: \"ｬ\", ュ: \"ｭ\", ョ: \"ｮ\", ッ: \"ｯ\", ヮ: \"ヮ\",\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (kanaMap);\n\n\n//# sourceURL=webpack:///./src/js/data/kana.ts?");

/***/ }),

/***/ "./src/js/data/nm.ts":
/*!***************************!*\
  !*** ./src/js/data/nm.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst nm = [\n    [\n        'サボ',\n        'サボテン',\n        'ｻﾎﾞ',\n        'ｻﾎﾞﾃﾝ'\n    ],\n    [\n        'ロード',\n        'タコ',\n        'ﾛｰﾄﾞ',\n        'ﾀｺ'\n    ],\n    [\n        'テレス',\n        'ﾃﾚｽ'\n    ],\n    [\n        'エンペラー',\n        'トンボ',\n        'エンペ',\n        'エンペラ',\n        'ｴﾝﾍﾟﾗｰ',\n        'ﾄﾝﾎﾞ',\n        'ｴﾝﾍﾟ',\n        'ｴﾝﾍﾟﾗ'\n    ],\n    [\n        'カリスト',\n        'クマ',\n        '熊',\n        'くま',\n        'ｶﾘｽﾄ',\n        'ｸﾏ'\n    ],\n    [\n        'ナンバーズ',\n        'ナンバ',\n        'ﾅﾝﾊﾞｰｽﾞ',\n        'ﾅﾝﾊﾞ'\n    ],\n    [\n        'ジャハン',\n        '雲',\n        'くも',\n        'くもじい',\n        'ｼﾞｬﾊﾝﾅﾑ',\n        'ｼﾞｬﾊﾝﾞ'\n    ],\n    [\n        'アミメ',\n        'アミ',\n        'アメミ',\n        '恐竜',\n        'ｱﾐﾒｯﾄ',\n        'ｱﾐﾒﾞ',\n        'ｱﾒﾐ'\n    ],\n    [\n        'カイム',\n        'ｶｲﾑ'\n    ],\n    [\n        'ボンバ',\n        'どーも',\n        'ﾎﾞﾝﾊﾞ'\n    ],\n    [\n        'セルケト',\n        '蠍',\n        'サソリ',\n        'ｾﾙｹﾄ',\n        'ｻｿﾘ'\n    ],\n    [\n        'ジュリカ',\n        'モルボル',\n        'ｼﾞｭﾘｶ',\n        'ﾓﾙﾎﾞﾙ'\n    ],\n    [\n        'ホワイト',\n        'ライダー',\n        'Wライダー',\n        'Wライダ',\n        'ﾎﾜｲﾄ',\n        'ﾗｲﾀﾞｰ',\n        'Wﾗｲﾀﾞｰ',\n        'Wﾗｲﾀﾞ'\n    ],\n    [\n        'ポリュ',\n        '巨人',\n        'ﾎﾟﾘｭ'\n    ],\n    [\n        'ストライダー',\n        '鳥',\n        'シームルグ',\n        'スト',\n        'ｽﾄﾗｲﾀﾞｰ',\n        'ｼｰﾑﾙｸﾞ',\n        'ｽﾄ'\n    ],\n    [\n        'ハズマット',\n        'ハズマ',\n        'ボム',\n        'ﾊｽﾞﾏｯﾄ',\n        'ﾊｽﾞﾏ',\n        'ﾎﾞﾑ'\n    ],\n    [\n        'ファヴ',\n        '竜',\n        'ﾌｧｳﾞﾆﾙ',\n        'ﾌｧｳﾞ'\n    ],\n    [\n        'アマ',\n        'アマロ',\n        'ｱﾏ',\n        'ｱﾏﾛｯｸ',\n        'ｱﾏﾛ'\n    ],\n    [\n        'ラマ',\n        'ラマシュ',\n        'ﾗﾏｼｭﾄｩ',\n        'ﾗﾏ',\n        'ﾗﾏｼｭ'\n    ],\n    [\n        'バズズ',\n        'パズ',\n        'ﾊﾟｽﾞｽﾞ',\n        'ﾊﾞｽﾞｽﾞ',\n        'ﾊﾟｽﾞ'\n    ]\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (nm);\n\n\n//# sourceURL=webpack:///./src/js/data/nm.ts?");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_Recorder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/Recorder */ \"./src/js/class/Recorder.ts\");\n\nconst recorder = new _class_Recorder__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nrecorder.init();\n\n\n//# sourceURL=webpack:///./src/js/main.ts?");

/***/ })

/******/ });