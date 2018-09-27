import React from "react";
import { connect } from "react-redux";
import CommentForm from "../comments/comment-form";

class LocationIndividual extends React.Component {
  render() {
    return (
      <div>
        {/*We pull the information from the state.*/}
        <h1>{this.props.locationState.currentLocation.title}</h1>

        <p>{this.props.locationState.currentLocation.description}</p>
        <p>{this.props.locationState.currentLocation.address}</p>
        <p>{this.props.locationState.currentLocation.city}</p>
        <p>{this.props.locationState.currentLocation.state}</p>
        <p>{this.props.locationState.currentLocation.zipCode}</p>

        {/*comments*/}
        {<CommentForm />}
      </div>
    );
  }
}

//connect this to state with mapstatetoprops
//individual location obj passed as state
const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationIndividual);
