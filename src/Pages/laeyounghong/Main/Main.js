import React, { Component } from "react";
import "./Main.scss";
import "../Styles/reset.scss";
import "../Styles/common.scss";

class MainHong extends Component {
  render() {
    return (
      <div className="MainHong">
        <nav>
          <div className="topMenu">
            <h1 className="logo">Westagram</h1>
            <form className="inputBox">
              <input type="text" placeholder="검색" />
              <img
                className="searchIcon"
                src="https://www.flaticon.com/svg/vstatic/svg/56/56936.svg?token=exp=1614250050~hmac=b9f67919e54a34ae233125b257ac4d44"
                width="10"
                alt="검색 아이콘"
              />
            </form>
            <ul>
              <li>
                <a>
                  <svg
                    aria-label="홈"
                    fill="#262626"
                    height="22"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    aria-label="Direct"
                    fill="#262626"
                    height="22"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    aria-label="사람 찾기"
                    fill="#262626"
                    height="22"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <svg
                    aria-label="활동 피드"
                    fill="#262626"
                    height="22"
                    viewBox="0 0 48 48"
                    width="22"
                  >
                    <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a>
                  <img
                    src="https://scontent-otp1-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-otp1-1.cdninstagram.com&amp;_nc_ohc=8AUoZNYMP5IAX99CKTU&amp;oh=ceffe7187a583088e08c9c66767f7043&amp;oe=605FE68F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                    alt="프로필 사진"
                    width="22"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <section className="mainWrapper">
            <div className="mainFeeds">
              <div className="topFeedBox">
                <ul>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol님의 프로필 사진"
                    />
                    <div>mido__sol</div>
                  </li>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol1님의 프로필 사진"
                    />
                    <div>mido__sol1</div>
                  </li>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol2님의 프로필 사진"
                    />
                    <div>mido__sol2</div>
                  </li>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol3님의 프로필 사진"
                    />
                    <div>mido__sol3</div>
                  </li>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol4님의 프로필 사진"
                    />
                    <div>mido__sol4</div>
                  </li>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol5님의 프로필 사진"
                    />
                    <div>mido__sol5</div>
                  </li>
                  <li>
                    <img
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/147380031_1099578333788978_1790265342885119677_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=1woq2mwilusAX80CFgd&amp;tp=1&amp;oh=c3d543ac2e3ae6b623099b7200225517&amp;oe=60639F34"
                      alt="mido__sol6님의 프로필 사진"
                    />
                    <div>mido__sol6</div>
                  </li>
                </ul>
              </div>
              <article>
                <header className="articleHeader">
                  <a href="https://www.instagram.com/honglaeyoung/">
                    <img
                      className="profileImage"
                      src="https://lang92.github.io/1st-week/profile.jpg"
                      width="32"
                      height="32"
                      alt="프로필 이미지"
                    />
                  </a>
                  <a
                    className="article Username"
                    href="https://www.instagram.com/honglaeyoung/"
                  >
                    honglaeyoung
                  </a>
                  <button className="articleOptionBtn">
                    <img
                      src="https://www.flaticon.com/svg/vstatic/svg/512/512142.svg?token=exp=1614494127~hmac=7f025f76e4b2f0759868b56fb31857ca"
                      width="15"
                      height="15"
                      alt="게시물 메뉴"
                    />
                  </button>
                </header>
                <div>
                  <img
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/152917307_254819736177733_3986020253276114312_n.jpg?tp=1&_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=N9glIvC_QKMAX9LNsJ2&oh=c15d2118232614b4e2653ecb9dfa362c&oe=6063F470"
                    width="614"
                    height="767"
                    alt="게시물 이미지"
                  />
                </div>
                <main>
                  <div className="articleIcons">
                    <ul>
                      <li>
                        <a>
                          <svg
                            aria-label="좋아요"
                            fill="#262626"
                            height="24"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a>
                          <svg
                            aria-label="댓글 달기"
                            fill="#262626"
                            height="24"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path
                              clip-rule="evenodd"
                              d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a>
                          <svg
                            aria-label="게시물 공유"
                            fill="#262626"
                            height="24"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a>
                          <svg
                            aria-label="저장"
                            fill="#262626"
                            height="24"
                            viewBox="0 0 48 48"
                            width="24"
                          >
                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="articleLikes">좋아요 180개</div>
                  <div className="articleComments">
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/mido__sol/">
                          mido__sol
                        </a>
                        &nbsp;<span>미도 막대사탕 요긴네</span>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/honglaeyoung/">
                          honglaeyoung
                        </a>
                        &nbsp;<span>야옹야옹</span>
                      </li>
                    </ul>
                  </div>
                  <div className="articleTime">n일 전</div>
                </main>
                <footer className="commentsInputContainer">
                  <button className="emoticons">
                    <svg
                      aria-label="이모티콘"
                      fill="#262626"
                      height="24"
                      viewBox="0 0 48 48"
                      width="24"
                    >
                      <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path>
                      <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path>
                    </svg>
                  </button>
                  <input
                    className="commentsInput"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="postingBtn" type="submit" disabled="">
                    게시
                  </button>
                </footer>
              </article>
            </div>
            <aside className="mainRightSide">
              <header className="asideAccount">
                <div className="asideProfile">
                  <a href="https://www.instagram.com/honglaeyoung/">
                    <img
                      className="aside profileImage"
                      alt="honglaeyoung님의 프로필 사진"
                      src="https://lang92.github.io/1st-week/profile.jpg"
                    />
                  </a>
                </div>
                <div>
                  <div>
                    <a
                      className="aside Username"
                      href="https://www.instagram.com/honglaeyoung/"
                    >
                      honglaeyoung
                    </a>
                  </div>
                  <div className="asideNickname">랭</div>
                </div>
                <div className="asideBtnBox">
                  <button className="asideBtn">전환</button>
                </div>
              </header>
              <main className="asideRecommendation">
                <div className="recommendComments">
                  <div>회원님을 위한 추천</div>
                  <div className="asideBtnBox">
                    <button className="asideBtn">모두 보기</button>
                  </div>
                </div>
                <div className="recommendContainer">
                  <div className="recommendInfo">
                    <div>
                      <a href="https://www.instagram.com/okjasminelee/">
                        <img
                          alt="okjasminelee님의 프로필 사진"
                          className="recommend profileImage"
                          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/84981112_134671624450161_2658226736340140032_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=NmzN2F0IUrcAX8ufxLe&amp;oh=230569a12b221f078f3d9b4a25c28ba9&amp;oe=6066113E"
                        />
                      </a>
                    </div>
                    <div>
                      <div>
                        <a
                          className="aside Username"
                          href="https://www.instagram.com/okjasminelee/"
                        >
                          okjasminelee
                        </a>
                      </div>
                      <div className="asideNickname">회원님을 팔로우합니다</div>
                    </div>
                    <div className="asideBtnBox">
                      <button className="asideBtn">팔로우</button>
                    </div>
                  </div>
                  <div className="recommendInfo">
                    <div>
                      <a href="https://www.instagram.com/superb_donghwi/">
                        <img
                          alt="superb_donghwi님의 프로필 사진"
                          className="recommend profileImage"
                          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/114586864_349337152736022_6325024741760605718_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=WChJa644yY8AX--d_1c&amp;oh=63744b85a3afa41c09c65166caf00865&amp;oe=6064868D"
                        />
                      </a>
                    </div>
                    <div>
                      <div>
                        <a
                          className="aside Username"
                          href="https://www.instagram.com/superb_donghwi/"
                        >
                          superb_donghwi
                        </a>
                      </div>
                      <div className="asideNickname">회원님을 팔로우합니다</div>
                    </div>
                    <div className="asideBtnBox">
                      <button className="asideBtn">팔로우</button>
                    </div>
                  </div>
                  <div className="recommendInfo">
                    <div>
                      <a href="https://www.instagram.com/sang_ddung/">
                        <img
                          alt="sang_ddung님의 프로필 사진"
                          className="recommend profileImage"
                          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/67410616_658103938022545_5788593364899201024_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=23PrDVZnIU4AX8mhhfN&amp;oh=65475365eaeb037cfde78647a17eb87d&amp;oe=6064E7BE"
                        />
                      </a>
                    </div>
                    <div>
                      <div>
                        <a
                          className="aside Username"
                          href="https://www.instagram.com/sang_ddung/"
                        >
                          sang_ddung
                        </a>
                      </div>
                      <div className="asideNickname">회원님을 팔로우합니다</div>
                    </div>
                    <div className="asideBtnBox">
                      <button className="asideBtn">팔로우</button>
                    </div>
                  </div>
                  <div className="recommendInfo">
                    <div>
                      <a href="https://www.instagram.com/heechan_gg/">
                        <img
                          alt="heechan_gg님의 프로필 사진"
                          className="recommend profileImage"
                          src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/101019650_250009473008710_5028890736309829632_n.jpg?tp=1&amp;_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=7RTRPdrd4CsAX_P4FVh&amp;oh=9da21629efd3d34fd3eaa79142b08519&amp;oe=6062A979"
                        />
                      </a>
                    </div>
                    <div>
                      <div>
                        <a
                          className="aside Username"
                          href="https://www.instagram.com/heechan_gg/"
                        >
                          heechan_gg
                        </a>
                      </div>
                      <div className="asideNickname">
                        jin.sub._sim님이 팔로우합니다
                      </div>
                    </div>
                    <div className="asideBtnBox">
                      <button className="asideBtn">팔로우</button>
                    </div>
                  </div>
                  <div className="recommendInfo">
                    <div>
                      <a href="https://www.instagram.com/tpovis/">
                        <img
                          alt="tpovis님의 프로필 사진"
                          className="recommend profileImage"
                          src="https://instagram.fkul4-4.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fkul4-4.fna.fbcdn.net&amp;_nc_ohc=gj0BNZ18uiEAX_v-i21&amp;oh=0893300291ebbf5f1f8cb58f3138105a&amp;oe=6063DB0F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                        />
                      </a>
                    </div>
                    <div>
                      <div>
                        <a
                          className="aside Username"
                          href="https://www.instagram.com/tpovis/"
                        >
                          tpovis
                        </a>
                      </div>
                      <div className="asideNickname">회원님을 팔로우합니다</div>
                    </div>
                    <div className="asideBtnBox">
                      <button className="asideBtn">팔로우</button>
                    </div>
                  </div>
                </div>
              </main>
              <footer className="asidePolicies">
                <ul>
                  <li className="moreInfo">
                    <a href="https://about.instagram.com/">소개</a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://help.instagram.com/">도움말</a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://about.instagram.com/blog/">홍보 센터</a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/developer/">API</a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/about/jobs/">
                      채용 정보
                    </a>
                  </li>
                  <li></li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/legal/privacy/">
                      개인정보처리방침
                    </a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/legal/terms/">약관</a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/explore/locations/">
                      위치
                    </a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/directory/profiles/">
                      인기 계정
                    </a>
                  </li>
                  <li className="moreInfo">
                    <a href="https://www.instagram.com/directory/hashtags/">
                      해시태그
                    </a>
                  </li>
                  <li className="moreInfo">
                    <span>언어</span>
                  </li>
                </ul>
                <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
              </footer>
            </aside>
          </section>
        </main>
      </div>
    );
  }
}

export default MainHong;
