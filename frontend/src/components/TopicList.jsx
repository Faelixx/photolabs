import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const topicList = props.topics.map((el) => (
    <TopicListItem
      setTopicClicked={props.setTopicClicked}
      key={el.id}
      topicId={el.id}
      title={el.title}/>
  ));
  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
