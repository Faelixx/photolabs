import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { set } from 'immutable';

const PhotoFavButton = () => {

  const [likeStatus, setLikeStatus] = useState(false);

  const clickLike = function() {
    if (likeStatus === true) {
      setLikeStatus(false);
      console.log("like Status = ", likeStatus);
    } else {
      setLikeStatus(true);
    }
  };

  return (
    <div onClick={() => clickLike()} style={{color: `rgba(255, 0, 0,${likeStatus})`}} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon />
      </div>
    </div>
  );
};

export default PhotoFavButton;