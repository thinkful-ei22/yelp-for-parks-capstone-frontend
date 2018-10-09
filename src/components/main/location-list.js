import React from "react";
import { connect } from "react-redux";
import { getAllLocations, setPage } from "../../actions/location";
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
    this.props.dispatch(getAllLocations());
  }

  toggleRedirecting(bool) {
    this.setState({
      redirecting: bool
    });
  }

  next() {
    this.props.dispatch(getAllLocations(this.props.locationState.page + 1));
    this.props.dispatch(setPage(this.props.locationState.page + 1));
  }
  previous() {
    this.props.dispatch(getAllLocations(this.props.locationState.page - 1));
    this.props.dispatch(setPage(this.props.locationState.page - 1));
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

    let nextBtn;
    let prevBtn;
    if (this.props.locationState.page > 0) {
      prevBtn = (
        <button className="prevBtn" onClick={() => this.previous()}>
          Previous
        </button>
      );
    }
    if (this.props.locationState.locationList) {
      if (this.props.locationState.locationList.length > 2) {
        nextBtn = (
          <button
            className="nextBtn"
            id="nextButton"
            onClick={this.next.bind(this)}
          >
            Next
          </button>
        );
      }
    }

    return (
      <div className="location-list-items">
        {this.props.locationState.locationList === null ? (
          <div>
            {" "}
            <p>There's nothing here! Do you live in Wyoming?</p>{" "}
          </div>
        ) : (
          this.props.locationState.locationList.map((location, i) => {
            return (
              <LocationListItem
                className="location-item"
                key={i}
                locationObject={location}
                onClick={() => this.toggleRedirecting(true)}
              />
            );
          })
        )}
        <div>
          {prevBtn}
          {nextBtn}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationList);
