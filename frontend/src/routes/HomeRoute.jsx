import React, { useReducer, useState, useCallback } from "react";

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = function(props) {

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        toggleFavPhoto={props.toggleFavPhoto}
        favPhotos={props.favPhotos}/>
      <PhotoList
        photos={props.photos}
        toggleFavPhoto={props.toggleFavPhoto}
        favPhotos={props.favPhotos}
        modal={props.modal}
        toggleModal={props.toggleModal}
        modalDetails={props.modalDetails}/>
    </div>
  );
};

export default HomeRoute;