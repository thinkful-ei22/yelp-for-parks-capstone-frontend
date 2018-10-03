import React from "react";

class CommentModal extends React.Component {

  render() {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHideClassName}>
        {/* When we have time for styling - switch to Star ratings with fontAwesome
        But for now...we'll use regular radio buttons */}
        <form>
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
            <button type="submit" onClick={handleClose}>Submit</button>
          </div>
        </form>
      </div>
    );

  }
}

export default CommentModal;
