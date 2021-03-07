import React from 'react';

export default function Button(props) {
  return (
    <>
      <button className={props.class} onClick={props.handleClick}>
        <span className="button-content" tabIndex="-1">
          {props.content}
        </span>
      </button>
    </>
  );
}
