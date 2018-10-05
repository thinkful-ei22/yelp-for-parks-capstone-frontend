import React from "react";
import { connect } from "react-redux";
import IndividualComment from "./individual-comment";

class CommentList extends React.Component {
  render() {
    if (this.props.locationState.currentLocation.comments === []) {
      return (
        <div>
          <strong>No Comment</strong>
          <small>(...does that count as a pun?)</small>
        </div>
      );
    }
    return <div />;
    // return (
    //   // <div>
    //   //   {this.props.locationState.currentLocation.comments.map(comment => {
    //   //     return <IndividualComment comment={comment} />;
    //   //   })}
    //   // </div>
    // );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(CommentList);
