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
            profileImage={el.user.profile}
            clickLike={props.clickLike}
            likeStatus={props.likeStatus}/>
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
