import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {

  const setTopicClicked = () => {
    props.setTopicClicked(true, props.topicId);
  };

  return (
    <div className="topic-list__item">
      <span onClick={setTopicClicked}>
        {props.title}
      </span>
    </div>
  );
};

export default TopicListItem;
