import Color from 'color';
import {colors, align} from '../../Styles';

module.exports = {
  base: {
    zIndex: 10000,
    width: '100%',
    height: '50px',
    position: 'fixed',
    top: '0px',
    backgroundColor: Color(colors.blue).clearer(0.25).rgbString(),
  },
  brand: {...align('b'),
    textAlign: 'center',
    fontSize: '10px',
    lineHeight: '13px',
    '@media (min-width: 767px)':{
      fontSize: '16px',
      lineHeight: '16px'
    }
  },
  icon: {...align('v'),
    width: '30px',
    height: 'auto',
    cursor: 'pointer'
  }
};
