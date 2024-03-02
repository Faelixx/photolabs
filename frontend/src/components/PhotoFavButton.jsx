import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { set } from 'immutable';

const PhotoFavButton = (props) => {
  return (
    <div onClick={() => props.clickLike} className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={props.likeStatus}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;