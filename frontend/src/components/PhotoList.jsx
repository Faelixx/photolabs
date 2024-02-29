import React from "react";

import "../styles/PhotoList.scss";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((el) => (
        <li key={el.id}>
          <PhotoListItem
            location={el.location}
            username={el.user.name}
            postImage={el.urls.regular}
            profileImage={el.user.profile}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
