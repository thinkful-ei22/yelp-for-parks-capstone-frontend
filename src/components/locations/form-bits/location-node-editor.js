import React from "react";

export default function LocationNode(props) {
  //props.fieldName is the field being described
  //props.editing is whether or not editing is true for the field
  //props.fieldData is the data for the field
  if (props.fieldName === "description" && props.editing) {
    return (
      <div>
        <label for={`edit-location-${props.fieldName}`}>
          {props.fieldName}
        </label>
        <textarea
          id={`edit-location-${props.fieldName}`}
          value={props.fieldData}
        />
      </div>
    );
  }
  if (props.editing === false) {
    return (
      <div className="editing-node">
        <p>{props.fieldName}</p>
        <p>{props.fieldData}</p>
        <button name={`edit-${props.fieldName}`} onClick={props.onClick()} />
      </div>
    );
  }
  return (
    <div>
      <label htmlFor={`edit-location-${props.fieldName}`}>
        Edit your Location {props.fieldName}
      </label>
      <input id={`edit-location-${props.fieldName}`} value={props.fieldData} />
    </div>
  );
}
