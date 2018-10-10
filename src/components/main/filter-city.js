import React from "react";

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
      <div>
        <form onChange={e => this.handleOnChange(e)}>
          <input
            type="text"
            name="city-search-box"
            placeholder="Portland"
            ref={input => (this.city = input)}
          />
        </form>
      </div>
    );
  }
}

export default FilterCity;
