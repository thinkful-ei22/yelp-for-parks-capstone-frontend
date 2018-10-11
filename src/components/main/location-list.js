import React from 'react';
import { connect } from 'react-redux';
import { getAllLocations } from '../../actions/location';
import LocationListItem from './location-list-item';
import './styles/location-list.css';


class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirecting: false,
      currentPage: 1,
      locationsPerPage: 3
    };
  }

  componentDidMount() {
    this.props.dispatch(getAllLocations());
  }

  next() {
    this.setState({
      currentPage: this.state.currentPage+1
    });
  }
  previous() {
    this.setState({
      currentPage: this.state.currentPage-1
    });
  }

  render() {
    let filteredLocations = this.props.locationState.locationList
      .filter(location => {
        return location.city
          .toLowerCase()
          .includes(this.props.filter.city.toLowerCase());
      })
      .filter(location => {
        return (
          location.title
            .toLowerCase()
            .includes(this.props.filter.keyword.toLowerCase()) ||
          location.description
            .toLowerCase()
            .includes(this.props.filter.keyword.toLowerCase())
        );
      });

    const indexOfLastLocation = this.state.currentPage * this.state.locationsPerPage;
    const indexOfFirstLocation = indexOfLastLocation - this.state.locationsPerPage;
    const currentLocations = filteredLocations.slice(indexOfFirstLocation, indexOfLastLocation);


    let nextBtn;
    let prevBtn;
    if (this.state.currentPage > 1) {
      prevBtn = (
        <div className="pagination-buttons-container">
          <button className="prevBtn" onClick={() => this.previous()}>
            Previous
          </button>
        </div>
      );
    }
    if (this.props.locationState.locationList) {
      if (this.props.locationState.locationList.length > this.state.locationsPerPage) {
        nextBtn = (
          <div className="pagination-buttons-container">
            <button
              className="nextBtn"
              id="nextButton"
              onClick={this.next.bind(this)}
            >
              Next
            </button>
          </div>
        );
      }

      return (
        <div className="location-list-items">
          {this.props.locationState.locationList === null ? (
            <div>
              <p>There's nothing here! Do you live in Wyoming?</p>
            </div>
          ) : (
            currentLocations.map((location, i) => {
              return (
                <LocationListItem
                  className="location-item"
                  key={i}
                  locationObject={location}
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
}
const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(LocationList);
