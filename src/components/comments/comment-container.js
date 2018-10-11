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
        <div className="review-button-container">
          <h3>Have you been here?</h3>
          <button className="review-button" type="button" onClick={this.showModal}>
            Write a review!
          </button>
        </div>
        <Overlay show={this.state.show} onClick={() => this.hideModal} />
        <CommentModal show={this.state.show} handleClose={this.hideModal} />
        <CommentList />
      </div>
    );
  }
}

export default CommentContainer;
