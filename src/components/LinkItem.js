import React from "react";
import Button from "./Button";
import { useDeleteLink } from "../contexts/DeleteLinkContext";
import { useDispatch } from "react-redux";
import { deleteLink } from "../actions/index";

const linkStyle = {
  margin: "0 10px 0 2px",
  whiteSpace: "nowrap",
};

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
      <>
        <a
          href={url}
          style={{
            backgroundImage: faviconStyle,
            ...linkStyle,
          }}
        >
          {siteName}
        </a>{" "}
      </>
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
