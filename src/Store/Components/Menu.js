import {fromJS} from 'immutable';

export default (state = fromJS({
  open: false,
  data: [
    {
      name: 'HOME',
      link: 'http://www.premieroceanfrontproperties.com/',
      border: false,
      hover: false,
    },
    {
      name: 'PROPERTIES',
      border: true,
      hover: false,
      open: false,
      submenu: [
        {
          name: 'Oceanfront',
          link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/OCEANFRONT-PROPERTIES/62458/134554',
          hover: false,
          full: true
        },
        {
          name: 'Corona Del Mar',
          link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Corona-Del-Mar/62458/134547',
          hover: false,
          full: true
        },
        {
          name: 'Dana Point',
          link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Dana-Point/62458/134548',
          hover: false,
          full: true
        },
        {
          name: 'Laguna Beach',
          link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Laguna-Beach/62458/134549',
          hover: false,
          full: true
        },
        {
          name: 'Newport Beach',
          link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/Newport-Beach/62458/134550',
          hover: false,
          full: true
        },
        {
          name: 'San Clemente',
          link: 'http://idx.premieroceanfrontproperties.com/report/listing-report/San-Clemente/62458/134546',
          hover: false,
          full: true
        },
        {
          name: 'MLS Search',
          link: 'http://idx.premieroceanfrontproperties.com/homesearch/62458',
          hover: false,
          full: true
        }
      ]
    },
    {
      name: 'PROFILE',
      border: true,
      hover: false,
      open: false,
      submenu: [
        {
          name: 'ABOUT',
          link: '#about',
          hover: false
        },
        {
          name: 'CONTACT',
          link: '#contact',
          hover: false
        }
      ]
    }
  ]
}), action) => {
  switch (action.type) {
    case 'MENU_TOGGLE':
      return state.update('open', open => !open);
    case 'MENU_CATEGORY_HOVER':
      return state.update('data', data =>
          data.map( (data, index) =>
            data.update('hover', hover => index === action.index && !hover)
          )
        );
    case 'MENU_SUBMENU_HOVER_TOGGLE':
      return state.update( 'data', data =>
          data.map( (data, index) =>
            data.update('submenu', submenu =>
              action.category !== index ? submenu : submenu.map( (submenu, index) =>
                submenu.update('hover', hover => action.submenu === index && !hover)
              )
            )
          )
        );
    case 'MENU_CATEGORY_TOGGLE':
      return state.update('data', data =>
          data.map( (data, index) =>
            data.update('open', open => index === action.index && !open)
          )
        );
    default:
      return state;
  }
};
