import React, { useState, useEffect } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {


  const {
    topics,
    photos,
    favPhotos,
    modalOpen,
    modalDetails,
    toggleModal,
    toggleFavPhoto
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favPhotos={favPhotos}
        modal={modalOpen}
        modalDetails={modalDetails}
        toggleModal={toggleModal}
        toggleFavPhoto={toggleFavPhoto}
      />
      {modalOpen === true &&
      <PhotoDetailsModal
        photos={photos}
        favPhotos={favPhotos}
        modalDetails={modalDetails}
        toggleModal={toggleModal}
        toggleFavPhoto={toggleFavPhoto}
      />
      }
    </div>
  );
};

export default App;
