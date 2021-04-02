import React from 'react';
import Button from './Button';
import { useDeleteLink } from '../contexts/DeleteLinkContext';

const linkStyle = {
  margin: '10px 10px 10px 2px',
  height: '24px',
  whiteSpace: 'nowrap',
};

const LinkItem = ({ url, siteName }) => {
  const faviconStyle = `url(https://www.google.com/s2/favicons?domain=${url})`;
  const deleteOpen = useDeleteLink();

  const renderDeleteButtons = () => {
    if (deleteOpen) {
      return (
        <>
          <Button
            content={<ion-icon name="close-circle-outline"></ion-icon>}
            innerClass="delete-span"
            outerClass="deletelink"
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
      <div>{renderFavicons()}</div>
    </>
  );
};

export default LinkItem;
