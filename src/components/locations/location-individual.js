import React from "react";
import { connect } from "react-redux";
import { toggleRedirect } from "../../actions/location";
import { createAuthor } from "../../actions/author";
import LocationEditor from "./location-editor";
import CommentForm from "../comments/comment-form";
import {Link} from 'react-router-dom';
import { Redirect } from "react-router";
import './styles/location-individual.css';

class LocationIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editButtonVisible: false,
      redirectingToDashboard: false
    };
  }

  componentWillMount() {
    this.setState({
      redirectingToDashboard: false
    });
    console.log(this.state);
  }
  componentWillUnmount() {
    this.setState({
      redirectingToDashboard: false
    });
    console.log(this.state);
  }

  toggleEditState = bool => {
    this.setState({ editing: bool });
    console.log(this.state);
  };

  redirectToDashboard = bool => {
    this.setState({ redirectingToDashboard: bool });
    console.log(this.state);
  };

  //===========================for working with redirects========
  // componentWillMount() {
  //   this.props.dispatch(toggleRedirect(false));
  // }

  render() {
    //===========================for working with redirects========
    // if (this.props.locationState.redirecting) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/location/edit"
    //       }}
    //     />
    //   );
    // }
    //============================================================
    if (this.state.editing === true) {
      return <LocationEditor stopEditing={() => this.toggleEditState(false)} />;
    } else if (this.state.redirectingToDashboard === true) {
      return (
        <Redirect
          to={{
            pathname: "/dashboard"
          }}
        />
      );
    }

    return (
      //later add a ternary in the classname to hide this unless owner id valid
      <div>
        <button
          type="button"
          name="edit-location"
          onClick={() => {
            this.toggleEditState(true);
          }}
          // className={}
        >
          Edit Location
        </button>
        <button
          type="button"
          name="back-to-dashboard"
          onClick={() => this.redirectToDashboard(true)}
        >
          Back to Dashboard{" "}
        </button>
        {/*We pull the information from the state.*/}

        <h1>{this.props.locationState.currentLocation.title}</h1>
                <img class="location-image" src={this.props.locationState.currentLocation.image} />
        <p>{this.props.locationState.currentLocation.description}</p>
        <p>{this.props.locationState.currentLocation.address}
           &nbsp;{this.props.locationState.currentLocation.city}
           &nbsp;{this.props.locationState.currentLocation.state}
           &nbsp;{this.props.locationState.currentLocation.zipCode}</p>

        //Link to redirect to author's profile page
        <p>author</p><Link to="/authorprofile" onClick={() => this.props.dispatch(createAuthor(this.props.locationState.currentLocation.ownerId))} >Author Profile</Link>

        {/*comments*/}
        {<CommentForm />}
        <Link to="/dashboard">Dashboard</Link>
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
