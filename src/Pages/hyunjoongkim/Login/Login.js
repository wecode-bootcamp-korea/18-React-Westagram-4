import React, { Component } from "react";
import "./Login.scss";
import "./reset.scss";
class LoginKim extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      isActive: false,
    };
  }

  checkValid = () => {
    this.state.id.includes("@") && this.state.pw.length >= 5
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  handleInputValue = (e) => {
    this.setState({ id: e.target.value });
  };

  handlePwdValue = (e) => {
    this.setState({ pw: e.target.value });
    // console.log(e.target.value);

    console.log(this.state.pw);
  };

  goToMain = (e) => {
    // const { id, pw } = this.state;
    // console.log("전달 받은 id : ", id);
    //  console.log("전달 받은 pw : ", pw);

    if (this.state.isActive) {
      this.props.history.push("/main-kim");
    }
  };

  render() {
    const { id, pw, isActive } = this.state;
    return (
      <div class="container">
        <main class="main">
          <section class="loginImage">
            <img
              src="https://postfiles.pstatic.net/MjAyMTAzMDVfOTAg/MDAxNjE0OTUwODA2MjM4.cLp5AMNssARX694Ry6SJKhwynORgWGMJ6PPnDjKcHR0g.rko8Hh_pls8k964LFDFQNdBZIeU2EqSWWmGPUGVWIGQg.PNG.maplesosser/insta-left.png?type=w966"
              alt="insta-image"
            />
          </section>
          <section class="loginBox">
            <div class="loginMain">
              <div class="loginTitle">Instagram</div>
              <form class="loginInput" action="">
                <input
                  id="loginEmail"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onKeyUp={this.checkValid}
                  onChange={this.handleInputValue}
                />
                <input
                  id="loginPassword"
                  type="password"
                  placeholder="비밀번호"
                  onKeyUp={this.checkValid}
                  onChange={this.handlePwdValue}
                />

                <button
                  className={isActive ? "activebtn" : "unactivebtn"}
                  type="button"
                  id="loginBtn"
                  onClick={this.goToMain}
                >
                  로그인
                </button>
              </form>
              <div class="divider"></div>
              <div class="facebook">
                <i class="fab fa-facebook-square"></i>
                <a href="#">
                  <span class="facebookLogin">Facebook으로 로그인</span>
                </a>
              </div>
              <div class="forgetPassword">
                <span>비빌번호를 잊으셨나요 ?</span>
              </div>
            </div>
            <div class="loginSignup">
              <span>계정이 없으신가요 ?</span>
              <a href="#">
                <span class="signUp">가입하기</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default LoginKim;
