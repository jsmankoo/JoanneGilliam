import {fromJS} from 'immutable';

export default (state = fromJS({
  videos: ['/media/video.mp4', '/media/video.webm'],
  poster: '/media/poster.jpg',
  slides: [
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg'
  ],
  headline: 'Premier Oceanfront Properties',
  subheadline: ''
}), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
