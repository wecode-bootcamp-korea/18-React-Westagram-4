import React, { Component } from "react";
import img from "../../../../images/damhobae/mummu.png";
import myprofile_img from "../../../../images/damhobae/myprofile.png";
class Aside extends Component {
  render() {
    return (
      <div className="mainRight">
        <div className="rightStoryBox">
          <img src={myprofile_img} alt="img1" className="rightStoryImg" />
          <div className="rightName">
            <a href="https://www.instagram.com/d.mo.b/" alt="name">
              d.mo.b
            </a>
          </div>
          <span>담호</span>
          <button className="rightBtn" type="submit">
            전환
          </button>
        </div>
        <div className="suggestBox">
          <span>회원님을 위한 추천</span>
          <a href="#" className="allSearch">
            모두보기
          </a>
          <div className="goSuggestBox">
            <div className="imgListBox">
              <img src={img} className="imgList"></img>
            </div>
            <a href={img}>mumum_a</a>
            <div className="fallowBox">
              <a href="" className="fallow">
                팔로우
              </a>
            </div>
          </div>
          <div className="twoimgLine">
            <div className="goSuggestBox">
              <div className="imgListBox">
                <img src={img} className="imgList"></img>
              </div>
              <a href={img}>damho_bae</a>
              <div className="fallowBox">
                <a href="" className="fallow">
                  팔로우
                </a>
              </div>
            </div>
          </div>
          <div className="thirdrLine">
            <div className="goSuggestBox">
              <div className="imgListBox">
                <img src={img} className="imgList"></img>
              </div>
              <a href={img}>love_ez</a>
              <div className="fallowBox">
                <a href="" className="fallow">
                  팔로우
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;
