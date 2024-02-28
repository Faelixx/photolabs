import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { set } from 'immutable';

const PhotoFavButton = () => {

  const [likeStatus, setLikeStatus] = useState(false);

  const clickLike = function() {
    setLikeStatus(prevLikeStatus => !prevLikeStatus);
    console.log(likeStatus);
  };

  return (
    <div onClick={() => clickLike()} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likeStatus}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;