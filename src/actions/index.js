import {
  CREATE_LINK,
  DELETE_LINK,
  UPDATE_SITENAME_FIELD,
  UPDATE_URL_FIELD,
  SITENAME_ERROR,
  SITENAME_EXISTS_ERROR,
  URL_ERROR,
  CLEAR_SITENAME_ERROR,
  CLEAR_SITENAME_EXISTS_ERROR,
  CLEAR_URL_ERROR,
  CLEAR_ALL_ERRORS,
} from './types';

export const createLink = (formValues) => {
  const { url, siteName } = formValues;
  return { type: CREATE_LINK, payload: { url, siteName } };
};

export const deleteLink = (siteName) => {
  return { type: DELETE_LINK, payload: siteName };
};

export const updateName = (siteName) => {
  return { type: UPDATE_SITENAME_FIELD, payload: { siteName } };
};

export const updateUrl = (url) => {
  return { type: UPDATE_URL_FIELD, payload: { url } };
};

export const createNameError = (siteName) => {
  return { type: SITENAME_ERROR, payload: { siteName } };
};

export const createNameExistsError = (siteName) => {
  return { type: SITENAME_EXISTS_ERROR, payload: { siteName } };
};

export const createUrlError = (url) => {
  return { type: URL_ERROR, payload: { url } };
};

export const clearNameError = () => {
  return { type: CLEAR_SITENAME_ERROR };
};

export const clearNameExistsError = () => {
  return { type: CLEAR_SITENAME_EXISTS_ERROR };
};

export const clearUrlError = () => {
  return { type: CLEAR_URL_ERROR };
};

export const clearAllErrors = () => {
  return { type: CLEAR_ALL_ERRORS };
};
