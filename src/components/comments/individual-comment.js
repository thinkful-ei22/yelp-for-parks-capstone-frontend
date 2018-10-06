import React from "react";
import { connect } from "react-redux";

import { deleteComment } from "../../actions/comment";

import "./styles/individual-comment.css";

class IndividualComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  toggleEditMode(bool) {
    this.setState({
      editMode: bool
    });
  }

  componentWillMount() {
    this.toggleEditMode(false);
  }
  componentWillUnmount() {
    this.toggleEditMode(false);
  }

  render() {
    let editModeToggler = (
      <button onClick={() => this.toggleEditMode(true)}>delete</button>
    );
    if (this.state.editMode === true) {
      editModeToggler = (
        <div className="confirm-delete">
          <p>are you sure?</p>
          <button
            name="confirm-delete"
            onClick={() =>
              this.props.dispatch(deleteComment(this.props.comment.id))
            }
          >
            Yes
          </button>
          <button
            name="reject-delete"
            onClick={() => this.toggleEditMode(false)}
          >
            No
          </button>
        </div>
      );
    }

    return (
      <div className="individual-comment" id={this.props.comment.ownerId}>
        {editModeToggler}
        <big>User:</big>
        <p>{this.props.comment.ownerId}</p>
        <br />
        <big>Subject:</big>
        <strong>{this.props.comment.subject}</strong>
        <br />
        <big>Rating:</big>
        <p>{this.props.comment.rating}</p>
        <br />
        <big>Text:</big>
        <p>{this.props.comment.text}</p>
      </div>
    );
  }
}

export default connect()(IndividualComment);
