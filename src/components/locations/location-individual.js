import React from "react";
import { connect } from "react-redux";
import LocationEditor from "./location-editor";
import CommentContainer from "../comments/comment-container";
import { geocode, updateImage, getOneLocation } from "../../actions/location";
import { Link } from "react-router-dom";
import LocationMap from "./location-map";
import "./styles/location-individual.css";
import StarRatings from "react-star-ratings";

class LocationIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editButtonVisible: false,
      uploading: false
    };
  }

  componentDidMount() {
    this.props.dispatch(geocode(this.props.locationState));
    this.props.dispatch(getOneLocation(this.props.match.params.id));
  }

  toggleEditState(bool) {
    this.setState({ editing: bool });
  }

  onChange(e) {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    this.props.dispatch(
      updateImage(this.props.locationState.currentLocation.id, formData)
    );
  }

  render() {
    const currentLocation = this.props.locationState.locationList.find(
      location => {
        return location.id === this.props.match.params.id;
      }
    );
    if (this.state.editing === true) {
      return <LocationEditor stopEditing={() => this.toggleEditState(false)} />;
    }
    if (!currentLocation) {
      return <div>loading...</div>;
    }

    const { comments } = this.props.locationState.currentLocation;
    let rating = 0;
    if (comments.length) {
      rating =
        comments.reduce((total, comment) => {
          return total + comment.rating;
        }, 0) / comments.length;
    }

    let editButton = "";
    if (currentLocation.ownerId.id === this.props.loggedIn.currentUser.id) {
      editButton = (
        <button
          type="button"
          name="edit-location"
          onClick={() => {
            this.toggleEditState(true);
          }}
        >
          Edit Location
        </button>
      );
    }
    return (
      <div>
        {editButton}
        <div className="image-and-title">
          <div className="location-image-container">
            <img
              className="location-image"
              alt="location"
              src={this.props.locationState.currentLocation.image}
            />
          </div>
          <h1 className="location-title">
            {this.props.locationState.currentLocation.title}
          </h1>

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
          <Link to={`/profile/${currentLocation.ownerId.id}`}>
            <button type="button" className="author-button">
              Author Profile
            </button>
          </Link>
          <div className="star-ratings-location">
            <StarRatings
              rating={rating}
              starDimension="28px"
              starSpacing="2px"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="description-container">
          <h2 className="description-label">Description</h2>
          <div className="description-gray-box">
            <p className="location-description">
              {this.props.locationState.currentLocation.description}
            </p>
          </div>
        </div>

        <div className="address-container">
          <h2 className="address-label">Address</h2>
          <div className="address-gray-box">
            <p className="location-address">
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
          <LocationMap />
        </div>
        <div className="special-instructions-container">
          <h2 className="special-instructions-label">Things to Note</h2>
          <div className="special-instructions-gray-box">
            <p className="location-special-instructions">
              {this.props.locationState.currentLocation.specialInstructions}
            </p>
          </div>
        </div>
        <CommentContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location,
  loggedIn: state.user
});
export default connect(mapStateToProps)(LocationIndividual);
