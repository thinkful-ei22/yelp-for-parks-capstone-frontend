import React from "react";
import CommentList from './comment-list';
import CommentModal from './comment-modal';

class Comment extends React.Component {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="comment-header-container">
        //Add a route for comments
        //Add a route for reviews on comments so link on Line 10 will be functional
        <h1>Have you been here?</h1>
        <button type='button' onClick={this.showModal}>Write a review</button>

        <CommentModal  show={this.state.show} handleClose={this.hideModal}></CommentModal>

        <p>Check out what people are saying!</p>
        <CommentList />

      </div>
    );
  }
}

export default Comment;
