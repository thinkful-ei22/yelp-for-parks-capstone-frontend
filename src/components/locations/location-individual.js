import React from 'react';
import { connect } from 'react-redux';
import LocationEditor from './location-editor';
import CommentContainer from '../comments/comment-container';
import { geocode, updateImage, getOneLocation } from '../../actions/location';
import { Link } from 'react-router-dom';
import LocationMap from './location-map';
import './styles/location-individual.css';

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

  toggleEditState(bool){
    this.setState({ editing: bool });
  }

  onChange(e){
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

    let editButton = '';
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
        <Link to="/dashboard">
          <button type="button" name="back-to-dashboard">
            Back to Dashboard{' '}
          </button>
        </Link>
        <div>
          <div className="sticky"></div>
          <div className="back-to-dashboard-container">
          </div>

          <div className="image-and-title">
            <div className="location-image-container">
              <img
                className="location-image"
                alt="location"
                src={this.props.locationState.currentLocation.image}
              />
            </div>

            <div className="change-image-button">
              <label
                htmlFor="single"
                style={{
                  fontWeight: 'bold',
                  color: 'blue',
                  textDecoration: 'underline'
                }}
              >
              Change image
              </label>
              <input
                type="file"
                id="single"
                onChange={e => this.onChange(e)}
                style={{ visibility: 'hidden' }}
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
            <LocationMap />
          </div>

          <div className="special-instructions-container">
            <h2 className="special-instructions-label">Things to Note</h2>
            <div className="special-instructions-gray-box">
              <p className="location-special-instructions">Special Instructions Text Placeholder. Here are Lorem Ipsum text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              <p className="location-special-instructions">{this.props.locationState.currentLocation.specialInstructions}</p>
            </div>

          </div>


          <CommentContainer />
          <p>author</p>
          <Link to={`/profile/${currentLocation.ownerId.id}`}>
            <button type="button">Author Profile</button>
          </Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location,
  loggedIn: state.user
});
export default connect(mapStateToProps)(LocationIndividual);
