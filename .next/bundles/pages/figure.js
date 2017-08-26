
          window.__NEXT_REGISTER_PAGE('/figure', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _NavbarFigure = __webpack_require__(557);

var _NavbarFigure2 = _interopRequireDefault(_NavbarFigure);

var _Figure = __webpack_require__(555);

var _Figure2 = _interopRequireDefault(_Figure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helena/Documents/Helena/domo/pages/figure.js?entry';

var contact = function contact() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_NavbarFigure2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_Figure2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

exports.default = contact;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/pages/figure.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/pages/figure.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
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
    })(module.exports.default || module.exports, "/figure")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(201);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helena/Documents/Helena/domo/components/DefaultPage.js';
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
  }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('link', { href: '/static/css/base.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('script', { type: 'text/javascript', src: 'https://cdn.plot.ly/plotly-latest.min.js', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('link', { href: '/static/css/font-awesome-light.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { href: '/static/css/font-awesome-brands.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { href: '/static/css/font-awesome-core.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement('link', { href: '/static/css/github-syntax.css', rel: 'stylesheet', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

exports.default = DefaultPage;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/DefaultPage.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/DefaultPage.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(552);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _theme = __webpack_require__(558);

var _theme2 = _interopRequireDefault(_theme);

var _NavbarAbout = __webpack_require__(556);

var _NavbarAbout2 = _interopRequireDefault(_NavbarAbout);

var _DefaultPage = __webpack_require__(554);

var _DefaultPage2 = _interopRequireDefault(_DefaultPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helena/Documents/Helena/domo/components/Figure.js';

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'page-content', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_DefaultPage2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('index', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('div', { className: 'mainbox', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', { className: 'package', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('i', { className: 'fal fa-clone fa-3x', 'aria-hidden': 'true', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement('p', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('div', { className: 'name', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, 'A'), _react2.default.createElement('hr', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('img', { className: 'imgpackage', src: '../static/images/1.png', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }))))), _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('div', { className: 'package', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement('i', { className: 'fal fa-heart fa-3x', 'aria-hidden': 'true', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  })), _react2.default.createElement('p', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement('div', { className: 'name', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Great'), _react2.default.createElement('hr', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement('img', { className: 'imgpackage', src: '../static/images/2.png', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }))))), _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement('div', { className: 'package', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('i', { className: 'fal fa-map-signs fa-3x', 'aria-hidden': 'true', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  })), _react2.default.createElement('p', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement('div', { className: 'name', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, 'Way'), _react2.default.createElement('hr', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement('img', { className: 'imgpackage', src: '../static/images/4.png', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }))))), _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('div', { className: 'package', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement('i', { className: 'fal fa-neuter fa-3x', 'aria-hidden': 'true', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  })), _react2.default.createElement('p', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement('div', { className: 'name', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, 'To'), _react2.default.createElement('hr', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _react2.default.createElement('img', { className: 'imgpackage', src: '../static/images/5.png', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }))))), _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement('div', { className: 'package', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement('i', { className: 'fal fa-search fa-3x', 'aria-hidden': 'true', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  })), _react2.default.createElement('p', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), _react2.default.createElement('div', { className: 'name', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, 'Search'), _react2.default.createElement('hr', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement('img', { className: 'imgpackage', src: '../static/images/7.png', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }))))), _react2.default.createElement('div', { className: 'text-block', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement('div', { className: 'package', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement('a', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement('i', { className: 'fal fa-rocket fa-3x', 'aria-hidden': 'true', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  })), _react2.default.createElement('p', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), _react2.default.createElement('div', { className: 'name', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, 'Rockets'), _react2.default.createElement('hr', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), _react2.default.createElement('ul', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement('li', {
    'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement('img', { className: 'imgpackage', src: '../static/images/3.jpg', 'data-jsx': 3440518075,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }))))))), _react2.default.createElement(_style2.default, {
    styleId: 3440518075,
    css: '.mainbox[data-jsx="3440518075"]{margin-top:100px;display:block;margin-left:auto;margin-right:auto;width:1040px}.package[data-jsx="3440518075"]{font-size:14px;box-sizing:border-box;width:17rem;height:25rem;border-radius:3px;float:left;padding:24px;-webkit-text-align:center;text-align:center;margin-right:20px;margin-bottom:100px;border:2px solid #eaecee;background-color:#fff}.package[data-jsx="3440518075"]:hover,.name[data-jsx="3440518075"]:hover{color:#ccc}.imgpackage[data-jsx="3440518075"]{margin-top:1rem;width:100%;height:auto}.name[data-jsx="3440518075"]{color:#565656;font-size:1.5rem;margin-top:-5px;height:50px}ul[data-jsx="3440518075"]{list-style:none;padding:0;-webkit-text-align:left;text-align:left}li.black[data-jsx="3440518075"]{color:#565656}li[data-jsx="3440518075"]::before{content:"\f00c";font-size:1.3rem;margin-right:3px}@media screen and (max-width:' + _theme2.default.phone + '){.pricing-wrapper[data-jsx="3440518075"]{margin-top:20px;display:block;margin-left:auto;margin-right:auto;width:auto;height:auto}.package[data-jsx="3440518075"]{float:none;margin:0;margin-bottom:20px;width:95%;margin-left:auto;margin-right:auto}p[data-jsx="3440518075"]{font-size:1.9em;line-height:3em;-webkit-letter-spacing:-0.07em;-moz-letter-spacing:-0.07em;-ms-letter-spacing:-0.07em;letter-spacing:-0.07em;margin-bottom:0;float:left;-webkit-text-decoration:none;text-decoration:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmlndXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGZ0IsQUFJd0IsQUFFRixBQUlyQixBQUVzQixBQUVGLEFBRUUsQUFHdEIsQUFFc0IsQUFJQSxBQUVMLEFBRUssV0FuQmxCLENBaUI2QixFQVI3QixDQUx3QyxDQVJNLENBTVYsQUFJRCxBQUtPLEFBSUgsQUFJRSxDQXpCRCxJQXVCZSxNQVhHLENBSkgsR0FhUSxDQXJCQyxBQVVELENBZVEsQ0FSTCxJQWZELEdBTUwsQUFlWSxRQWJVLEFBV00sQ0FyQkMsQ0FFSixDQWVkLEFBTXlCLFVBYlQsR0FSdUIsR0FtQkosQ0FyQkcsQUFZOUMsQ0FXMEQsVUFGSSxHQXJCWCxDQUVjLEtBcUJGLElBRkksR0FuQmtCLGNBQXlCLG9DQXVCL0UsVUF2QndHLE9BdUJ0RixZQXZCaUgsQUF1QnJGLHFCQXZCcUgsMEJBQTZCLEtBdUI3SSxrQkF2QmtKIiwiZmlsZSI6ImNvbXBvbmVudHMvRmlndXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oZWxlbmEvRG9jdW1lbnRzL0hlbGVuYS9kb21vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9OYXZiYXJBYm91dCdcbmltcG9ydCBEZWZhdWx0UGFnZSBmcm9tICcuL0RlZmF1bHRQYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICA8RGVmYXVsdFBhZ2UgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxpbmRleCAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZVwiPlxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFsIGZhLWNsb25lIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz48L2E+XG4gICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5BPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1ncGFja2FnZVwiIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvMS5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZVwiPlxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFsIGZhLWhlYXJ0IGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz48L2E+XG4gICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5HcmVhdDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhY2thZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzLzIucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VcIj5cbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhbCBmYS1tYXAtc2lnbnMgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPjwvYT5cbiAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPldheTwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhY2thZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzLzQucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VcIj5cbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhbCBmYS1uZXV0ZXIgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPjwvYT5cbiAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlRvPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1ncGFja2FnZVwiIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvNS5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZVwiPlxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFsIGZhLXNlYXJjaCBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+PC9hPlxuICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+U2VhcmNoPC9kaXY+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1ncGFja2FnZVwiIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvNy5wbmdcIiAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFja2FnZVwiPlxuICAgICAgICAgICAgPGE+PGkgY2xhc3NOYW1lPVwiZmFsIGZhLXJvY2tldCBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+PC9hPlxuICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+Um9ja2V0czwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhY2thZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzLzMuanBnXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAubWFpbmJveCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogMTA0MHB4O1xuICAgIH1cblxuICAgIC5wYWNrYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogMTdyZW07XG4gICAgICBoZWlnaHQ6IDI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWFlY2VlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAucGFja2FnZTpob3ZlcixcbiAgICAubmFtZTpob3ZlcntcbiAgICAgIGNvbG9yOiNjY2NcbiAgICB9XG5cbiAgICAuaW1ncGFja2FnZXtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBjb2xvcjogIzU2NTY1NjtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgbGkuYmxhY2t7XG4gICAgICBjb2xvcjojNTY1NjU2XG4gICAgfVxuXG4gICAgbGk6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlxcZjAwY1wiO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3RoZW1lLnBob25lfSkge1xuXG4gICAgLnByaWNpbmctd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5wYWNrYWdle1xuICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgd2lkdGg6IDk1JTtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjllbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzZW07XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDdlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/Figure.js */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/Figure.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/Figure.js"); } } })();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(552);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/helena/Documents/Helena/domo/components/NavbarAbout.js";

exports.default = function (props) {
  return _react2.default.createElement("div", {
    "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("header", {
    "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "wrapper", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("nav", {
    "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("a", { className: "brand", href: "./index", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "HELENA DOMO")), _react2.default.createElement("div", { className: "navbarR", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("div", { className: "underline", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { className: "ccc", href: "../about", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")), _react2.default.createElement("div", { className: "line", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("a", { href: "../contact", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Contact")), _react2.default.createElement("div", {
    "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement("a", { href: "../figure", "data-jsx": 4068845673,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Figure out"))))), _react2.default.createElement(_style2.default, {
    styleId: 4068845673,
    css: "header[data-jsx=\"4068845673\"]{min-height:3.3em;margin-top:1em;position:relative;font-family:\"Lucida Sans Typewriter\",\"Lucida Console\",Monaco,\"Bitstream Vera Sans Mono\",monospace}.wrapper[data-jsx=\"4068845673\"]{max-width:60em;margin-right:auto;margin-left:auto}.brand[data-jsx=\"4068845673\"]{margin-left:1.2em;font-size:1.9em;line-height:3em;-webkit-letter-spacing:-0.07em;-moz-letter-spacing:-0.07em;-ms-letter-spacing:-0.07em;letter-spacing:-0.07em;margin-bottom:0;float:left;-webkit-text-decoration:none;text-decoration:none}.navbarR[data-jsx=\"4068845673\"]{float:right;margin-top:1.2em;margin-right:2em;font-family:\"Lucida Sans Typewriter\",\"Lucida Console\",Monaco,\"Bitstream Vera Sans Mono\",monospace}a[data-jsx=\"4068845673\"],a[data-jsx=\"4068845673\"]:visited{color:#424242;-webkit-text-decoration:none;text-decoration:none}a[data-jsx=\"4068845673\"]:hover{color:#ccc}a.ccc[data-jsx=\"4068845673\"]{color:#ccc}.underline[data-jsx=\"4068845673\"]{color:#ccc;border-bottom:1px solid currentColor;height:25px;width:3em;margin-bottom:10px}.line[data-jsx=\"4068845673\"]{margin-bottom:10px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyQWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJnQixBQUl5QixBQUVGLEFBRUUsQUFFTCxBQUVFLEFBRUgsQUFFQSxBQUVBLEFBQ1MsWUFMSCxBQUVBLEFBRXVDLENBUm5CLEVBRU0sQ0FORixFQUZELEFBSUMsRUFXZixXQVRvQyxHQU5JLENBRUEsQUFFRCxjQUV1RyxDQVE1RixFQVZvQixDQUo0RSxBQUVwRyxVQVlzQixJQU43QyxPQU13RSxvQkFBTSxzREFSK0MsSUFOSSxhQUkxRCxpQkFBbUIsWUFBNkIsb0RBQU0iLCJmaWxlIjoiY29tcG9uZW50cy9OYXZiYXJBYm91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGVsZW5hL0RvY3VtZW50cy9IZWxlbmEvZG9tbyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyYW5kXCIgaHJlZj1cIi4vaW5kZXhcIj5cbiAgICAgICAgICBIRUxFTkEgRE9NT1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyUlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjY2NcIiBocmVmPVwiLi4vYWJvdXRcIj5cbiAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2NvbnRhY3RcIj5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2ZpZ3VyZVwiPlxuICAgICAgICAgICAgRmlndXJlIG91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgaGVhZGVyIHtcbiAgICAgICBtaW4taGVpZ2h0OiAzLjNlbTtcbiAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIixcIkx1Y2lkYSBDb25zb2xlXCIsTW9uYWNvLFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsbW9ub3NwYWNlO1xuICAgICB9XG5cbiAgICAgLndyYXBwZXIge1xuICAgICAgIG1heC13aWR0aDogNjBlbTtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgIH1cblxuICAgICAuYnJhbmQge1xuICAgICAgIG1hcmdpbi1sZWZ0OjEuMmVtO1xuICAgICAgIGZvbnQtc2l6ZTogMS45ZW07XG4gICAgICAgbGluZS1oZWlnaHQ6IDNlbTtcbiAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDdlbTtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgfVxuXG4gICAgIC5uYXZiYXJSIHtcbiAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgbWFyZ2luLXRvcDogMS4yZW07XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XG4gICAgICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLFwiTHVjaWRhIENvbnNvbGVcIixNb25hY28sXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIixtb25vc3BhY2U7XG4gICAgIH1cblxuICAgICBhLCBhOnZpc2l0ZWQge1xuICAgICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgfVxuXG4gICAgIGE6aG92ZXIge1xuICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICB9XG5cbiAgICAgYS5jY2N7XG4gICAgICAgY29sb3I6ICNjY2M7XG4gICAgIH1cblxuICAgICAudW5kZXJsaW5le1xuICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgIHdpZHRoOiAzZW07XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgfVxuICAgICAubGluZXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/NavbarAbout.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/NavbarAbout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/NavbarAbout.js"); } } })();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(560);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _style = __webpack_require__(552);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/helena/Documents/Helena/domo/components/NavbarFigure.js";

exports.default = function (props) {
  var _React$createElement;

  return _react2.default.createElement("div", {
    "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, _react2.default.createElement("header", {
    "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement("div", { className: "wrapper", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("nav", {
    "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("a", { className: "brand", href: "./index", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "HELENA DOMO")), _react2.default.createElement("div", { className: "navbarR", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("div", { className: "line", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { href: "../about", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")), _react2.default.createElement("div", { className: "line", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("a", { href: "../contact", "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Contact")), _react2.default.createElement("div", {
    "data-jsx": 1469009946,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement("a", (_React$createElement = { className: "ccc" }, (0, _defineProperty3.default)(_React$createElement, "className", "underline"), (0, _defineProperty3.default)(_React$createElement, "href", "../figure"), (0, _defineProperty3.default)(_React$createElement, "data-jsx", 1469009946), (0, _defineProperty3.default)(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 23
  }), _React$createElement), "Figure out"))))), _react2.default.createElement(_style2.default, {
    styleId: 1469009946,
    css: "header[data-jsx=\"1469009946\"]{min-height:3.3em;margin-top:1em;position:relative;font-family:\"Lucida Sans Typewriter\",\"Lucida Console\",Monaco,\"Bitstream Vera Sans Mono\",monospace}.wrapper[data-jsx=\"1469009946\"]{max-width:60em;margin-right:auto;margin-left:auto}.brand[data-jsx=\"1469009946\"]{margin-left:1.2em;font-size:1.9em;line-height:3em;-webkit-letter-spacing:-0.07em;-moz-letter-spacing:-0.07em;-ms-letter-spacing:-0.07em;letter-spacing:-0.07em;margin-bottom:0;float:left;-webkit-text-decoration:none;text-decoration:none}.navbarR[data-jsx=\"1469009946\"]{float:right;margin-top:1.2em;margin-right:2em;font-family:\"Lucida Sans Typewriter\",\"Lucida Console\",Monaco,\"Bitstream Vera Sans Mono\",monospace}a[data-jsx=\"1469009946\"],a[data-jsx=\"1469009946\"]:visited{color:#424242;-webkit-text-decoration:none;text-decoration:none}a[data-jsx=\"1469009946\"]:hover{color:#ccc}a.ccc[data-jsx=\"1469009946\"]{color:#ccc}.line[data-jsx=\"1469009946\"]{margin-bottom:10px}.underline[data-jsx=\"1469009946\"]{color:#ccc;border-bottom:1px solid currentColor;height:25px;width:4em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyRmlndXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFJeUIsQUFFRixBQUVFLEFBRUwsQUFFRSxBQUVILEFBRUEsQUFFUyxBQUVULFlBTk0sQUFFQSxBQUl1QyxDQVZuQixFQUVNLENBTkYsRUFGRCxBQUlDLEVBVWYsV0FSb0MsR0FOSSxDQUVBLEFBRUQsY0FFdUcsQ0FVNUYsRUFab0IsQ0FKNEUsQUFFcEcsVUFjc0IsSUFSN0MsT0FRbUQsMEVBVjBFLElBTkksYUFJMUQsaUJBQW1CLFlBQTZCLG9EQUFNIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2YmFyRmlndXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9oZWxlbmEvRG9jdW1lbnRzL0hlbGVuYS9kb21vIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnJhbmRcIiBocmVmPVwiLi9pbmRleFwiPlxuICAgICAgICAgIEhFTEVOQSBET01PXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXJSXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiLi4vYWJvdXRcIj5cbiAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2NvbnRhY3RcIj5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2NjXCIgIGNsYXNzTmFtZT1cInVuZGVybGluZVwiIGhyZWY9XCIuLi9maWd1cmVcIj5cbiAgICAgICAgICAgIEZpZ3VyZSBvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIGhlYWRlciB7XG4gICAgICAgbWluLWhlaWdodDogMy4zZW07XG4gICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsXCJMdWNpZGEgQ29uc29sZVwiLE1vbmFjbyxcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLG1vbm9zcGFjZTtcbiAgICAgfVxuXG4gICAgIC53cmFwcGVyIHtcbiAgICAgICBtYXgtd2lkdGg6IDYwZW07XG4gICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICB9XG5cbiAgICAgLmJyYW5kIHtcbiAgICAgICBtYXJnaW4tbGVmdDoxLjJlbTtcbiAgICAgICBmb250LXNpemU6IDEuOWVtO1xuICAgICAgIGxpbmUtaGVpZ2h0OiAzZW07XG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA3ZW07XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIH1cblxuICAgICAubmF2YmFyUiB7XG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgIG1hcmdpbi10b3A6IDEuMmVtO1xuICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIixcIkx1Y2lkYSBDb25zb2xlXCIsTW9uYWNvLFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsbW9ub3NwYWNlO1xuICAgICB9XG5cbiAgICAgYSwgYTp2aXNpdGVkIHtcbiAgICAgICBjb2xvcjogIzQyNDI0MjtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIH1cblxuICAgICBhOmhvdmVyIHtcbiAgICAgICBjb2xvcjogI2NjYztcbiAgICAgfVxuXG4gICAgIGEuY2Nje1xuICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICB9XG5cbiAgICAgLmxpbmV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIH1cblxuICAgICAudW5kZXJsaW5le1xuICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgIHdpZHRoOiA0ZW07XG4gICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=components/NavbarFigure.js */"
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/NavbarFigure.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/NavbarFigure.js"); } } })();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'phone': '600px'
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/helena/Documents/Helena/domo/components/theme/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/helena/Documents/Helena/domo/components/theme/index.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(553);


/***/ })

},[559]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9maWd1cmUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWd1cmUuanM/Mzg1YzQwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlZmF1bHRQYWdlLmpzPzM4NWM0MDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWd1cmUuanM/Mzg1YzQwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmJhckFib3V0LmpzPzM4NWM0MDciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXJGaWd1cmUuanM/Mzg1YzQwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoZW1lL2luZGV4LmpzPzM4NWM0MDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhckZpZ3VyZSBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhckZpZ3VyZSdcbmltcG9ydCBGaWd1cmUgZnJvbSAnLi4vY29tcG9uZW50cy9GaWd1cmUnXG5jb25zdCBjb250YWN0ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxOYXZiYXJGaWd1cmUgLz5cbiAgICA8RmlndXJlIC8+XG5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IChjb250YWN0KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZmlndXJlLmpzP2VudHJ5IiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBEZWZhdWx0UGFnZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3MvYmFzZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImh0dHBzOi8vY2RuLnBsb3QubHkvcGxvdGx5LWxhdGVzdC5taW4uanNcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS1saWdodC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUtYnJhbmRzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS1jb3JlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgIDwvSGVhZD5cbiAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9naXRodWItc3ludGF4LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgKERlZmF1bHRQYWdlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9EZWZhdWx0UGFnZS5qcyIsImltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IGluZGV4IGZyb20gJy4vTmF2YmFyQWJvdXQnXG5pbXBvcnQgRGVmYXVsdFBhZ2UgZnJvbSAnLi9EZWZhdWx0UGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgPERlZmF1bHRQYWdlIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICA8aW5kZXggLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbmJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VcIj5cbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhbCBmYS1jbG9uZSBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+PC9hPlxuICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+QTwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhY2thZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzLzEucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VcIj5cbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhbCBmYS1oZWFydCBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+PC9hPlxuICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+R3JlYXQ8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdwYWNrYWdlXCIgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy8yLnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWNrYWdlXCI+XG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYWwgZmEtbWFwLXNpZ25zIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz48L2E+XG4gICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5XYXk8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdwYWNrYWdlXCIgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy80LnBuZ1wiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWNrYWdlXCI+XG4gICAgICAgICAgICA8YT48aSBjbGFzc05hbWU9XCJmYWwgZmEtbmV1dGVyIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz48L2E+XG4gICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5UbzwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhY2thZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzLzUucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VcIj5cbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhbCBmYS1zZWFyY2ggZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPjwvYT5cbiAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlNlYXJjaDwvZGl2PlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZ3BhY2thZ2VcIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzLzcucG5nXCIgLz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhY2thZ2VcIj5cbiAgICAgICAgICAgIDxhPjxpIGNsYXNzTmFtZT1cImZhbCBmYS1yb2NrZXQgZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPjwvYT5cbiAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPlJvY2tldHM8L2Rpdj5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWdwYWNrYWdlXCIgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy8zLmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuXG4gICAgLm1haW5ib3gge1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgd2lkdGg6IDEwNDBweDtcbiAgICB9XG5cbiAgICAucGFja2FnZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd2lkdGg6IDE3cmVtO1xuICAgICAgaGVpZ2h0OiAyNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2VhZWNlZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLnBhY2thZ2U6aG92ZXIsXG4gICAgLm5hbWU6aG92ZXJ7XG4gICAgICBjb2xvcjojY2NjXG4gICAgfVxuXG4gICAgLmltZ3BhY2thZ2V7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgY29sb3I6ICM1NjU2NTY7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIGxpLmJsYWNre1xuICAgICAgY29sb3I6IzU2NTY1NlxuICAgIH1cblxuICAgIGxpOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHt0aGVtZS5waG9uZX0pIHtcblxuICAgIC5wcmljaW5nLXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAucGFja2FnZXtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS45ZW07XG4gICAgICBsaW5lLWhlaWdodDogM2VtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA3ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG4gICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9GaWd1cmUuanMiLCJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZFwiIGhyZWY9XCIuL2luZGV4XCI+XG4gICAgICAgICAgSEVMRU5BIERPTU9cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVybGluZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2NjXCIgaHJlZj1cIi4uL2Fib3V0XCI+XG4gICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9jb250YWN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9maWd1cmVcIj5cbiAgICAgICAgICAgIEZpZ3VyZSBvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDxzdHlsZSBqc3g+e2BcblxuICAgIGhlYWRlciB7XG4gICAgICAgbWluLWhlaWdodDogMy4zZW07XG4gICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsXCJMdWNpZGEgQ29uc29sZVwiLE1vbmFjbyxcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLG1vbm9zcGFjZTtcbiAgICAgfVxuXG4gICAgIC53cmFwcGVyIHtcbiAgICAgICBtYXgtd2lkdGg6IDYwZW07XG4gICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICB9XG5cbiAgICAgLmJyYW5kIHtcbiAgICAgICBtYXJnaW4tbGVmdDoxLjJlbTtcbiAgICAgICBmb250LXNpemU6IDEuOWVtO1xuICAgICAgIGxpbmUtaGVpZ2h0OiAzZW07XG4gICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA3ZW07XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIH1cblxuICAgICAubmF2YmFyUiB7XG4gICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgIG1hcmdpbi10b3A6IDEuMmVtO1xuICAgICAgIG1hcmdpbi1yaWdodDogMmVtO1xuICAgICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIixcIkx1Y2lkYSBDb25zb2xlXCIsTW9uYWNvLFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsbW9ub3NwYWNlO1xuICAgICB9XG5cbiAgICAgYSwgYTp2aXNpdGVkIHtcbiAgICAgICBjb2xvcjogIzQyNDI0MjtcbiAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIH1cblxuICAgICBhOmhvdmVyIHtcbiAgICAgICBjb2xvcjogI2NjYztcbiAgICAgfVxuXG4gICAgIGEuY2Nje1xuICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICB9XG5cbiAgICAgLnVuZGVybGluZXtcbiAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICB3aWR0aDogM2VtO1xuICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIH1cbiAgICAgLmxpbmV7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXZiYXJBYm91dC5qcyIsIlxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyYW5kXCIgaHJlZj1cIi4vaW5kZXhcIj5cbiAgICAgICAgICBIRUxFTkEgRE9NT1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyUlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi4uL2Fib3V0XCI+XG4gICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIuLi9jb250YWN0XCI+XG4gICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNjY1wiICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVcIiBocmVmPVwiLi4vZmlndXJlXCI+XG4gICAgICAgICAgICBGaWd1cmUgb3V0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICBoZWFkZXIge1xuICAgICAgIG1pbi1oZWlnaHQ6IDMuM2VtO1xuICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLFwiTHVjaWRhIENvbnNvbGVcIixNb25hY28sXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIixtb25vc3BhY2U7XG4gICAgIH1cblxuICAgICAud3JhcHBlciB7XG4gICAgICAgbWF4LXdpZHRoOiA2MGVtO1xuICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgfVxuXG4gICAgIC5icmFuZCB7XG4gICAgICAgbWFyZ2luLWxlZnQ6MS4yZW07XG4gICAgICAgZm9udC1zaXplOiAxLjllbTtcbiAgICAgICBsaW5lLWhlaWdodDogM2VtO1xuICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wN2VtO1xuICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICB9XG5cbiAgICAgLm5hdmJhclIge1xuICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICBtYXJnaW4tdG9wOiAxLjJlbTtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgICAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBUeXBld3JpdGVyXCIsXCJMdWNpZGEgQ29uc29sZVwiLE1vbmFjbyxcIkJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ub1wiLG1vbm9zcGFjZTtcbiAgICAgfVxuXG4gICAgIGEsIGE6dmlzaXRlZCB7XG4gICAgICAgY29sb3I6ICM0MjQyNDI7XG4gICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICB9XG5cbiAgICAgYTpob3ZlciB7XG4gICAgICAgY29sb3I6ICNjY2M7XG4gICAgIH1cblxuICAgICBhLmNjY3tcbiAgICAgICBjb2xvcjogI2NjYztcbiAgICAgfVxuXG4gICAgIC5saW5le1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICB9XG5cbiAgICAgLnVuZGVybGluZXtcbiAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICB3aWR0aDogNGVtO1xuICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2YmFyRmlndXJlLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICAncGhvbmUnOiAnNjAwcHgnXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RoZW1lL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUtBO0FBTEE7QUFLQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTs7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7O0FBOUVBO0FBTEE7QUFLQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBcEJBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFwQkE7QUFBQTtBQUFBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        