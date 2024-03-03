import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({
  toggleModal,
  modalDetails,
  photos,
  favPhotos,
  toggleFavPhoto }) => {
  
  const {
    photoId,
    profileImage,
    username,
    fullImage,
    location
  } = modalDetails;
  
  const similarPhotos = photos[photoId].similar_photos;
  const similarPhotosArr = [];

  if (similarPhotosArr.length === 0) {
    for (let photo in similarPhotos) {
      if (Object.prototype.hasOwnProperty.call(similarPhotos, photo)) {
        similarPhotosArr.push(similarPhotos[photo]);
      }
    }
  } else {
    similarPhotosArr.length = 0;
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => toggleModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton
          toggleFavPhoto={toggleFavPhoto}
          photoId={photoId}
          favPhotos={favPhotos.includes(photoId)}
        />
        <img className='photo-details-modal__image' src={fullImage}></img>
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src={profileImage}></img>
          <div className='photo-details-modal__photographer-info'>
            <span >{username}</span>
            <p className='photo-details-modal__photographer-location'>{location.city}, {location.country}</p>
          </div>
        </div>
        <h4 className="photo-details-modal__header">Similar Photos</h4>
        <div className='photo-details-modal__top-bar'>
          <ul className='photo-list'>
            <PhotoList
              photos={similarPhotosArr}
              favPhotos={favPhotos}
              toggleFavPhoto={toggleFavPhoto}
              toggleModal={toggleModal}
            />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
