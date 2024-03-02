import React, { useReducerm, useState, useCallback, useReducer } from "react";

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = function(props) {


  const [likeStatus, dispatch] = useReducer((likeStatus, initState) => {
    if (likeStatus === false) {
      dispatch(true);
    } else {
      dispatch(false);
    }
  });
  
  // const clickLike = function() {
  //   setLikeStatus(likeStatus => !likeStatus);
  // };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} clickLike={dispatch}/>
      <PhotoList photos={props.photos} clickLike={dispatch} likeStatus={likeStatus}/>
    </div>
  );
};

export default HomeRoute;