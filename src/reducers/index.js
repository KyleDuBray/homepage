import { combineReducers } from 'redux';
import linksReducer from './linksReducer';
import formReducer from './formReducer';

export default combineReducers({
  links: linksReducer,
  form: formReducer,
});
