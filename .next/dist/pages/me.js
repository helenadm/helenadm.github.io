'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _More = require('../components/More');

var _More2 = _interopRequireDefault(_More);

var _Navbar = require('../components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Me = function Me() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Navbar2.default, null), _react2.default.createElement(_More2.default, null));
};

exports.default = Me;