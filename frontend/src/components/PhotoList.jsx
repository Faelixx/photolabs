import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  console.log(props);
  return (
    <ul className="photo-list">
      {props.photos.map((el) => (
        <li key={el.id}>
          <PhotoListItem
            location={el.location}
            username={el.user.name}
            postImage={el.urls.regular}
            profileImage={el.user.profile}
            toggleFavPhoto={props.toggleFavPhoto}
            photoId={el.id}
            favPhotos={props.favPhotos}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
