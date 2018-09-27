import React from "react";
import CommentForm from "./comments/comment-form";

class LocationIndividual extends React.Component {
  render() {
    return (
      <div>
        //Guessing we're passing the title down as a prop so Line 8 is placeholder
        <h1>INSERT LOCATION TITLE HERE</h1>

        //Again...we'll be passing down description as a prop so Line 11 is placeholder
        <p>INSERT DESCRIPTION HERE</p>

        //Again...passing down props so placeholder for the address below
        <p>INSERT ADDRESS HERE</p>
        <p>INSERT CITY HERE</p>
        <p>INSERT STATE HERE</p>
        <p>INSERT ZIPCODE HERE</p>

        //Line 21 is where comment form would go per the wireframe
        //Commenting it out for now until we need to wire it
        // <CommentForm />

      </div>
    );
  }
}

export default LocationIndividual;
