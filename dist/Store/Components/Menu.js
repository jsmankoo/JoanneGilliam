'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({
    open: false,
    data: [{
      name: 'HOME',
      link: 'http://www.premieroceanfrontproperties.com/',
      border: false,
      hover: false
    }, {
      name: 'PROPERTIES',
      border: true,
      hover: false,
      open: false,
      submenu: [{
        name: 'Oceanfront',
        link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/OCEANFRONT-PROPERTIES/62458/134554',
        hover: false,
        full: true
      }, {
        name: 'Corona Del Mar',
        link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Corona-Del-Mar/62458/134547',
        hover: false,
        full: true
      }, {
        name: 'Dana Point',
        link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Dana-Point/62458/134548',
        hover: false,
        full: true
      }, {
        name: 'Laguna Beach',
        link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Laguna-Beach/62458/134549',
        hover: false,
        full: true
      }, {
        name: 'Newport Beach',
        link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Newport-Beach/62458/134550',
        hover: false,
        full: true
      }, {
        name: 'San Clemente',
        link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/San-Clemente/62458/134546',
        hover: false,
        full: true
      }, {
        name: 'MLS Search',
        link: 'http://idx.premieroceanfrontproperties.com/homesearch/62458',
        hover: false,
        full: true
      }]
    }, {
      name: 'PROFILE',
      border: true,
      hover: false,
      open: false,
      submenu: [{
        name: 'ABOUT',
        link: '#about',
        hover: false
      }, {
        name: 'CONTACT',
        link: '#contact',
        hover: false
      }]
    }]
  }) : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'MENU_TOGGLE':
      return state.update('open', function (open) {
        return !open;
      });
    case 'MENU_CATEGORY_HOVER':
      return state.update('data', function (data) {
        return data.map(function (data, index) {
          return data.update('hover', function (hover) {
            return index === action.index && !hover;
          });
        });
      });
    case 'MENU_SUBMENU_HOVER_TOGGLE':
      return state.update('data', function (data) {
        return data.map(function (data, index) {
          return data.update('submenu', function (submenu) {
            return action.category !== index ? submenu : submenu.map(function (submenu, index) {
              return submenu.update('hover', function (hover) {
                return action.submenu === index && !hover;
              });
            });
          });
        });
      });
    case 'MENU_CATEGORY_TOGGLE':
      return state.update('data', function (data) {
        return data.map(function (data, index) {
          return data.update('open', function (open) {
            return index === action.index && !open;
          });
        });
      });
    default:
      return state;
  }
};