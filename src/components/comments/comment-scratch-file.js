import React from "react";
import { connect } from "react-redux";
import {
  createComment,
  updateComment,
  deleteComment
} from "../../actions/comment";
import { getOneLocation } from "../../actions/location";

class CommentScratchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue: null
    };
  }
  //to create a test location
  componentWillMount() {
    this.props.dispatch(getOneLocation("5bb24183f1d49a4288f90931"));
  }

  // componentWillUnmount() {
  //   this.props.dispatch(
  //     deleteLocation(this.props.locationState.currentLocation.id)
  //   );
  // }

  setRadioValue(value) {
    this.setState({
      radioValue: value
    });
    console.log(this.state.radioValue);
  }

  render() {
    return (
      <div>
        <div>
          <form className="comment-form">
            <label htmlFor="subject" className="comment-label" />
            <input
              id="subject"
              className="login-input"
              type="text"
              ref={input => (this.subject = input)}
              placeholder="subject"
            />
            <br />
            <label htmlFor="comment-text" className="comment-label" />
            <textarea
              id="comment-text"
              className="login-input"
              type="text"
              ref={input => (this.commentText = input)}
              placeholder="comment-text"
            />
            <br />
            <button type="button" onClick={() => this.setRadioValue(1)}>
              1
            </button>
            <button type="button" onClick={() => this.setRadioValue(5)}>
              5
            </button>
            <br />

            <button
              type="button"
              onClick={() => {
                this.props.dispatch(
                  createComment({
                    subject: this.subject.value,
                    text: this.commentText.value,
                    rating: this.state.radioValue,
                    locationId: this.props.locationState.currentLocation.id
                  })
                );
              }}
            >
              submit comment
            </button>
            <button
              type="button"
              onClick={() => {
                this.props.dispatch(
                  updateComment(
                    {
                      subject: this.subject.value,
                      text: this.commentText.value,
                      rating: this.state.radioValue,
                      locationId: this.props.locationState.currentLocation.id
                    },
                    this.props.commentState.currentComment.id
                  )
                );
              }}
            >
              edit comment
            </button>
            <button
              type="button"
              onClick={() => {
                this.props.dispatch(
                  deleteComment(this.props.commentState.currentComment.id)
                );
              }}
            >
              Delete Comment
            </button>
          </form>
        </div>
        <div>
          <p>==================================================</p>
          <h2> HERE IS THE COMMENT</h2>
          <p>Subject</p>
          <p>
            {this.props.commentState.currentComment
              ? this.props.commentState.currentComment.subject
              : "No value"}
          </p>
          <br />
          <p>Text</p>
          <p>
            {this.props.commentState.currentComment
              ? this.props.commentState.currentComment.text
              : "No value"}
          </p>
          <br />
          <p>Rating</p>
          <p>
            {this.props.commentState.currentComment
              ? this.props.commentState.currentComment.rating
              : 0}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.user,
  commentState: state.comments,
  locationState: state.location
});

export default connect(mapStateToProps)(CommentScratchComponent);
