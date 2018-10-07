import React from "react";

function Overlay(props) {
  return (
    <div
      className={"overlay" + `${props.show === true ? "" : "hidden"}`}
      onClick={() => props.onClick()}
    />
  );
}
export default Overlay;
