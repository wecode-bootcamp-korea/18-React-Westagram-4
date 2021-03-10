import React from "react";
import "./Login.scss";

class LoginBae extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: "",
      loginPw: "",
    };
  }

  handleLoginInfo = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  Validation = (e) => {
    if (e.charCode === 13) {
      this.MainVailid();
    }

    this.state.loginId.includes("@") && this.state.loginPw.length >= 5
      ? this.setState({ activateBtn: true })
      : this.setState({ activateBtn: false });
  };

  MainVailid = async () => {
    const loginCheck = await fetch("http://10.58.6.0:0000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.loginId,
        password: this.state.loginPw,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("여기가 1");
        return response;
      });
    if (loginCheck.SUCCESS === "signup") {
      this.props.history.push("/main-bae");
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };

  render() {
    const { loginId, loginPw, activateBtn } = this.state;
    return (
      <div className="LoginBae">
        <div className="inner">
          <h1>Westagram</h1>
          <div className="login-form" action="#">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="loginId"
              value={loginId}
              onKeyPress={this.Validation}
              onChange={this.handleLoginInfo}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="loginPw"
              value={loginPw}
              onKeyPress={this.Validation}
              onChange={this.handleLoginInfo}
            />
            <button
              className="loginBtn"
              // onKeyUp={this.MainVailid}
              onClick={this.MainVailid}
              className={activateBtn ? "loginBtn active" : "loginBtn"}
              type="submit"
            >
              로그인
            </button>
            <a href="m" className="pwSearch">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginBae;
