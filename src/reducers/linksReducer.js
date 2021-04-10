import { CREATE_LINK, DELETE_LINK } from '../actions/types';

const linksFromLocalStorage = () => {
  const links = localStorage.getItem('links');

  if (links === '[object Object]' || !links) {
    const state = {
      linksList: [
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

    return state;
  }

  const state = JSON.parse(links);
  return state;
};
const INITIAL_STATE = linksFromLocalStorage();

const linksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_LINK:
      localStorage.removeItem('links');
      localStorage.setItem(
        'links',
        JSON.stringify({
          ...state,
          linksList: [
            ...state.linksList,
            { url: action.payload.url, siteName: action.payload.siteName },
          ],
        })
      );
      return {
        ...state,
        linksList: [
          ...state.linksList,
          { url: action.payload.url, siteName: action.payload.siteName },
        ],
      };
    case DELETE_LINK:
      localStorage.removeItem('links');
      localStorage.setItem(
        'links',
        JSON.stringify({
          ...state,
          linksList: state.linksList.filter((item) => {
            return item.siteName !== action.payload;
          }),
        })
      );
      return {
        ...state,
        linksList: state.linksList.filter((item) => {
          return item.siteName !== action.payload;
        }),
      };
    default:
      localStorage.setItem('links', JSON.stringify(state));
      return state;
  }
};

export default linksReducer;
