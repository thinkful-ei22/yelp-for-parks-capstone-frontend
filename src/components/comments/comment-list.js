import React from "react";
import { connect } from "react-redux";
import IndividualComment from "./individual-comment";
import "./styles/comment-list.css";


class CommentList extends React.Component {
  render() {
    if (!this.props.locationState.currentLocation.comments) {
      return (
        <div className="no-comments-container">
          <strong>No Comments</strong>
          <br />
          <small>...does that count as a pun?</small>
        </div>
      );
    }
    return (
      <div className="comments-list-container">
        {this.props.locationState.currentLocation.comments.map((comment, i) => {
          return <IndividualComment comment={comment} key={i} />;

        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(CommentList);
