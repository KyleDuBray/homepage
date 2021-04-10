import React from 'react';
import Button from './Button';
import { useDeleteLink } from '../contexts/DeleteLinkContext';
import { useDispatch } from 'react-redux';
import { deleteLink } from '../actions/index';

const linkStyle = {
  margin: '10px 10px 10px 2px',
  height: '24px',
  whiteSpace: 'nowrap',
};

const LinkItem = ({ url, siteName }) => {
  const faviconStyle = `url(https://www.google.com/s2/favicons?domain=${url})`;
  const deleteOpen = useDeleteLink();
  const dispatch = useDispatch();

  const removeLink = () => {
    dispatch(deleteLink(siteName));
  };

  const renderDeleteButtons = () => {
    if (deleteOpen) {
      return (
        <>
          <Button
            content={<ion-icon name="close-circle-outline"></ion-icon>}
            innerClass="delete-span"
            outerClass="deletelink"
            handleClick={removeLink}
          />
          <div style={linkStyle}>{siteName}</div>
        </>
      );
    }
    return null;
  };

  const renderFavicons = () => {
    return !deleteOpen ? (
      <a
        href={url}
        style={{
          backgroundImage: faviconStyle,
          ...linkStyle,
        }}
      >
        {siteName}
      </a>
    ) : null;
  };

  return (
    <>
      {renderDeleteButtons()}
      <div className="link-item">{renderFavicons()}</div>
    </>
  );
};

export default LinkItem;
