import React from "react";

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
      <div>
        <form onChange={e => this.handleOnChange(e)}>
          <input
            type="text"
            name="keyword-search-box"
            placeholder="Millenium Park"
            ref={input => (this.keyword = input)}
          />
        </form>
      </div>
    );
  }
}

export default FilterKeyword;
