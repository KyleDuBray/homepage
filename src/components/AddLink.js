import React from "react";

import "../styles/button.css";

import { useToggleModal } from "../contexts/ModalContext";
import AddLinkModal from "./AddLinkModal";
import Button from "./Button";

const AddLink = () => {
  const toggle = useToggleModal();

  // TODO: Fix button span width(inner) to match button width (outer)
  return (
    <>
      <Button
        handleClick={toggle}
        content={"+ New"}
        outerClass="addlink"
        innerClass="add-span"
      />
      <AddLinkModal />
    </>
  );
};

export default AddLink;
