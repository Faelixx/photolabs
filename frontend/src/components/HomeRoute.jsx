import React from "react";

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = function(props) {
  console.log(props);
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics}/>
      <PhotoList photos={props.photos}/>
    </div>
  );
};

export default HomeRoute;