'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Little = require('../components/Little');

var _Little2 = _interopRequireDefault(_Little);

var _Navbar = require('../components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var First = function First() {
  return _react2.default.createElement('div', null, _react2.default.createElement(_Navbar2.default, null), _react2.default.createElement(_Little2.default, null));
};

exports.default = First;