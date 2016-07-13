'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _reactMotion = require('react-motion');

var _Styles = require('./Styles');

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = (0, _radium2.default)(_class = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));

    _this.componentDidMount = function () {
      var tick = function tick() {
        var transform = _this.state.transform;

        var index = _this.props.data.length ? _this.props.data.length * 100 : 1;
        _this.setState(_extends({}, _this.state, {
          transform: (transform + 0.1) % index
        }));
        (0, _raf2.default)(tick);
      };
      _this.animation = (0, _raf2.default)(tick);
    };

    _this.componentWillUnount = function () {
      _raf2.default.cancel(_this.animation);
    };

    _this.state = {
      transform: 0
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      var transform = this.state.transform;
      var _props = this.props;
      var data = _props.data;
      var offset = _props.offset;
      var style = _props.style;
      var imgStyle = _props.imgStyle;

      var subset = data.slice(0, 2);
      return _react2.default.createElement(
        'div',
        { className: 'Carousel', style: [_Styles2.default.carousel, style] },
        data.map(function (_ref, index) {
          var img = _ref.photo;

          return _react2.default.createElement('img', { key: img, src: img, style: {
              height: '250px',
              width: 'auto',
              transform: 'translate(' + (-1 * transform - offset) + '%, 0%)',
              padding: '0px 10px'
            } });
        }),
        subset.map(function (_ref2, index) {
          var img = _ref2.photo;

          return _react2.default.createElement('img', { key: img, src: img, style: {
              height: '250px',
              width: 'auto',
              transform: 'translate(' + (-1 * transform - offset) + '%, 0%)',
              padding: '0px 10px'
            } });
        })
      );
    }
  }]);

  return Carousel;
}(_react.Component)) || _class;

exports.default = Carousel;