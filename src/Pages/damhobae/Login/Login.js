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
    //계산된 속성명 id / pw 이벤트 동시에
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  Validation = () => {
    this.state.loginId.includes("@") && this.state.loginPw.length >= 5
      ? this.setState({ activateBtn: true }) //setStae로 반환하여 버튼이 true인경우
      : this.setState({ activateBtn: false }); // 조건이 맞지않다면
    //삼항연산자로 트루 폴스를 알 수 있다.
  };

  MainVailid = () => {
    const { loginId, loginPw } = this.state;
    if (loginId.includes("@") && loginPw.length >= 5) {
      alert("로그인 성공 하셨습니다.");
      //id가 @가 포함하면서 Pw가 5글자 이상일 경우 로그인 성공 창 뜨게함
      this.props.history.push("/main-bae");
      //props로 history로 푸쉬 해주면 메인페이지 갈 수 있게 할 수 있음
    } else {
      alert("다시 입력해주세요"); //그렇지 않으면 "다시 입력" 창
    }
  };
  render() {
    //버튼활성화 조건 변수화
    const activateBtn =
      (this.state.loginId.includes("@") && this.state.loginPw.length) >= 5;
    // console.log(activateBtn);
    return (
      <div className="LoginBae">
        <div className="inner">
          <h1>Westagram</h1>
          <div className="login-form" action="#">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="loginId"
              value={this.state.loginId} //계산된 속성명을 사용하기에 value를 사용
              onKeyUp={this.Validation} //이벤트로 조건문을 쓰기 위한 함수호출
              onChange={this.handleLoginInfo} // 이벤트를 사용하기 위한 함수호출
              //info로 계산된 속성명을 사용하기위한 호출?
            />
            <input
              type="password"
              placeholder="비밀번호"
              name="loginPw"
              value={this.state.loginPw} //위와 같음
              onKeyUp={this.Validation} //이벤트로 조건문을 쓰기 위한 함수호출
              onChange={this.handleLoginInfo} //info로 계산된 속석명을 사용하기위한 호출?
            />
            <button
              className="loginBtn"
              onKeyUp={this.MainVailid} //keyUp이벤트로 인한 함수 호출
              //id & pw가 조건에 해당하면 버튼이 실행 될 이벤트 중 keyUp이벤트 호출
              onClick={this.MainVailid}
              //id & pw가 조건에 해당하면 버튼이 실행 될 이벤트 중 onClick 호출
              className={activateBtn ? "loginBtn active" : "loginBtn"}
              //className .active로 버튼이 activateBtn 함수가 참 일때 색 진한파랑
              // 거짓일 때 연한 파랑
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
