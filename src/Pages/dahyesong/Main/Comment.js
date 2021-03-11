import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <>
        <ul className="comment_up">
          {this.props.inputComment.map((el) => (
            <li>users:{el.str}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Comment;
