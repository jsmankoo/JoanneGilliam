import {fromJS} from 'immutable';
export default (state = fromJS({
  copyright: 'CalBre #00600727 Copyright © 2016 Robert Christie.',
  information: 'Information deemed reliable but not guaranteed or verified.',
  facebook: '//facebook.com',
  twitter: '//twitter.com',
  instagram: '//instagram'
}), action) => {
  switch (action.type) {
    case 'FOOT_INIT':
      return state
        .set('copyright', action.copyright)
        .set('information', action.information)
        .set('facebook', action.facebook)
        .set('twitter', action.twitter)
        .set('instagram', action.instagram);
    default:
      return state;
  }
};
