import React from "react";
import CommentList from "./comment-list";
import CommentModal from "./comment-modal";
import Overlay from "./modal-overlay";
import "./styles/comment-container.css";

class CommentContainer extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="comment-container">
        <h1>Have you been here?</h1>
        <button type="button" onClick={this.showModal}>
          Write a review!
        </button>
        <Overlay show={this.state.show} onClick={() => this.hideModal} />
        <CommentModal show={this.state.show} handleClose={this.hideModal} />

        <p>Check out what people are saying!</p>
        <CommentList />
      </div>
    );
  }
}

export default CommentContainer;
