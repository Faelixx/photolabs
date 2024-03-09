import React, { useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { set } from 'immutable';

const PhotoFavButton = ({ photoId, toggleFavPhoto, favPhotos}) => {
  const [likeStatus, setLikeStatus] = useState(favPhotos);

  const clickLike = function() {
    setLikeStatus(prevLikeStatus => !prevLikeStatus);
    toggleFavPhoto(photoId);
  };

  useEffect(() => {
    setLikeStatus(favPhotos);
  }, [favPhotos]);

  return (
    <div onClick={() => clickLike()} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likeStatus}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;