import React from 'react';
import { connect } from 'react-redux';

import { createComment } from '../../actions/comment';
import './styles/comment-modal.css';

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: null
    };
  }

  setRatingValue(value) {
    this.setState({ratingValue: value });
  }

  render() {
    const showHideClassName = this.props.show ? 'modal' : 'modal hidden';

    return (
      <div className={showHideClassName}>
        <div className="close-modal-button-container">
          <button
            type="button"
            name="close-comment-modal"
            className="close-comment-button"
            onClick={() => {
              this.props.handleClose();
            }}
          >
            Close
          </button>
        </div>

        <form className="modal-form">
          <div className="star-rating-container">
            <p>Give it some stars!</p>
            <div className="star-rating">
              <div className="star-rating__wrap">
                <input
                  className="star-rating__input"
                  id="star-rating-1"
                  type="radio"
                  name="rating"
                  value="1"
                  ref={input => (this.oneStar = input)}
                  onClick={() => this.setRatingValue(1)}
                />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-1" title="1 out of 5 stars"></label>
                <input
                  className="star-rating__input"
                  id="star-rating-2"
                  type="radio"
                  name="rating"
                  value="2"
                  ref={input => (this.twoStar = input)}
                  onClick={() => this.setRatingValue(2)}
                />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-2" title="2 out of 5 stars"></label>
                <input
                  className="star-rating__input"
                  id="star-rating-3"
                  type="radio"
                  name="rating"
                  value="3"
                  ref={input => (this.threeStar = input)}
                  onClick={() => this.setRatingValue(3)}
                />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-3" title="3 out of 5 stars"></label>
                <input
                  className="star-rating__input"
                  id="star-rating-4"
                  type="radio"
                  name="rating"
                  value="4"
                  ref={input => (this.fourStar = input)}
                  onClick={() => this.setRatingValue(4)}
                />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-4" title="4 out of 5 stars"></label>
                <input
                  className="star-rating__input"
                  id="star-rating-5"
                  type="radio"
                  name="rating"
                  value="5"
                  ref={input => (this.fiveStar = input)}
                  onClick={() => this.setRatingValue(5)}
                />
                <label className="star-rating__ico fa fa-star-o fa-lg" htmlFor="star-rating-5" title="5 out of 5 stars"></label>
              </div>
            </div>
          </div>

          <div className="subject-and-comment">
            <label htmlFor="comment-subject">Subject</label>
            <input
              type="text"
              id="comment-subject"
              placeholder="Best Park in the Pacific North West!"
              ref={input => (this.subject = input)}
            />
            <br/>
            <label htmlFor="comment-text">Comment</label>
            <textarea
              id="comment-text"
              name="comment-text-area"
              rows="3"
              columns="33"
              placeholder="Very lively and well maintained park! My family and I went when the tulips were in bloom and it was gorgeous!"
              ref={input => (this.text = input)}
            />
          </div>

          <div className="comment-submit-button-container">
            <button
              type="button"
              name="submit-comment"
              className="submit-comment-button"
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
