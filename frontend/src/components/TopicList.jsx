import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((el) => (
        <TopicListItem
          key={el.id}
          title={el.title}/>
      ))}
    </div>
  );
};

export default TopicList;
