import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <li>
        <a href={this.props.url}>{this.props.name}</a>
        &nbsp;<span>{this.props.comment}</span>
      </li>
    );
  }
}

export default Comments;
