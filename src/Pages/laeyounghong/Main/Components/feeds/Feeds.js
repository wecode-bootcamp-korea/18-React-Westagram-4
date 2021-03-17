import React, { Component } from "react";
import Feed from "../feed/Feed";

class Feeds extends Component {
  state = {
    feed: [],
  };

  componentDidMount() {
    fetch("/data/feedsDataHong.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          feed: data,
        })
      );
  }

  render() {
    return (
      <div className="feeds">
        {this.state.feed.map((feed) => (
          <Feed
            key={feed.id}
            userName={feed.userName}
            userUrl={feed.userUrl}
            profileImage={feed.profileImage}
            feedImg={feed.feedImg}
            likes={feed.likes}
            userComment={feed.userComment}
            timestamp={feed.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default Feeds;
