import Color from 'color';
import {colors, align, fonts} from '../../Styles';

module.exports = {
  base: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 0px'
  },
  wrapper: {
    display: 'block',
    margin: 'auto',
    width: '100%',
    maxWidth: '1024px',
    padding: '0px 10px'
  },
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '25px auto',
    '@media (min-width: 767px)':{
      margin: '25px auto',
    }
  },
  mls: {
    margin: '20px auto',
    width: '200px',
    border: `1px solid ${Color(colors.forest).rgbString()}`,
    fontSize: `13px`,
    padding: '15px',
    lineHeight: '20px',
    color: Color(colors.forest).rgbString(),
    display: 'block',
    width: '375px',
    maxWidth: '100%',
    ':hover': {
      color: Color(colors.blue).rgbString(),
    }
  },
  carousel: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    width: '100%',
    height: '250px',
    padding: '0px',
    maring: '0px',
    overflow: 'hidden'
  }
};
