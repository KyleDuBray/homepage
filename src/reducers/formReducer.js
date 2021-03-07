import {
  UPDATE_NAME_FIELD,
  UPDATE_URL_FIELD,
  VALIDATE_NAME,
  VALIDATE_URL,
} from '../actions/types';

const INITIAL_STATE = {
  fields: { siteName: '', url: '' },
  errors: [],
};
const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAME_FIELD:
      return {
        ...state,
        fields: { name: action.payload.siteName },
      };

    case UPDATE_URL_FIELD:
      return {
        ...state,
        fields: { url: action.payload.url },
      };

    case VALIDATE_NAME:
      if (action.payload.name === '') {
        return {
          ...state,
          form: {
            errors: [
              {
                msg: 'You must provide a valid site name',
                type: 'INVALID_NAME',
              },
            ],
          },
        };
      } else return state;
    case VALIDATE_URL:
      if (action.payload.url === '') {
        return {
          ...state,
          form: {
            errors: [
              { msg: 'You must provide a valid url', type: 'INVALID_URL' },
            ],
          },
        };
      } else return state;

    default:
      return state;
  }
};

export default formReducer;
