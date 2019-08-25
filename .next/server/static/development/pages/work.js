module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/default-page.js":
/*!************************************!*\
  !*** ./components/default-page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/helena/Documents/Helena/domo/components/default-page.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* global window */



const DefaultPage = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Domo"), __jsx("meta", {
  charset: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, user-scalable=no",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "static/css/main.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("noscript", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("link", {
  rel: "stylesheet",
  href: "static/css/noscript.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
})), __jsx("script", {
  src: "static/js/jquery.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("script", {
  src: "static/js/skel.min.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("script", {
  src: "static/js/util.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("script", {
  src: "static/js/main.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (DefaultPage);

/***/ }),

/***/ "./components/work.js":
/*!****************************!*\
  !*** ./components/work.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/helena/Documents/Helena/domo/components/work.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (props => __jsx("article", {
  id: "work",
  className: "jsx-2456757485" + " " + "panel secondary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2456757485" + " " + "image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  src: "static/images/sdesk.jpg",
  alt: "",
  "data-position": "center center",
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2456757485" + " " + "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-2456757485" + " " + "actions spinX",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2456757485" + " " + "button small back",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Back"))), __jsx("div", {
  className: "jsx-2456757485" + " " + "inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("header", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Work"), __jsx("p", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Co-founder and COO in Kyso", __jsx("br", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), "Techstars NYC'18")), __jsx("p", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Kyso is One click platform jupyter notebook platform in the cloud. I have an awesome team around me, great enviroment to go and work everyday."), __jsx("p", {
  className: "jsx-2456757485",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2456757485",
  __self: undefined
}, ".image.jsx-2456757485{width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZWxlbmEvRG9jdW1lbnRzL0hlbGVuYS9kb21vL2NvbXBvbmVudHMvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmdCLEFBR21CLFdBRWIsWUFBQyIsImZpbGUiOiIvVXNlcnMvaGVsZW5hL0RvY3VtZW50cy9IZWxlbmEvZG9tby9jb21wb25lbnRzL3dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8YXJ0aWNsZSBpZD1cIndvcmtcIiBjbGFzc05hbWU9XCJwYW5lbCBzZWNvbmRhcnlcIj5cblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG5cdFx0XHQ8aW1nIHNyYz1cInN0YXRpYy9pbWFnZXMvc2Rlc2suanBnXCIgYWx0PVwiXCIgZGF0YS1wb3NpdGlvbj1cImNlbnRlciBjZW50ZXJcIiAvPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0PHVsIGNsYXNzTmFtZT1cImFjdGlvbnMgc3BpblhcIj5cblx0XHRcdFx0PGxpPjxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uIHNtYWxsIGJhY2tcIj5CYWNrPC9hPjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuXHRcdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHRcdDxoMj5Xb3JrPC9oMj5cblx0XHRcdFx0XHQ8cD5Dby1mb3VuZGVyIGFuZCBDT08gaW4gS3lzbzxiciAvPlxuXHRcdFx0XHRcdFRlY2hzdGFycyBOWUMnMTg8L3A+XG5cdFx0XHRcdDwvaGVhZGVyPlxuXHRcdFx0XHQ8cD5LeXNvIGlzIE9uZSBjbGljayBwbGF0Zm9ybSBqdXB5dGVyIG5vdGVib29rIHBsYXRmb3JtIGluIHRoZSBjbG91ZC4gSSBoYXZlIGFuIGF3ZXNvbWUgdGVhbSBhcm91bmQgbWUsIGdyZWF0IGVudmlyb21lbnQgdG8gZ28gYW5kIHdvcmsgZXZlcnlkYXkuPC9wPlxuXHRcdFx0XHQ8cD48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaW1hZ2V7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuXHQ8L2FydGljbGU+XG4pXG4iXX0= */\n/*@ sourceURL=/Users/helena/Documents/Helena/domo/components/work.js */")));

/***/ }),

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/work */ "./components/work.js");
/* harmony import */ var _components_default_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/default-page */ "./components/default-page.js");
var _jsxFileName = "/Users/helena/Documents/Helena/domo/pages/work.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const about = () => __jsx("div", {
  id: "wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_components_default_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_components_work__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("footer", {
  id: "footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("p", {
  className: "copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "\xA9 Domo")));

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/work.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/helena/Documents/Helena/domo/pages/work.js */"./pages/work.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map