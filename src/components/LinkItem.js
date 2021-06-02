import React from "react";
import Button from "./Button";
import { useDeleteLink } from "../contexts/DeleteLinkContext";
import { useDispatch } from "react-redux";
import { deleteLink } from "../actions/index";

const formatUrlForFaviconStyle = (str) => {
  return str.substring(0, str.indexOf(".com") + 4);
};

const LinkItem = ({ url, siteName }) => {
  const faviconStyle = `url(${formatUrlForFaviconStyle(url)}/favicon.ico)`;
  const deleteOpen = useDeleteLink();
  const dispatch = useDispatch();

  const removeLink = () => {
    dispatch(deleteLink(siteName));
  };

  // TODO: Now that grid is used for links, need to reposition the toggle delete
  const renderDeleteButton = () => {
    if (deleteOpen) {
      return (
        <div className="deletable">
          <Button
            content={<ion-icon name="close-circle-outline"></ion-icon>}
            innerClass="delete-span"
            outerClass="deletelink"
            handleClick={removeLink}
          />
          <p>{siteName}</p>
        </div>
      );
    }
    return null;
  };

  const renderFaviconLink = () => {
    return !deleteOpen ? (
      <div className="link-item">
        <a href={url}>
          <div
            className="favicon"
            style={{ backgroundImage: faviconStyle }}
          ></div>
          <p>{siteName}</p>
        </a>
      </div>
    ) : null;
  };

  return (
    <>
      {renderDeleteButton()}
      {renderFaviconLink()}
    </>
  );
};

export default LinkItem;
