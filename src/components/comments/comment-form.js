import React from "react";
import CommentList from './comment-list';
import CommentModal from './comment-modal';

class Comment extends React.Component {

  render() {
    return (
      <div className="comment-header-container">
        //Add a route for comments
        //Add a route for reviews on comments so link on Line 10 will be functional
        <h1>Have you been here? Write a</h1>
        <CommentModal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal to write comments form goes here</p>
        </CommentModal>
        <button type="button" onClick={this.showModal}>
          write a review
        </button>

        <p>Check out what people are saying!</p>
        <CommentList />

      </div>
    );
  }
}

export default Comment;
