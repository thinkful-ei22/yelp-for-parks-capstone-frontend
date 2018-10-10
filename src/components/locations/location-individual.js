import React from "react";
import { connect } from "react-redux";
import LocationEditor from "./location-editor";
import {
  createAuthor,
  createAuthorLocation,
  toggleRedirectAuthor
} from "../../actions/author";
import CommentContainer from "../comments/comment-container";
import { toggleRedirect, geocode, updateImage } from "../../actions/location";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import LocationMap from "./location-map";
import "./styles/location-individual.css";

class LocationIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editButtonVisible: false,
      redirectingToDashboard: false,
      redirectingToAuthorProfile: false,
      uploading: false
    };
  }

  componentWillMount() {
    this.setState({
      redirectingToDashboard: false,
      redirectingToAuthorProfile: false
    });
    //console.log(this.state);
    console.log("This is line 25", this.props.locationState);
    this.props.dispatch(geocode(this.props.locationState));
  }

  componentWillUnmount() {
    this.setState({
      redirectingToDashboard: false,
      redirectingToAuthorProfile: false
    });
    console.log(this.state);
  }

  toggleEditState = bool => {
    this.setState({ editing: bool });
    console.log(this.state);
  };

  redirectToDashboard = bool => {
    this.setState({
      redirectingToDashboard: bool,
      redirectingToAuthorProfile: false
    });
    console.log(this.state);
  };

  redirectToAuthorProfile = bool => {
    this.setState({
      redirectingToAuthorProfile: bool,
      redirectingToDashboard: false
    });
  };

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    this.props.dispatch(
      updateImage(this.props.locationState.currentLocation.id, formData)
    );
  };

  //===========================for working with redirects========
  // componentWillMount() {
  //   this.props.dispatch(toggleRedirect(false));
  // }

  render() {
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
    } else if (this.state.redirectingToAuthorProfile === true) {
      return (
        <Redirect
          to={{
            pathname: "/authorprofile"
          }}
        />
      );
    }

    //For redirecting to author profile page
    if (this.props.authorState.redirectingAuthor) {
      return (
        <Redirect
          to={{
            pathname: "/authorprofile"
          }}
        />
      );
    }

    return (
      //later add a ternary in the classname to hide this unless owner id valid
      <div>
        <div className="sticky"></div>
        <div className="back-to-dashboard-container">
          <button
            type="button"
            className="author-profile-button"
            onClick={() => {
              this.props.dispatch(
                createAuthor(this.props.locationState.currentLocation.ownerId.id)
              );
              this.props.dispatch(
                createAuthorLocation(
                  this.props.locationState.currentLocation.ownerId.id
                )
              );
            }}
          >
            Author Profile
          </button>
          <button
            type="button"
            name="back-to-dashboard"
            className="back-to-dashboard"
            onClick={() => this.redirectToDashboard(true)}
          >
            Back to Dashboard{" "}
          </button>
        </div>

        <div className="image-and-title">
          <div className="location-image-container">
            <img
              className="location-image"
              alt="location-image"
              src={this.props.locationState.currentLocation.image}
            />
          </div>

          <div className="change-image-button">
            <label
              htmlFor="single"
              style={{
                fontWeight: "bold",
                color: "blue",
                textDecoration: "underline"
              }}
            >
              Change image
            </label>
            <input
              type="file"
              id="single"
              onChange={e => this.onChange(e)}
              style={{ visibility: "hidden" }}
            />
          </div>

          <h1 className="location-title">Title Placeholder</h1>
          <div className="star-ratings">Star Ratings Placeholder</div>
            <button
              type="button"
              className="edit-location-button"
              name="edit-location"
              onClick={() => {
                this.toggleEditState(true);
              }}
            >
              Edit Location
            </button>
            <h1>{this.props.locationState.currentLocation.title}</h1>
          </div>

          <div className="description-container">
            <h2 className="description-label">Description</h2>
            <div className="description-gray-box">
              <p className="location-description">Description Text Placeholder. Here are Lorem Ipsum text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <h2 className="location-description">{this.props.locationState.currentLocation.description}</h2>
          </div>

          <div className="address-container">
            <h2 className="address-label">Address</h2>
            <div className="address-gray-box">
            <p>
              Address Line Placeholder
              <br/>
              City, State, Zipcode
            </p>
            <p>
              {this.props.locationState.currentLocation.address}
              &nbsp;
              {this.props.locationState.currentLocation.city}
              &nbsp;
              {this.props.locationState.currentLocation.state}
              &nbsp;
              {this.props.locationState.currentLocation.zipCode}
            </p>
            </div>
          </div>

        <div id="maproot">
          <div className="map-placeholder">Map Placeholder</div>
        </div>

        <CommentContainer />

        {/*Do we need this? We already have a dashboard button above*/}
        {/*<Link to="/dashboard">Dashboard</Link>*/}
      </div>
    );
  }
}

//connect this to state with mapstatetoprops
//individual location obj passed as state
const mapStateToProps = state => ({
  locationState: state.location,
  authorState: state.authorProfile
});
export default connect(mapStateToProps)(LocationIndividual);
