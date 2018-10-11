import React from 'react';
import { connect } from 'react-redux';
import LocationEditor from './location-editor';
import CommentContainer from '../comments/comment-container';
import { geocode, updateImage } from '../../actions/location';
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
        {/*We pull the information from the state.*/}

        <div id="maproot">
          <LocationMap />
        </div>
        <h1>{this.props.locationState.currentLocation.title}</h1>
        <img
          className="location-image"
          alt="location"
          src={this.props.locationState.currentLocation.image}
        />
        <div className="button">
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
        <p>{this.props.locationState.currentLocation.description}</p>

        <p>
          {this.props.locationState.currentLocation.address}
          &nbsp;
          {this.props.locationState.currentLocation.city}
          &nbsp;
          {this.props.locationState.currentLocation.state}
          &nbsp;
          {this.props.locationState.currentLocation.zipCode}
        </p>

        {'Link to redirect to author\'s profile page'}
        <p>author</p>
        <Link to={`/profile/${currentLocation.ownerId.id}`}>
          <button type="button">Author Profile</button>
        </Link>
        {<CommentContainer />}
        {/*comments*/}
        <Link to="/dashboard">Dashboard</Link>
      </div>
    );
  }
}

//connect this to state with mapstatetoprops
//individual location obj passed as state
const mapStateToProps = state => ({
  locationState: state.location,
  loggedIn: state.user
});
export default connect(mapStateToProps)(LocationIndividual);
