import React, { Component } from "react";

class Comment extends Component {
  render() {
    const { url, name, comment } = this.props;
    return (
      <li>
        <a href={url}>{name}</a>
        &nbsp;<span>{comment}</span>
      </li>
    );
  }
}

export default Comment;
