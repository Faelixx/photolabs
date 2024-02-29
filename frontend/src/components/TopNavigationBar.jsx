import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span><TopicList /></span>
      <span>❤️</span>
    </div>
  );
};

export default TopNavigation;