import React, { Component } from "react";
import "./Main.scss";
import Nav from "./Components/nav/Nav";
import Feeds from "./Components/feeds/Feeds";

class MainHong extends Component {
  render() {
    return (
      <div className="mainHong">
        <Nav />
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
            </div>
            <Feeds />
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
