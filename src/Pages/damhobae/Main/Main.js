import React from "react";
import "./Main.scss";
import img from "../../../images/damhobae/mummu.png";
import img2 from "../../../images/damhobae/benz.png";
import bmw from "../../../images/damhobae/bmw2.png";
import insta from "../../../images/damhobae/insta.png";
import insta2 from "../../../images/damhobae/instat2.png";
import insta3 from "../../../images/damhobae/instat3.png";
import mummu from "../../../images/damhobae/mumm.png";
import mmmm from "../../../images/damhobae/mmmm.png";
import wecode_img from "../../../images/damhobae/wecode.png";

import myprofile_img from "../../../images/damhobae/myprofile.png";
import porsch_img from "../../../images/damhobae/porsche.png";
class MainBae extends React.Component {
  render() {
    return (
      <div className="MainBae">
        <nav className="nav-bar">
          <div className="navBox">
            <a>Westagram</a>
            <div className="searchBox">
              <input type="texit" placeholder="검색" />
              <i className="fas fa-search"></i>
            </div>
            <div className="nav-icon">
              <i class="far fa-compass"></i>
              <i className="far fa-paper-plane"></i>
              <i class="far fa-heart"></i>
            </div>
          </div>
        </nav>

        <div className="mainFeeds">
          <div className="feedBox">
            <div className="storys">
              <ul className="storyImg">
                <div className="storyborder">
                  <li className="storyList">
                    <img src={img} alt="img1" />
                    <span>mmum_love</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={img2} alt="img1" />
                    <span>benzsales</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={porsch_img} alt="img1" />
                    <span>porsch.sscl</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={bmw} alt="img1" />
                    <span>bmw_korea</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={insta} alt="img1" />
                    <span>jjsa_sss</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={insta2} alt="img1" />
                    <span>t__bbb</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={insta3} alt="img1" />
                    <span>d___os</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={mummu} alt="img1" />
                    <span>kkkk__11</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={mmmm} alt="img1" />
                    <span>oc___ss</span>
                  </li>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={img} alt="img1" />
                    <span>abKs_ss</span>
                  </li>
                </div>
              </ul>
              <div className="button-box">
                <a className="button-prev"></a>
                <a className="button-next"></a>
              </div>
            </div>

            <div className="feedMain">
              <div className="headerBox">
                <div className="headerImg">
                  <a href="https://www.instagram.com/wecode_bootcamp/">
                    <img src={wecode_img} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/wecode_bootcamp/"
                    className="wecode-boot"
                  >
                    wecode_bootcamp
                  </a>
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </div>
              <div className="feedPhoto">
                <div className="feedphotoBox">
                  <img src={img} alt="" />
                </div>
              </div>
              <section className="section-footer">
                <div className="reaction">
                  <div className="likeLine">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <i className="far fa-bookmark"></i>
                </div>
              </section>
              <div className="footer-commnet">
                <div className="like-comment">
                  <a href="https://www.instagram.com/d.mo.b/">d.mo.b</a>
                  <b>님</b>
                  <a href="#">여러 명</a>
                  <b>이 좋아합니다</b>
                </div>
                <div className="commentBox">
                  <a href="https://www.instagram.com/wecode_bootcamp/">
                    wecode_bootcamp
                  </a>
                  <b>👋Hello World😁</b>
                  <br />
                  <br />
                  <div>
                    <a href="">#위코드 #부트캠프 #코딩 #웹개발 #프론트엔드</a>
                    <br />
                  </div>
                  <div className="firstComment">
                    <div className="newComment">
                      <a href="https://www.instagram.com/d.mo.b/">d.mo.b</a>
                      <b>안녕하세요~</b>
                    </div>
                  </div>
                  <div className="timeBox">
                    <p>42분전</p>
                  </div>
                </div>
                <section>
                  <div className="writeBox">
                    <input
                      type="text"
                      className="write-comment"
                      placeholder="댓글 달기..."
                    />
                    <button className="uploadBtn" type="button">
                      <b>게시</b>
                    </button>
                  </div>
                </section>
              </div>
              <section>
                <div className="mainRight">
                  <div className="rightStoryBox">
                    <img
                      src={myprofile_img}
                      alt="img1"
                      className="rightStoryImg"
                    />
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
                  {/* <div className="suggestBox"> */}
                  <div className="suggestBox">
                    <span>회원님을 위한 추천</span>
                    <a href="" className="allSearch">
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
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainBae;
