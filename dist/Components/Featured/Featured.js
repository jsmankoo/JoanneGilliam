'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactRedux = require('react-redux');

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Featured = function Featured(_ref) {
  var mls = _ref.mls;
  var properties = _ref.properties;

  return _react2.default.createElement(
    'div',
    { id: 'featured', className: 'Featured', style: [_Styles2.default.base] },
    _react2.default.createElement(
      'div',
      { style: [_Styles2.default.wrapper] },
      _react2.default.createElement(
        'h2',
        { style: [_Styles2.default.header] },
        'OCEANFRONT PROPERTIES'
      ),
      _react2.default.createElement(
        _reactResponsive2.default,
        { maxDeviceWidth: 767 },
        _react2.default.createElement(_Carousel2.default, { data: properties, offset: 0 })
      ),
      _react2.default.createElement(
        _reactResponsive2.default,
        { minDeviceWidth: 768 },
        _react2.default.createElement(
          'div',
          { style: {
              backgroundColor: '#FFF',
              height: 'auto'
            } },
          _react2.default.createElement(_Carousel2.default, { data: properties.slice(0, properties.length / 2), offset: 0, style: {
              '@media (min-width: 767px)': {
                height: '270px'
              }
            } }),
          _react2.default.createElement(_Carousel2.default, { data: properties.slice(properties.length / 2, properties.length), offset: 25 })
        )
      ),
      _react2.default.createElement(
        'h2',
        { style: [_Styles2.default.header] },
        _react2.default.createElement(
          'a',
          { href: mls, style: [_Styles2.default.mls] },
          'SEARCH OCEANFRONT PROPERTIES'
        )
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var Featured = _ref2.Featured;

  return {
    mls: Featured.get('mlsLink'),
    properties: Featured.get('properties').toJS()
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _radium2.default)(Featured));