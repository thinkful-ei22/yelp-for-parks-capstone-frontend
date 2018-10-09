import React from "react";
import { filterCity } from "../../actions/location";

class FilterCity extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.city.value)
    this.props.dispatch(filterCity(this.city.value))
    this.city.value = '';
  }

    render() {

      return (
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              name="city-search-box"
              placeholder="Portland"
              ref={input => (this.city = input)}
            />
          </form>
        </div>
      )
    }
  }

export default FilterCity;
