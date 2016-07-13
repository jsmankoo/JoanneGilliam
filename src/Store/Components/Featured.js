import {fromJS} from 'immutable';
export default (state = fromJS({
  mlsLink: 'http://idx.premieroceanfrontproperties.com/report/listing-report/OCEANFRONT-PROPERTIES/62458/134554',
  properties: []
}), action) => {
  switch (action.type) {
    case 'FEATURED_LINK_INIT':
      return state.set('mlsLink', action.link);
    case 'FEATURED_ADD_PROPERTY':
      return state.update('properties', (properties) => (
        properties.push(fromJS({
          photo: action.photo
        }))
      ));
    default:
      return state;
  }
};
