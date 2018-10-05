import React from "react";
import { connect } from "react-redux";
import { toggleRedirect, getOneLocation } from "../../actions/location";
import './styles/location-list-item.css';

class LocationListItem extends React.Component {
  render() {
    return (
      <button
        id={this.props.locationObject.id}
        className="location-list-item"
        type="button"
        onClick={() => {
          this.props.dispatch(getOneLocation(this.props.locationObject.id))
          .then(() => this.props.onClick());
        }}
      >
        <p>{this.props.locationObject.title}</p>
        <p>{this.props.locationObject.description}</p>
        <img class="thumbnail" src={this.props.locationObject.image}></img>
      </button>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});

export default connect(mapStateToProps)(LocationListItem);
