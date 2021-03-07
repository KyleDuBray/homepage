import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createLink,
  updateName,
  updateUrl,
  validateName,
  validateUrl,
} from '../actions';

import '../styles/form.css';
import '../styles/error.css';

import Button from './Button';

export default function AddLinkForm(props) {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.form.errors);

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    validateName();
    validateUrl();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields();
    if (errors.length === 0) {
      dispatch(createLink({ url, siteName: name }));
      closeForm();
    } else {
      displayErrors();
    }
  };

  const validateFields = () => {
    dispatch(validateName(name));
    dispatch(validateUrl(url));
  };

  const displayErrors = () => {
    errors.forEach((err) => {
      console.log(err.type);
    });
  };

  const closeForm = () => {
    props.handleCancel();
  };

  const onNameChange = (e) => {
    setName(e.target.value);
    dispatch(validateName(name));
  };

  const onUrlChange = (e) => {
    setUrl(e.target.value);
    dispatch(validateUrl(url));
  };

  return (
    <form>
      <label>Name:</label>
      <input type="text" value={name} onChange={onNameChange} />
      <br />
      <label>URL:</label>
      <input type="text" value={url} onChange={onUrlChange} />
      <br />

      <Button content={'Add'} handleClick={handleSubmit} />

      <Button handleClick={closeForm} content="Cancel" />
    </form>
  );
}
