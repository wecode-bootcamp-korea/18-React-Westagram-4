import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Main.scss';

class MainSong extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <>
        <nav>
          <div id="logo"><Link to="#">Westagram</Link></div>
          <input className="search_bar" type="search" placeholder="검색" />
          <div className="icon_btn">
            <Link to="#"><img src="/images/direct.png" alt="다이렉트" /></Link>
            <Link to="#"><img src="/images/like.png" alt="활동" /></Link>
            <Link to="#"><img src="/images/user.png" alt="내 프로필" /></Link>
          </div>
        </nav>

        <main>
          <div className="westa_story">
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode1</Link>
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode2</Link>
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode3</Link>
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode4</Link>
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode5</Link>
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode6</Link>
            <Link to="#"><img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="" />wecode7</Link>
          </div>

          <div className="main-right">
            <div className="my_profile">
              <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="내 프로필 이미지" />
              <h3>ilovecoding</h3>
              <span>전환</span>
            </div>
            
            <div className="recommend">
              <h3>회원님을 위한 추천</h3>
              <span>모두 보기</span>
            </div>

            <div className="recommend_id">
              <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="추천 아이디 프로필" />
              <h3>recom1</h3>
              <span>팔로우</span>
              <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="추천 아이디 프로필" />
              <h3>recom2</h3>
              <span>팔로우</span>
              <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="추천 아이디 프로필" />
              <h3>recom3</h3>
              <span>팔로우</span>
              <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="추천 아이디 프로필" />
              <h3>recom4</h3>
              <span>팔로우</span>
              <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="추천 아이디 프로필" />
              <h3>recom5</h3>
              <span>팔로우</span>
            </div>
          </div>

          <div className="feeds">
            <article>
              <div className="profile_info">
                <img src="https://new-year.spartacodingclub.kr/images/yearS1.png" alt="프로필 이미지" />
                <h3>wecode_bootcamp</h3> 
              </div>

              <img className="feeds_img" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/150915321_179560660629368_165943275422580666_n.jpg?tp=1&_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=l46u1xkh-ScAX_ECMNm&oh=7c31830d51b0a8525949bd56ba541d4b&oe=60683C42" alt="" />
              
              <div className="reaction">
                <div className="reaction_icon">
                  <Link to="#"><img src="/images/like.png" alt="좋아요" /></Link>
                  <Link to="#"><img src="/images/comment.png" alt="댓글" /></Link>
                  <Link to="#"><img src="/images/direct.png" alt="다이렉트" /></Link>
                  <Link to="#"><img className="icon_bookmark" src="/images/bookmark.png" alt="저장" /></Link>
                </div>

                <h3>좋아요 329개</h3>
                <p className="user_id">wecode_bootcamp</p>
                <span className="user_comment">🙆🏻‍♀️함께해서 위코드다🙆🏻‍♂<Link class="view_more" to="#">... 더 보기</Link></span><br />
                <p className="user_id">weco1</p>
                <span classNames="user_comment">우왕</span><br />
                <p className="user_id">wecodooo_</p>
                <span className="user_comment">좋아요!!!</span>
                <p className="timelog">8시간 전</p>
              </div>

              <div className="comment">
                <img src="/images/smile.png" alt="스마일 그림" />
                <span>댓글 달기...</span>
              </div>
            </article>
          </div>
        </main>
      </>
    );
  }
}
export default withRouter(MainSong);