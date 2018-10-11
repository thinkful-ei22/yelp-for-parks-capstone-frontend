import React from "react";
import "./styles/filter-city.css";

class FilterCity extends React.Component {
  handleOnChange(e) {
    e.preventDefault();
    this.props.handleCityFilter(this.city.value);
    // console.log(this.city.value)
    // this.props.dispatch(filterCity(this.city.value))
    // this.city.value = '';
  }

  render() {
    return (
      <div className="city-filter-div">
        <form className="filter-city-form" onChange={e => this.handleOnChange(e)}>
          <input
            type="text"
            className="city-filter"
            name="city-search-box"
            placeholder="Search by City! (i.e. Portland)"
            ref={input => (this.city = input)}
          />
        </form>
      </div>
    );
  }
}

export default FilterCity;
