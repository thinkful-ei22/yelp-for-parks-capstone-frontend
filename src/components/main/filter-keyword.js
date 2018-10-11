import React from "react";
import "./styles/filter-keyword.css";

class FilterKeyword extends React.Component {
  handleOnChange(e) {
    e.preventDefault();
    this.props.handleKeywordFilter(this.keyword.value);
    // console.log(this.keyword.value)
    // this.props.dispatch(filterKeyword(this.keyword.value))
    // this.keyword.value = '';
  }

  render() {
    return (
      <div className="keyword-filter-div">
        <form className="filter-keyword-form" onChange={e => this.handleOnChange(e)}>
          <br/>
          <br/>
          <input
            type="text"
            className="keyword-filter"
            name="keyword-search-box"
            placeholder="Search by Keyword! (i.e. Millenium Park)"
            ref={input => (this.keyword = input)}
          />
          <br/>
          <br/>
        </form>
      </div>
    );
  }
}

export default FilterKeyword;
