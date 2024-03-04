import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span><TopicList
        topics={props.topics}
        setTopicClicked={props.setTopicClicked}
      /></span>
      <span><FavBadge isFavPhotoExist={props.favPhotos}/></span>
    </div>
  );
};

export default TopNavigation;