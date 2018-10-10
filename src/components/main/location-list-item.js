import React from "react";
import { connect } from "react-redux";
import { getOneLocation } from "../../actions/location";
import "./styles/location-list-item.css";

class LocationListItem extends React.Component {
  render() {
    return (
      <div className="list-item-container">
        <button
          id={this.props.locationObject.id}
          className="location-list-item"
          type="button"
          onClick={() => {
            this.props.dispatch(getOneLocation(this.props.locationObject.id))
            .then(() => this.props.onClick());
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});

export default connect(mapStateToProps)(LocationListItem);
