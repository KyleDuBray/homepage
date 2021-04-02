import { CREATE_LINK, DELETE_LINK } from '../actions/types';

const INITIAL_STATE = {
  linkslist: [
    {
      url: 'https://github.com',
      siteName: 'GitHub',
    },
    {
      url: 'https://css-tricks.com',
      siteName: 'CSS Tricks',
    },
    {
      url: 'https://codepen.io',
      siteName: 'CodePen',
    },
  ],
};
const linksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_LINK:
      return {
        ...state,
        linkslist: [
          ...state.linkslist,
          { url: action.payload.url, siteName: action.payload.siteName },
        ],
      };
    case DELETE_LINK:
      return {
        ...state,
        linkslist: state.linkslist.filter((item) => {
          return item.siteName !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default linksReducer;
