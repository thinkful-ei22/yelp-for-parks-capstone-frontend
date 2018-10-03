import React from "react";
import "./styles/comment-modal.css"

class CommentModal extends React.Component {
  // constructor (props) {
  //   super(props)
  //   this.state = { show:false }
  // }

  render() {
    const showHideClassName = this.props.show ? 'modal' : 'modal hidden';

    return (
      <main>
        <div className={showHideClassName}>
          <form className='modal-main'>
            <p>Share your thoughts!</p>
            <div>
              <input type="radio" id="starRating1"
                name="star" value="1" />
              <label for="starRating1">1</label>

              <input type="radio" id="starRating2"
                name="star" value="2" />
              <label for="starRating2">2</label>

              <input type="radio" id="starRating3"
                name="star" value="3" />
              <label for="starRating3">3</label>

              <input type="radio" id="starRating4"
                name="star" value="4" />
              <label for="starRating4">4</label>

              <input type="radio" id="starRating5"
                name="star" value="5" />
              <label for="starRating5">5</label>
            </div>
            <input type="text" id="commentSubject" placeholder="subject line"></input>
            <textarea name="comment-text-area" rows="3" columns="33" placeholder="Write a comment!"></textarea>
            <div>
              <button type="button" onClick={ () => this.props.handleClose() }>Submit</button>
            </div>
          </form>

        </div>
      </main>
    );
  };
};

export default CommentModal;
