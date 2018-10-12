import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment, getOneComment } from '../../actions/comment';

import './styles/individual-comment.css';

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

  componentDidMount(){
    this.props.dispatch(getOneComment(this.props.comment.id));
  }

  componentWillMount() {
    this.toggleEditMode(false);
  }
  componentWillUnmount() {
    this.toggleEditMode(false);
  }

  render() {
    let editModeToggler = (
      <button className="delete-comment-button" onClick={() => this.toggleEditMode(true)}>Delete Comment</button>
    );
    if (this.state.editMode === true) {
      editModeToggler = (
        <div className="confirm-delete">
          <p>are you sure?</p>
          <button
            name="confirm-delete"
            onClick={() => {
              this.props.dispatch(deleteComment(this.props.comment.id))
                .then(() => this.toggleEditMode(false));}
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
    if (!this.props.commentState.currentComment.ownerId){
      return <div>Loading...</div>;
    }
    return (
      <div className="individual-comment" id={this.props.comment.ownerId}>
        {this.props.comment.ownerId === this.props.userState.currentUser.id
          ? editModeToggler
          : null}

        <div className="comment-gray-box">
          <p className="comment-text">User: <Link to={`/profile/${this.props.commentState.currentComment.ownerId.id}`}>{this.props.commentState.currentComment.ownerId.firstLastInitial}</Link></p>
          <p className="comment-text">Subject:<strong> {this.props.comment.subject}</strong></p>
          <p className="comment-text">Rating: {this.props.comment.rating}</p>
          <p className="comment-text">Review: {this.props.comment.text}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userState: state.user,
  commentState: state.comment
});
export default connect(mapStateToProps)(IndividualComment);
