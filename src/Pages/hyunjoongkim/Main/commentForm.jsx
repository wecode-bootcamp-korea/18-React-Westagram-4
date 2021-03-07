import React, { Component, createRef } from "react";
import "./Main.scss";

class CommentForm extends Component {
  state = {
    text: "",
  };
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const content = this.inputRef.current.value;
    //if(!content===""){}
    content && this.props.onAdd(content); // content가 비어져 있지 않다면 onAdd함수로 작성한 댓글 전달
    this.inputRef.current.value = "";
    //   commentInput.focus(); focus는 ref 이용 나중에 구현
  };

  handleInput = (e) => {
    const inputText = e.target.value;
    this.setState({ text: inputText });
  };

  render() {
    return (
      <form className="footerComment" onSubmit={this.onSubmit}>
        <i class="far fa-smile-beam fa-2x"></i>
        <input
          id="commentInput"
          onChange={this.handleInput}
          type="text"
          placeholder="댓글 달기..."
          ref={this.inputRef}
        />
        <button className={this.state.text != "" ? "activebtn" : "unactivebtn"}>
          게시
        </button>
      </form>
    );
  }
}

export default CommentForm;
