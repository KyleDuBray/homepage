import {
  CREATE_LINK,
  UPDATE_NAME_FIELD,
  UPDATE_URL_FIELD,
  VALIDATE_NAME,
  VALIDATE_URL,
} from './types';

export const createLink = (formValues) => (dispatch) => {
  const { url, siteName } = formValues;
  dispatch({ type: CREATE_LINK, payload: { url, siteName } });
};

export const updateName = (siteName) => (dispatch) => {
  dispatch({ type: UPDATE_NAME_FIELD, payload: { siteName } });
};

export const updateUrl = (url) => (dispatch) => {
  dispatch({ type: UPDATE_URL_FIELD, payload: { url } });
};

export const validateName = (siteName) => (dispatch) => {
  dispatch({ type: VALIDATE_NAME, payload: siteName });
};

export const validateUrl = (url) => (dispatch) => {
  dispatch({ type: VALIDATE_URL, payload: url });
};
