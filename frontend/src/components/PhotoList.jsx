import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((el) => (
        <li key={el.id}>
          <PhotoListItem
            location={el.location}
            username={el.user.name}
            postImage={el.urls.regular}
            fullImage={el.urls.full}
            profileImage={el.user.profile}
            toggleFavPhoto={props.toggleFavPhoto}
            photoId={el.id}
            favPhotos={props.favPhotos}
            modal={props.modal}
            toggleModal={props.toggleModal}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
