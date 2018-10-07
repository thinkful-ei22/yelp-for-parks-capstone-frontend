import React from "react";
import { filterKeyword } from "../../actions/location";

class FilterKeyword extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.keyword.value)
    this.props.dispatch(filterKeyword(this.keyword.value))
  }

    render() {

      return (
        <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input
              type="text"
              name="keyword-search-box"
              placeholder="Millenium Park"
              ref={input => (this.keyword = input)}
            />
          </form>
        </div>
      )
    }
  }

export default FilterKeyword;
