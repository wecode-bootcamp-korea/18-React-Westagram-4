import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginSong extends Component{
  constructor(){
    super();
    this.state = {  //바뀌는 상태 값
      id_field: "", //기본 값 설정
      pw_field: ""
    };
  }

  handleIdInput = (event) => { 
    this.setState({ //State 값 변경 가능
      id_field: `${event.target.value}`,
    });
  };

  handlePwInput = (event) => { 
    this.setState({
      pw_field: `${event.target.value}`,
    });
  };

  // handelButtonColor = () => {
  //   if(this.state.id_field === true){ // @ 포함
  //     if(this.state.pw_field === true){ // 5글자 이상 >> 삼항연산자
        
  //     } 
  //   }
  // }

  goToMain = () => {
    this.props.history.push('/main-song');
  }
  
  render(){
    return(
      <div className="LoginSong">
        <div className="login_form">
          <h1 className="logo">westagram</h1>

          <form>
            <input
              type="text"
              name="email"
              className="id_field"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput} 
            />
            <input 
              type="password"
              name="password"
              className="pw_field"
              placeholder="비밀번호"
              onChange={this.handlePwInput} 
            />
            <button 
              className="login_btn" 
              onClick={this.goToMain}> 로그인 
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
