import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {

  const photoMap = props.photos.map((el) => {
    return (
      <li key={el.id}>
        <PhotoListItem
          location={el.location}
          username={el.user.name}
          postImage={el.urls.regular}
          fullImage={el.urls.full}
          profileImage={el.user.profile}
          photoId={el.id}
          toggleFavPhoto={props.toggleFavPhoto}
          favPhotos={props.favPhotos}
          toggleModal={props.toggleModal}

        />
      </li>

    );
  });
  return (
    <ul className="photo-list">
      {photoMap}
    </ul>
  );
};

export default PhotoList;
