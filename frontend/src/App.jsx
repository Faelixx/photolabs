import React, { useState } from 'react';
import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import photos from "mocks/photos";
import topics from 'mocks/topics';
// Note: Rendering a single component to build components in isolation
const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        modal={modalOpen}
        toggleModal={toggleModal}
      />
      {modalOpen === true &&
      <PhotoDetailsModal
        modal={modalOpen}
        toggleModal={toggleModal}/>}
    </div>
  );
};

export default App;
