import React from 'react';
import { useDispatch } from 'react-redux';

import '../styles/button.css';

import { useToggleModal } from '../contexts/ModalContext';
import AddLinkModal from './AddLinkModal';
import Button from './Button';

const AddLink = () => {
  const dispatch = useDispatch();

  const toggle = useToggleModal();

  return (
    <>
      <Button
        handleClick={toggle}
        content={'+ New'}
        outerClass="addlink"
        innerClass="add-span"
      />
      <AddLinkModal />
    </>
  );
};

export default AddLink;
