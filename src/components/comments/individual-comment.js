import React from "react";
import { connect } from "react-redux";

class IndividualComment extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.comment.ownerId}</p>
        <p>{this.props.comment.subject}</p>
        <p>{this.props.comment.text}</p>
      </div>
    );
  }
}

export default connect()(IndividualComment);
