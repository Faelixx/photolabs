import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item" >
      <PhotoFavButton
        toggleFavPhoto={props.toggleFavPhoto}
        photoId={props.photoId}
        favPhotos={props.favPhotos}/>
      <img className="photo-list__image" src={props.postImage} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <div className="photo-list__user-location">
            <p>{props.location.city}, {props.location.country}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PhotoListItem;
