import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from "mocks/photos";
import topics from 'mocks/topics';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFavPhoto = (photoId) => {
    setFavPhotos((currentFav) => {
      if (currentFav.includes(photoId)) {
        return currentFav.filter(id => id !== photoId);
      } else {
        return [...currentFav, photoId];
      }
    });
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState('');

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

  const toggleModal = (details) => {
    openModal();
    photoDetails(details);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        modal={modalOpen}
        toggleModal={toggleModal}
        modalDetails={modalDetails}
        toggleFavPhoto={toggleFavPhoto}
        favPhotos={favPhotos}/>
      {modalOpen === true &&
      <PhotoDetailsModal
        photos={photos}
        toggleModal={toggleModal}
        modalDetails={modalDetails}
        toggleFavPhoto={toggleFavPhoto}
        favPhotos={favPhotos}/>
      }
    </div>
  );
};

export default App;
