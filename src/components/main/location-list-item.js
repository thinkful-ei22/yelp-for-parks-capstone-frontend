import React from 'react';
import { connect } from 'react-redux';
import { getOneLocation } from '../../actions/location';
import {Link} from 'react-router-dom';
import './styles/location-list-item.css';

class LocationListItem extends React.Component {
  render() {
    return (
      <section id="list-item-container" className="list-item-container row">
        <Link className="col-12" to={`/location/${this.props.locationObject.id}`}>
          <button
            id={this.props.locationObject.id}
            className="location-list-item col-12"
            type="button"
            onClick={() => {
              this.props.dispatch(getOneLocation(this.props.locationObject.id));
            }}
          >
            <div className="text-thumbnail-container">
              <div className="thumbnail-container">
                <img
                  className="thumbnail"
                  alt="location"
                  src={this.props.locationObject.image}
                />
              </div>
              <div className="text-container">
                <h2 className="title">{this.props.locationObject.title}</h2>
                <h3 className="description">{this.props.locationObject.description}</h3>
              </div>
            </div>
          </button>
        </Link>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});

export default connect(mapStateToProps)(LocationListItem);
