import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";
import "../Styles/reset.scss";
import "../Styles/common.scss";

class LoginHong extends Component {
  constructor() {
    super();
    this.state = {
      Id: "",
      Password: "",
    };
  }

  handleLoginInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  loginValidation = () => {
    return this.state.Id.includes("@") && this.state.Password.length >= 5;
  };

  render() {
    return (
      <div className="LoginHong">
        <section className="wrapper">
          <h1 className="logo">Westagram</h1>
          <form className="loginBox">
            <div className="textBox">
              <input
                name="Id"
                type="text"
                onChange={this.handleLoginInput}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="textBox">
              <input
                name="Password"
                type="password"
                onChange={this.handleLoginInput}
                placeholder="비밀번호"
              />
            </div>
            <Link to={this.loginValidation() ? "/main-hong" : "/login-hong"}>
              <button
                className={
                  this.loginValidation() ? "loginBtn" : "loginBtn disabled"
                }
              >
                로그인
              </button>
            </Link>
          </form>
          <span>
            <a href="https://www.google.co.kr">비밀번호를 잊으셨나요?</a>
          </span>
        </section>
      </div>
    );
  }
}

export default LoginHong;
