import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class RedirectButton extends React.Component {
  //this is a generic redirect button for basic redirection purposes
  constructor(props) {
    super(props);
    this.state = {
      redirecting: false
    };
  }

  componentWillMount() {
    this.setState({
      redirecting: false
    });
  }
  componentWillUnmount() {
    this.setState({
      redirecting: false
    });
  }

  toggleRedirect(bool) {
    this.setState({
      redirecting: bool
    });
  }

  /*
  props to pass
  text : for the text in the button
  name : for the button name
  path : for the redirect path
  onClick: for any other onClick functionality
  */
  render() {
    const route = this.props.route;
    if (this.state.redirecting === true) {
      return (
        <Redirect
          to={{
            pathname: this.props.route
          }}
        />
      );
    }
    return (
      <button
        name={this.props.name}
        type="button"
        onClick={() => {
          if (this.props.onClick) {
            this.props.onClick();
          }
          this.toggleRedirect(true);
        }}
      >
        {this.props.text ? this.props.text : null}
      </button>
    );
  }
}

export default connect()(RedirectButton);
