import React, { useReducer, useState, useCallback } from "react";

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = function(props) {

  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFavPhoto = (photoId) => {
    setFavPhotos((currentFav) => {
      if (currentFav.includes(photoId)) {
        return currentFav.filter(id => id !== photoId);
      } else {
        return [...currentFav, photoId];
      }
    });
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        toggleFavPhoto={toggleFavPhoto}
        isFavPhotoExist={favPhotos}/>
      <PhotoList
        photos={props.photos}
        toggleFavPhoto={toggleFavPhoto}
        favPhotos={favPhotos}
        modal={props.modal}
        toggleModal={props.toggleModal}/>
    </div>
  );
};

export default HomeRoute;