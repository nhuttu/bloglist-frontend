import React, { useState, useImperativeHandle } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line react/display-name
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });
  Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
  };
  return (
    <div style={{ display: "inline" }} className="togglableContent2">
      <div style={hideWhenVisible}>
        <button id="detailButton" onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className="togglableContent">
        {props.children}
        <button onClick={toggleVisibility}>{props.buttonLabel2}</button>
      </div>
    </div>
  );
});

export default Togglable;
