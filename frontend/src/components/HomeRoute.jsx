import React, { useReducerm, useState, useCallback } from "react";

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = function(props) {


  const [likeStatus, setLikeStatus] = useState([]);

  // const clickLike = useCallback(() => {
  //   setLikeStatus(prevLikeStatus => !prevLikeStatus);
  // }, []);
  const clickLike = function() {
    setLikeStatus(prevLikeStatus => !prevLikeStatus);
  };


  // const [likeStatus, dispatch] = useReducer((likeStatus, initState) => {
  //   if (likeStatus === false) {
  //     likeStatus = initState;
  //   } else {
  //     initState = false;
  //   }
  // });
  
  // const clickLike = function() {
  //   setLikeStatus(likeStatus => !likeStatus);
  // };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} likeStatus={likeStatus}/>
      <PhotoList photos={props.photos} likeStatus={likeStatus} clickLike={clickLike}/>
    </div>
  );
};

export default HomeRoute;