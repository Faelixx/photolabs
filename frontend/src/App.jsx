import React from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import useApplicationData from 'hooks/useApplicationData';

const App = () => {

  const {
    topics,
    photos,
    favPhotos,
    modalOpen,
    modalDetails,
    toggleModal,
    toggleFavPhoto,
    setTopicClicked
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
        setTopicClicked={setTopicClicked}
      />
      {modalOpen === true &&
      <PhotoDetailsModal
        photos={photos}
        favPhotos={favPhotos}
        modalDetails={modalDetails}
        toggleModal={toggleModal}
        toggleFavPhoto={toggleFavPhoto}
        setTopicClicked={setTopicClicked}
      />
      }
    </div>
  );
};

export default App;
