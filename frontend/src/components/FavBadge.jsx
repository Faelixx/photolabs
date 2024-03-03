import React, { useState } from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist.length > 0} selected={isFavPhotoExist.length > 0}/>
    </div>
  );
};

export default FavBadge;