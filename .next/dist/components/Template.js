'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/helena/Documents/Helena/helenadm.github.io/components/Template.js';

exports.default = function (props) {
  return _react2.default.createElement('div', {
    'data-jsx': 4270273108,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', { className: 'page-content', 'data-jsx': 4270273108,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 4270273108,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('index', {
    'data-jsx': 4270273108,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('div', { className: 'paper', 'data-jsx': 4270273108,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('img', { className: 'paper1', src: '../static/yo.jpg', 'data-jsx': 4270273108,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })))), _react2.default.createElement(_style2.default, {
    styleId: 4270273108,
    css: '.page-content[data-jsx="4270273108"] {padding: 30px 0;}.wrapper[data-jsx="4270273108"] {max-width: 980px;margin-right: auto;margin-left: auto;}.paper1[data-jsx="4270273108"] {max-width: 980px;border: 3px solid #eaecee;background-color: #fff;min-height: 400px;margin-right: auto;margin-left: auto;font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;}.paper[data-jsx="4270273108"] {border: 2px solid #ccc;background-color: #D6EAF8;padding: 60px 120px;min-height: 400px;font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;}@media screen and (max-width: ' + _theme2.default['phone'] + ') {.wrapper[data-jsx="4270273108"] {max-width: 100%;}.paper[data-jsx="4270273108"] {padding: 1em;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBQ0ssc0NBQ0csZ0JBQ2pCLENBRVMsaUNBQ1MsaUJBQ0UsbUJBQ0Qsa0JBQ25CLENBQ1EsZ0NBQ1UsaUJBQ1MsMEJBQ0gsdUJBQ0wsa0JBQ0MsbUJBQ0Qsa0JBQ2lGLG1HQUNwRyxDQUVPLCtCQUNpQix1QkFDRywwQkFDTixvQkFDRixrQkFDaUYsbUdBQ3BHLENBRTJELDREQUNoRCxpQ0FDUSxnQkFDakIsQ0FFTywrQkFDTyxhQUNkLENBQ0YiLCJmaWxlIjoiY29tcG9uZW50cy9UZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGVsZW5hL0RvY3VtZW50cy9IZWxlbmEvaGVsZW5hZG0uZ2l0aHViLmlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9OYXZiYXInXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgPGluZGV4IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwYXBlcjFcIiBzcmM9XCIuLi9zdGF0aWMveW8uanBnXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucGFnZS1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogOTgwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgICAucGFwZXIxIHtcbiAgICAgICAgbWF4LXdpZHRoOiA5ODBweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2VhZWNlZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFR5cGV3cml0ZXJcIixcIkx1Y2lkYSBDb25zb2xlXCIsTW9uYWNvLFwiQml0c3RyZWFtIFZlcmEgU2FucyBNb25vXCIsbW9ub3NwYWNlO1xuICAgICAgfVxuXG4gICAgICAucGFwZXIge1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDZFQUY4O1xuICAgICAgICBwYWRkaW5nOiA2MHB4IDEyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVHlwZXdyaXRlclwiLFwiTHVjaWRhIENvbnNvbGVcIixNb25hY28sXCJCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm9cIixtb25vc3BhY2U7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7dGhlbWVbJ3Bob25lJ119KSB7XG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucGFwZXIge1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/Template.js */'
  }));
};