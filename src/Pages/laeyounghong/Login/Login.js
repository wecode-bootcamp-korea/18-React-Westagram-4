import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Login.scss";

class LoginHong extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      btnState: "disabled",
    };
  }

  // signup = () => {
  //   fetch("http://localhost:3002/", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.password,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => console.log("결과: ", result));
  // };

  handleLoginInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  loginValidation = () => {
    const { id, password } = this.state;
    id.includes("@") && password.length >= 5
      ? this.setState({
          btnState: "active",
        })
      : this.setState({ btnState: "disabled" });
  };

  goToMain = () => {
    this.state.btnState === "active" && this.props.history.push("/main-hong");
  };

  render() {
    const { handleLoginInput, loginValidation, goToMain } = this;
    const { btnState } = this.state;
    console.log(this.state);
    return (
      <div className="loginHong">
        <section className="wrapper">
          <h1 className="logo">Westagram</h1>
          <form className="loginBox">
            <div className="textBox">
              <input
                name="id"
                type="text"
                onChange={handleLoginInput}
                onKeyUp={loginValidation}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="textBox">
              <input
                name="password"
                type="password"
                onChange={handleLoginInput}
                onKeyUp={loginValidation}
                placeholder="비밀번호"
              />
            </div>
            <button onClick={goToMain} className={btnState}>
              로그인
            </button>
          </form>
          <span>
            <a href="https://www.google.co.kr">비밀번호를 잊으셨나요?</a>
          </span>
        </section>
      </div>
    );
  }
}

export default withRouter(LoginHong);
