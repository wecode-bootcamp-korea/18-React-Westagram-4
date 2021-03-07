import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./Main.scss";
import "@fortawesome/fontawesome-free/js/all.js";
import Comment from "./comment";
import CommentForm from "./commentForm";

class MainKim extends Component {
  state = {
    comments: [
      { id: 1, nickName: "Minho", content: "Wow" },
      { id: 2, nickName: "Sumin", content: "뭐야 ??" },
      { id: 3, nickName: "Jinseo", content: "오" },
    ],
  };
  // 댓글 삭제 or 좋아요
  handleDelete = (comment) => {
    const comments = this.state.comments.filter(
      (item) => item.id !== comment.id
    ); // 삭제버튼 클릭한 댓글의 id와 같지 않은 id들을 필터링해서
    this.setState({ comments }); // 새로운 배열을 만듬 (삭제버튼 누른 id값을 가진 댓글만 삭제)
  };
  handleHeart = (comment) => {
    //   // 하트 클릭시 하트 모양 변경
  };

  // 댓글 추가
  handleAdd = (content) => {
    const comments = [
      ...this.state.comments,
      { id: Date.now(), nickName: "Hyunjoong", content },
      // id 설정 한 이유는 삭제할 handleDelete함수에서 comment의 삭제 버튼을 눌렀을 때
      // 그 댓글의 id가 다른것들을 모아서 다시 배열로 만들려고
    ];
    this.setState({ comments });
    //this.setState({ comments: comments }); 로 첫번 째 comments는 key로 state값이고 두번 째 comments는 위에 선언한 comments
  };

  render() {
    return (
      <div class="main-page">
        <nav class="nav">
          <div class="navLeft">
            <a href="main.html"> Instagram </a>
          </div>
          <div class="navCenter">
            <input type="text" placeholder="검색" />
            <i class="fas fa-search"></i>
          </div>
          <div class="navRight">
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-home"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-paper-plane "></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-compass"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-heart "></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/19120841_176332809566752_3268745209206276096_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=RbJaaEJjcgwAX-5SRSs&amp;tp=1&amp;oh=0b77b03bc1d68bacbefa3f582cad2901&amp;oe=605EA7BD" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main class="main">
          <div class="mainWrapper">
            <section class="feeds">
              <div class="storyBox">
                <div class="story">
                  <div class="storyPicture">
                    <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/19120841_176332809566752_3268745209206276096_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=RbJaaEJjcgwAX-5SRSs&amp;tp=1&amp;oh=0b77b03bc1d68bacbefa3f582cad2901&amp;oe=605EA7BD" />
                  </div>
                  <div class="story-nikname">Hyunjoong</div>
                </div>

                <div class="story">
                  <div class="storyPicture">
                    <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/131239636_863191087766011_5065572424909332970_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=DcIgeapDfV0AX_6zfWJ&amp;tp=1&amp;oh=cb1c05e76ada1ec27bc6ce8470894f61&amp;oe=605E66C5" />
                  </div>
                  <div class="story-nikname">ham_s1</div>
                </div>

                <div class="story">
                  <div class="storyPicture">
                    <img src="https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&amp;_nc_ohc=8AUoZNYMP5IAX81KVqq&amp;oh=5cb6c6a9bbf7568658d8c157b1607313&amp;oe=605FE68F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                  </div>
                  <div class="story-nikname">khb_2211</div>
                </div>
              </div>
              <article class="feed">
                <div class="feedHeader">
                  <div class="feedHeader__profile">
                    <div class="feedHeader__profile__img">
                      <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/19120841_176332809566752_3268745209206276096_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=RbJaaEJjcgwAX-5SRSs&amp;tp=1&amp;oh=0b77b03bc1d68bacbefa3f582cad2901&amp;oe=605EA7BD" />
                    </div>
                    <div class="feedHeader__profile__info">
                      <span class="nickname">Hyunjoong</span>
                      <span class="location">AhnYang</span>
                    </div>
                  </div>
                  <div class="feedHeader__more">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
                <div class="feedMain">
                  <img src="https://postfiles.pstatic.net/MjAyMTAyMjVfNjcg/MDAxNjE0MjM0ODgxOTc0.J3LMzXo7GYoTloasBmurs4E7ZDllJGmVr1HZoGc2Nnog.TNxCcKhzD3OQDpMFuPsjSkyMY59vaUsrEJLL6y44wM4g.PNG.maplesosser/flower.png?type=w966" />
                </div>
                <div class="feedFooter">
                  <div class="actions">
                    <div class="actionsLeft">
                      <button type="button" id="likeBtn" value="false">
                        <a href="#">
                          <i class="far fa-heart"></i>
                        </a>
                      </button>
                      <a href="#">
                        <i class="far fa-comment"></i>
                      </a>
                      <a href="#">
                        <i class="far fa-compass"></i>
                      </a>
                    </div>
                    <div class="actions__center">
                      <div class="dots one-dot"></div>
                      <div class="dots two-dot"></div>
                      <div class="dots three-dot"></div>
                    </div>
                    <div class="actionsRight">
                      <i class="far fa-bookmark"></i>
                    </div>
                  </div>

                  <div class="likeCount">
                    <span>좋아요</span>
                    <span id="likeCountNumber">30</span>
                    <span>개</span>
                  </div>
                  <div class="sentence">
                    <span>Hyunjoong</span>
                    <span>
                      이 꽃의 꽃말은
                      '영원한사랑','사랑의맹세','행복한사랑'.'순결함'을
                      의미합니다. 사랑하는 사람이 있다면 꽃을 전해 보...
                    </span>
                    <span class="moreSentence">
                      시지 말고 돈을 아껴 보세요.
                    </span>
                    <button type="button" id="moreBtn">
                      더보기
                    </button>
                  </div>
                  <li>
                    {this.state.comments.map((arrayItem) => (
                      <Comment
                        // Callback 함수들 props로 전달
                        propcomment={arrayItem}
                        handleDelete={this.handleDelete}
                        handleHeart={this.handleHeart}
                        // handleDelete함수가 발생되면 내가 전달한 handleDelete 함수를 콜백함수로 전달
                      />
                      // Comment 컴포넌트에  propcomment라는 오브젝트 전달
                    ))}
                  </li>
                  <div class="uploadDate">5일 전</div>
                  <footer class="footer">
                    <CommentForm onAdd={this.handleAdd} />
                  </footer>
                </div>
              </article>
            </section>
            <div class="main-right">
              <div class="main-right__profile">
                <a href="#">
                  <div class="main-right__profile__img">
                    <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/19120841_176332809566752_3268745209206276096_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=RbJaaEJjcgwAX-5SRSs&amp;tp=1&amp;oh=0b77b03bc1d68bacbefa3f582cad2901&amp;oe=605EA7BD" />
                  </div>
                </a>
                <div class="main-right__profile__info">
                  <span>Hyunjoong</span>
                  <span>김현중</span>
                </div>
                <div class="main-right__change">
                  <a href="#">
                    <span>전환</span>
                  </a>
                </div>
              </div>

              <div class="main-right__recommend">
                <div class="main-right__recommend__title">
                  <span>회원님을 위한 추천</span>
                  <a href="">
                    <span>모두 보기</span>
                  </a>
                </div>
                <div class="main-right__recommend__lists">
                  <div class="recommend__list">
                    <div class="recommend__list__profile">
                      <a href="#">
                        <div class="recommend__list__profile__picture">
                          <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/125524511_1882643765225437_4746539912758093822_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=prQRgeQGApcAX-xH5V1&amp;tp=1&amp;oh=f9d1a776a27f4c6114f0e1e65bec4086&amp;oe=605FD3C2" />
                        </div>
                      </a>
                      <div class="recommend__list__profile__info">
                        <div class="recommend__list__profile__nickname">
                          js_love12
                        </div>
                        <div class="recommend__list__profile__reason">
                          회원님을 위한 추천
                        </div>
                      </div>
                    </div>

                    <a href="#">
                      <div class="recommend__list__follow">팔로우</div>
                    </a>
                  </div>

                  <div class="recommend__list">
                    <div class="recommend__list__profile">
                      <a href="#">
                        <div class="recommend__list__profile__picture">
                          <img src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/148336052_805285430050949_8251254215741628148_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=XCHSfu8VHSsAX8fRiW4&amp;tp=1&amp;oh=595fb8de17aca1dfa775cbd81b633c23&amp;oe=605DF024" />
                        </div>
                      </a>
                      <div class="recommend__list__profile__info">
                        <div class="recommend__list__profile__nickname">
                          whwh_1523
                        </div>
                        <div class="recommend__list__profile__reason">
                          회원님을 위한 추천
                        </div>
                      </div>
                    </div>
                    <a href="#">
                      <div class="recommend__list__follow">팔로우</div>
                    </a>
                  </div>

                  <div class="recommend__list">
                    <div class="recommend__list__profile">
                      <a href="#">
                        <div class="recommend__list__profile__picture">
                          <img src="https://scontent.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent.cdninstagram.com&amp;_nc_ohc=8AUoZNYMP5IAX81KVqq&amp;oh=5cb6c6a9bbf7568658d8c157b1607313&amp;oe=605FE68F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2" />
                        </div>
                      </a>
                      <div class="recommend__list__profile__info">
                        <div class="recommend__list__profile__nickname">
                          vue_love1
                        </div>
                        <div class="recommend__list__profile__reason">
                          회원님을 위한 추천
                        </div>
                      </div>
                    </div>

                    <a href="#">
                      <div class="recommend__list__follow">팔로우</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MainKim;
