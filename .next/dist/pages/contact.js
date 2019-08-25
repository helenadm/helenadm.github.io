'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contact = require('../components/contact');

var _contact2 = _interopRequireDefault(_contact);

var _defaultPage = require('../components/defaultPage');

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