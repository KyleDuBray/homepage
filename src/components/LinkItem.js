import React from 'react';

const LinkItem = ({ url, siteName }) => {
  const faviconStyle = `url(https://www.google.com/s2/favicons?domain=${url})`;

  return (
    <>
      <a
        href={url}
        style={{
          backgroundImage: faviconStyle,
          margin: '10px',
          height: '24px',
          whiteSpace: 'nowrap',
        }}
      >
        {siteName}
      </a>
    </>
  );
};

export default LinkItem;
