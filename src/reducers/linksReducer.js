import { CREATE_LINK } from '../actions/types';

const INITIAL_STATE = {
  links: [
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
        links: [
          ...state.links,
          { url: action.payload.url, siteName: action.payload.siteName },
        ],
      };
    default:
      return state;
  }
};

export default linksReducer;
