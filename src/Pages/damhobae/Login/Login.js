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

  Validation = () => {
    this.state.loginId.includes("@") && this.state.loginPw.length >= 5
      ? this.setState({ activateBtn: true })
      : this.setState({ activateBtn: false });
  };

  MainVailid = () => {
    const { loginId, loginPw } = this.state;
    if (loginId.includes("@") && loginPw.length >= 5) {
      alert("로그인 성공 하셨습니다.");
      this.props.history.push("/main-bae");
    } else {
      alert("다시 입력해주세요");
    }
  };

  render() {
    const activateBtn =
      (this.state.loginId.includes("@") && this.state.loginPw.length) >= 5;

    return (
      <div className="LoginBae">
        <div className="inner">
          <h1>Westagram</h1>
          <div className="login-form" action="#">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="loginId"
              value={this.state.loginId}
              onKeyUp={this.Validation}
              onChange={this.handleLoginInfo}
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="loginPw"
              value={this.state.loginPw}
              onKeyUp={this.Validation}
              onChange={this.handleLoginInfo}
            />
            <button
              className="loginBtn"
              onKeyUp={this.MainVailid}
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
