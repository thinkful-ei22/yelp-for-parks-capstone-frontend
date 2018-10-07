import React from "react";
import { connect } from "react-redux";
import { getAllLocations } from "../../actions/location";
import { Redirect } from "react-router";
import LocationListItem from "./location-list-item";
import "./styles/location.css";

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirecting: false
    };
  }

  componentDidMount() {
    console.log(this.props.locationState);
    this.props.dispatch(
      getAllLocations(/*`?ownerId=${this.props.currentUser.id}`*/)
    );
  }

  toggleRedirecting(bool) {
    this.setState({
      redirecting: bool
    });
  }

  render() {
    if (this.state.redirecting === true) {
      return (
        <Redirect
          to={{
            pathname: "/location"
          }}
        />
      );
    }
    return (
      <div className="location-list-items">
        {this.props.locationState.locationList === null ? (
          <div>
            {" "}
            <p>There's nothing here! Do you live in Iowa?</p>{" "}
          </div>
        ) : (
          this.props.locationState.locationList.map(location => {
            return (
              <LocationListItem
                class="location-item"
                locationObject={location}
                onClick={() => this.toggleRedirecting(true)}
              />
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location,
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(LocationList);
