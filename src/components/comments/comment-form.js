import React from "react";
import { Link } from 'react-router-dom';
import CommentList from './comment-list';
import CommentCard from './comment-card';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment-header-container">
        //Add a route for comments
        //Add a route for reviews on comments so link on Line 10 will be functional
        <h1>Have you been here? Write a <Link to="/review">review!</Link></h1>

        <p>Check out what people are saying!</p>
        <CommentList />

      </div>
    );
  }
}

export default Comment;
