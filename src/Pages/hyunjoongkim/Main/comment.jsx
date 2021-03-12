import React, { Component } from "react";

class Comment extends Component {
  state = {
    isClicked: false,
  };
  handleDelete = (comment) => {
    this.props.handleDelete(this.props.propcomment);
    // this.props안에 있는 handleDelete함수 호출 (Main.js)
  };
  handleHeart = (comment) => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  };

  render() {
    const { nickName, content } = this.props.propcomment;
    // propcomment안에 있는 데이터 nickName, content 에 할당

    const { isClicked } = this.state;
    return (
      <li className="comment">
        <div className="commentLeft">
          <span className="commentNickName">{nickName}</span>
          <span className="commentContent">{content}</span>
        </div>
        <div className="commentRight">
          <button type="button" id="deleteBtn" onClick={this.handleDelete}>
            <i className="fas fa-trash-alt"></i>
          </button>
          <button
            type="button"
            id={isClicked ? "ckickHeartBtn" : "heartBtn"}
            value="false"
            onClick={this.handleHeart}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default Comment;
