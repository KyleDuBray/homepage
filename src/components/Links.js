import React from 'react';

import { useSelector } from 'react-redux';

import LinkItem from './LinkItem';
import AddLink from './AddLink';
import DeleteLinksToggler from './DeleteLinksToggler';

import { ModalProvider } from '../contexts/ModalContext';
import { DeleteLinkProvider } from '../contexts/DeleteLinkContext';

const Links = () => {
  const state = useSelector((state) => state.links);

  const renderLinks = () => {
    return state.links.map((link, i) => {
      return <LinkItem key={i} url={link.url} siteName={link.siteName} />;
    });
  };

  // TODO: Add buttons for horizontal scrolling of div once linksbar is full
  // OR just add more rows and make horizontal scroll for smaller windows
  // https://stackoverflow.com/questions/56392199/make-a-button-to-scroll-horizontally-in-div
  return (
    <div className="links-container hidden-vert-scroll">
      <DeleteLinkProvider>
        <DeleteLinksToggler />
        {renderLinks()}
      </DeleteLinkProvider>
      <ModalProvider>
        <AddLink />
      </ModalProvider>
    </div>
  );
};

export default Links;
