
          window.__NEXT_REGISTER_PAGE('/contact', function() {
            var comp = module.exports =
webpackJsonp([8],{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(198);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helena/Documents/Helena/domo/components/defaultPage.js';
/* global window */


var DefaultPage = function DefaultPage() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Domo'), _react2.default.createElement('meta', { charset: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/css/main.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('noscript', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/css/noscript.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  })), _react2.default.createElement('script', { src: 'static/js/jquery.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('script', { src: 'static/js/skel.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('script', { src: 'static/js/util.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement('script', { src: 'static/js/main.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  })));
};

exports.default = DefaultPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/defaultPage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/defaultPage.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _contact = __webpack_require__(570);

var _contact2 = _interopRequireDefault(_contact);

var _defaultPage = __webpack_require__(559);

var _defaultPage2 = _interopRequireDefault(_defaultPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helena/Documents/Helena/domo/pages/contact.js?entry';


var contact = function contact() {
  return _react2.default.createElement('div', { id: 'wrapper', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_defaultPage2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(_contact2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('footer', { id: 'footer', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('p', { className: 'copyright', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, '\xA9 Domo')));
};

exports.default = contact;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/pages/contact.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/pages/contact.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/contact")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/helena/Documents/Helena/domo/components/contact.js";

exports.default = function (props) {
  return _react2.default.createElement("article", { id: "contact", className: "panel secondary", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "image", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("img", { src: "static/images/contact.jpg", alt: "", "data-position": "bottom center", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  })), _react2.default.createElement("div", { className: "content", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("ul", { className: "actions spinX", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement("a", { href: "/", className: "button small back", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Back"))), _react2.default.createElement("div", { className: "inner", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Contact")), _react2.default.createElement("form", { method: "post", action: "#", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("div", { className: "field half first", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("label", { "for": "name", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Name"), _react2.default.createElement("input", { type: "text", name: "name", id: "name", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })), _react2.default.createElement("div", { className: "field half", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement("label", { "for": "email", __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Email"), _react2.default.createElement("input", { type: "text", name: "email", id: "email", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  })), _react2.default.createElement("div", { className: "field", __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement("label", { "for": "message", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, "Message"), _react2.default.createElement("textarea", { name: "message", id: "message", rows: "5", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  })), _react2.default.createElement("ul", { className: "actions", __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement("a", { href: "", className: "button submit", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Send Message")))))));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/contact.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/contact.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(569);


/***/ })

},[571]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9jb250YWN0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kZWZhdWx0UGFnZS5qcz82ZDE4MmU1Iiwid2VicGFjazovLy8uL3BhZ2VzL2NvbnRhY3QuanM/NmQxODJlNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QuanM/NmQxODJlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IERlZmF1bHRQYWdlID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkRvbW88L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgXHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XG4gIFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cInN0YXRpYy9jc3MvbWFpbi5jc3NcIiAvPlxuICBcdFx0PG5vc2NyaXB0PjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwic3RhdGljL2Nzcy9ub3NjcmlwdC5jc3NcIiAvPjwvbm9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cInN0YXRpYy9qcy9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHNyYz1cInN0YXRpYy9qcy9za2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJzdGF0aWMvanMvdXRpbC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCBzcmM9XCJzdGF0aWMvanMvbWFpbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvSGVhZD5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChEZWZhdWx0UGFnZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZGVmYXVsdFBhZ2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhY3QnXG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9kZWZhdWx0UGFnZSdcblxuY29uc3QgY29udGFjdCA9ICgpID0+IChcbiAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICA8RGVmYXVsdFBhZ2UgLz5cbiAgICA8Q29udGFjdCAvPlxuICAgIDxmb290ZXIgaWQ9XCJmb290ZXJcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodFwiPiZjb3B5OyBEb21vPC9wPlxuICAgIDwvZm9vdGVyPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKGNvbnRhY3QpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb250YWN0LmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGFydGljbGUgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicGFuZWwgc2Vjb25kYXJ5XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1hZ2VzL2NvbnRhY3QuanBnXCIgYWx0PVwiXCIgZGF0YS1wb3NpdGlvbj1cImJvdHRvbSBjZW50ZXJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImFjdGlvbnMgc3BpblhcIj5cbiAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uIHNtYWxsIGJhY2tcIj5CYWNrPC9hPjwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxoMj5Db250YWN0PC9oMj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIjXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBoYWxmIGZpcnN0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBpZD1cIm5hbWVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaGFsZlwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiIGlkPVwibWVzc2FnZVwiIHJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidXR0b24gc3VibWl0XCI+U2VuZCBNZXNzYWdlPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvYXJ0aWNsZT5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvY29udGFjdC5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTNCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        