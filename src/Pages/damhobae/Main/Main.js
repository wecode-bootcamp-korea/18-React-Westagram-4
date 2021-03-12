import React from "react";
import uuid from "react-uuid";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
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
import porsch_img from "../../../images/damhobae/porsche.png";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

class MainBae extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  state = {
    comment: "",
    comments: [],
  };

  onSubmit = (e) => {
    e.preventDefault();
    const commentObj = {
      id: uuid(),
      name: "d.mo.b ",
      text: this.state.comment,
    };

    this.setState({
      comments: this.state.comments.concat(commentObj),
    });

    this.inputRef.current.focus();
    this.inputRef.current.value = "";
  };
  inputComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  handleDelete = (e, id) => {
    this.setState({
      comments: this.state.comments.filter((comment) => comment.id !== id),
    });
  };
  handleColor = () => {
    this.setState({});
  };
  render() {
    return (
      <div className="MainBae">
        <Navbar />
        <div className="mainFeeds">
          <div className="feedBox">
            <div className="storys">
              <ul className="storyImg">
                <div className="storyborder">
                  <li className="storyList">
                    <img src={img} alt="dog" />
                  </li>
                  <span>mmum</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={img2} alt="benz" />
                  </li>
                  <span>benz</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={porsch_img} alt="porsch" />
                  </li>
                  <span>porsch</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={bmw} alt="bmw" />
                  </li>
                  <span>bmw_korea</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={insta} alt="instaImg" />
                  </li>
                  <span>jjsa_sss</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={insta2} alt="instaImg2" />
                  </li>
                  <span>t__bbb</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={insta3} alt="instaImg3" />
                  </li>
                  <span>d___os</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={mummu} alt="dog2" />
                  </li>
                  <span>kkkk__11</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={mmmm} alt="dog3" />
                  </li>
                  <span>oc___ss</span>
                </div>
                <div className="storyborder">
                  <li className="storyList">
                    <img src={img} alt="dog" />
                  </li>
                  <span>abKs_ss</span>
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
                    <img src={wecode_img} alt="wecodeImg" />
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
                  <img src={img} alt="feedImg" />
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
                  <a
                    className="user_id"
                    href="https://www.instagram.com/wecode_bootcamp/"
                  >
                    wecode_bootcamp
                  </a>
                  <b>👋Hello World😁</b>
                  <br />
                  <br />
                  <div classNam="tagBox">
                    <a href="#">#위코드 #부트캠프 #코딩 #웹개발 #프론트엔드</a>
                    <br />
                    <br />
                  </div>
                  <div className="firstComment">
                    {this.state.comments.map((comment) => (
                      <div className="newComment">
                        <div>
                          <b>{comment.name}</b>
                          <b>{comment.text}</b>
                        </div>
                        <div>
                          <button className="hartBtn">
                            onClick=
                            {(e) => {
                              this.handleColor();
                            }}
                            <BsHeart />
                          </button>
                          <button
                            className="deletBtn"
                            onClick={(e) => {
                              this.handleDelete(e, comment.id); //이벤트값, 고유한 아이디값
                            }}
                          >
                            <RiDeleteBin2Line className="icon-ri" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="timeBox">
                    <p>42분전</p>
                  </div>
                </div>
                <section>
                  <form className="writeBox" onSubmit={this.onSubmit}>
                    <input
                      type="text"
                      className="write-comment"
                      placeholder="댓글 달기..."
                      ref={this.inputRef}
                      onChange={this.inputComment}
                    />
                    <button className="uploadBtn" type="submit">
                      <b>게시</b>
                    </button>
                  </form>
                </section>
              </div>
              <Aside />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainBae;
