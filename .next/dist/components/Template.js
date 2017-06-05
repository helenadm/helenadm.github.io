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

exports.default = function (props) {
  return _react2.default.createElement('div', {
    'data-jsx': 2878049643
  }, _react2.default.createElement('div', { className: 'page-content', 'data-jsx': 2878049643
  }, _react2.default.createElement('div', { className: 'wrapper', 'data-jsx': 2878049643
  }, _react2.default.createElement('index', {
    'data-jsx': 2878049643
  }), _react2.default.createElement('div', { className: 'paper', 'data-jsx': 2878049643
  }, _react2.default.createElement('img', { className: 'paper1', src: '../static/hermano.jpg', 'data-jsx': 2878049643
  })))), _react2.default.createElement(_style2.default, {
    styleId: 2878049643,
    css: '.page-content[data-jsx="2878049643"] {padding: 3em 0;}.wrapper[data-jsx="2878049643"] {max-width: 50em;margin-right: auto;margin-left: auto;}img[data-jsx="2878049643"]:hover {opacity: 0.7;}.paper1[data-jsx="2878049643"] {max-width: 50em;border: 3px solid #eaecee;background-color: #fff;min-height: 25em;margin-right: auto;margin-left: auto;font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;}.paper[data-jsx="2878049643"] {border: 2px solid #ccc;background-color: #D6EAF8;padding: 4.5em 5.5em;min-height: 400px;font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;}@media screen and (max-width: ' + _theme2.default['phone'] + ') {.wrapper[data-jsx="2878049643"] {max-width: 100%;}.paper[data-jsx="2878049643"] {padding: 1em;}}'
  }));
};