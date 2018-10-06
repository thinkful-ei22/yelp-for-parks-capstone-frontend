import React from "react";
import { connect } from "react-redux";

import { createComment } from "../../actions/comment";
import { getOneLocation } from "../../actions/location";
import "./styles/comment-modal.css";

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: null
    };
  }

  setRatingValue(value) {
    this.setState({
      ratingValue: value
    });
    console.log(this.state.ratingValue);
  }

  render() {
    const showHideClassName = this.props.show ? "modal" : "modal hidden";

    return (
      <div className={showHideClassName}>
        <button
          type="button"
          name="close-comment-modal"
          onClick={() => {
            this.props.handleClose();
          }}
        >
          X
        </button>
        <form className="modal-form">
          <p>Share your thoughts!</p>
          <div>
            <input
              type="radio"
              id="star-rating-1"
              name="star"
              value="1"
              ref={input => (this.oneStar = input)}
              onClick={() => this.setRatingValue(1)}
            />
            <label htmlFor="star-rating-1">1</label>

            <input
              type="radio"
              id="star-rating-2"
              name="star"
              value="2"
              ref={input => (this.twoStar = input)}
              onClick={() => this.setRatingValue(2)}
            />
            <label htmlFor="star-rating-2">2</label>

            <input
              type="radio"
              id="star-rating-3"
              name="star"
              value="3"
              ref={input => (this.threeStar = input)}
              onClick={() => this.setRatingValue(3)}
            />
            <label htmlFor="star-rating-3">3</label>

            <input
              type="radio"
              id="star-rating-4"
              name="star"
              value="4"
              ref={input => (this.fourStar = input)}
              onClick={() => this.setRatingValue(4)}
            />
            <label htmlFor="star-rating-4">4</label>

            <input
              type="radio"
              id="star-rating-5"
              name="star"
              value="5"
              ref={input => (this.fiveStar = input)}
              onClick={() => this.setRatingValue(5)}
            />
            <label htmlFor="star-rating-5">5</label>
          </div>

          <label htmlFor="comment-subject">Subject</label>
          <input
            type="text"
            id="comment-subject"
            placeholder="subject line"
            ref={input => (this.subject = input)}
          />

          <label htmlFor="comment-text">Comment</label>
          <textarea
            id="comment-text"
            name="comment-text-area"
            rows="3"
            columns="33"
            placeholder="Write a comment!"
            ref={input => (this.text = input)}
          />
          <div>
            <button
              type="button"
              name="submit-comment"
              onClick={() => {
                this.props
                  .dispatch(
                    createComment({
                      subject: this.subject.value,
                      text: this.text.value,
                      rating: this.state.ratingValue,
                      locationId: this.props.locationState.currentLocation.id
                    })
                  )
                  .then(() => this.props.handleClose());
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  locationState: state.location
});
export default connect(mapStateToProps)(CommentModal);
