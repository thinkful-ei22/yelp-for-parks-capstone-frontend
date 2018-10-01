import React from "react";
import { Link } from 'react-router-dom';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment-header-container">
        //Add a route for comments
        //Add a route for reviews on comments so link on Line 10 will be functional
        <p>Have you been here? Write a <Link to="/review">review!</Link></p>

        <p>Check out what people are saying!</p>
        //We would need to populate the comments here for the particular location
      </div>
    );
  }
}

export default Comment;
