import {fromJS} from 'immutable';

export default (state = fromJS({
  videos: ['/media/video.mp4', '/media/video.webm'],
  poster: '/media/poster.jpg',
  slides: [
    '/img/poster.jpg'
  ],
  headline: 'Rancho Mirage',
  subheadline: 'Real Estate'
}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
