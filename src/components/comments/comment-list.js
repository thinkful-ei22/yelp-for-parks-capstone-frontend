import React from 'react';
import { connect } from 'react-redux';
import IndividualComment from './individual-comment';

class CommentList extends React.Component {
  render() {
    if (!this.props.locationState.currentLocation.comments) {
      return (
        <div>
          <strong>No Comments</strong>
          <br />
          <small>...does that count as a pun?</small>
        </div>
      );
    }
    return (
      <div>
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
