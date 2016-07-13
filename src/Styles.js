// Global Variables
module.exports = {
  colors: {
    black : '#000000',
    dark : '#333333',
    cream : '#FBFFE3',
    white : '#FFFFFF',
    pink : '#E21B5A',
    greyGreen : '#BAC9A9',
    forest : '#697060',
    red : '#C44D58',
    blue: '#5c858e',
    grey: '#AFAFAF'
  },
  fonts: {
    head : 'BlairITCStd',
    main : 'proxima-nova',
    etica : 'lft-etica-condensed'
  },
  header: {
    fontSize: '22px',
    fontWeight: 400,
    letterSpacing: '3px',
    '@media (min-width: 768px)': {
      fontSize: '33px'
    }
  },
  align(how){
    switch (how) {
      case 'b':
        return {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate( -50%, -50%)'
        };
      case 'v':
        return {
          position: 'absolute',
          top: '50%',
          transform: 'translate( 0%, -50%)'
        };
      case 'h':
        return {
          position: 'absolute',
          left: '50%',
          transform: 'translate( -50%, 0%)'
        };
      default:
        console.err(`Global Styles: align(${how}) not defined`);
        return {};
    }
  },
};
