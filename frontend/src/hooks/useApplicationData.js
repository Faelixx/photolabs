import React, { useState } from 'react';

//useApplicationData custom hook
const useApplicationData = () => {

  const [favPhotos, setFavPhotos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState('');
  // Like/unlike photos
  const toggleFavPhoto = (photoId) => {
    setFavPhotos((currentFav) => {
      if (currentFav.includes(photoId)) {
        return currentFav.filter(id => id !== photoId);
      } else {
        return [...currentFav, photoId];
      }
    });
  };
  // Create photo details for modal
  const photoDetails = (details) => {
    if (modalDetails === '') {
      setModalDetails(details);
      return modalDetails;
    } else if (modalOpen === false) {
      setModalDetails('');
    } else {
      setModalDetails('');
    }
  };

  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  // Trigger both for onClick event
  const toggleModal = (details) => {
    openModal();
    photoDetails(details);
  };

  return {
    favPhotos,
    modalOpen,
    modalDetails,
    toggleModal,
    toggleFavPhoto
  }

  ;
};

export default useApplicationData;
