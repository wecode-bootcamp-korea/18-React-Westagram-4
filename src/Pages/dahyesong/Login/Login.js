import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginSong extends Component {
  constructor() {
    super();
    this.state = {
      //기본 값 설정
      id_field: "",
      pw_field: "",
      ready: false,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  loginCheck = () => {
    this.state.pw_field.length >= 5 && this.state.id_field.includes("@")
      ? this.setState({ ready: true })
      : this.setState({ ready: false });
  };

  handleIdInput = (event) => {
    this.setState({
      id_field: event.target.value,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      pw_field: event.target.value,
    });
  };

  goToMain = (event) => {
    event.preventDefault();

    // if (this.state.ready) {
    //   this.props.history.push("/main-song");
    // }
    fetch("http://10.58.4.167:8000/users/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id_field,
        password: this.state.pw_field,
        // username: "hello1210",
      }),
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  render() {
    console.log("render");

    return (
      <div className="LoginSong">
        <div className="login_form">
          <h1 className="logo">westagram</h1>

          <form>
            <input
              type="text"
              name="email"
              className="id_field"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onKeyUp={this.loginCheck}
              onChange={this.handleIdInput}
            />
            <input
              type="password"
              name="password"
              className="pw_field"
              placeholder="비밀번호"
              onKeyUp={this.loginCheck}
              onChange={this.handlePwInput}
            />
            <button
              className={this.state.ready ? "activationBtn" : "disabledBtn"}
              onClick={this.goToMain}
            >
              로그인
            </button>
          </form>

          <div className="links">
            <Link to="#">비밀번호를 잊으셨나요?</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginSong);
