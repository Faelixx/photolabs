import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoFavButton from 'components/PhotoFavButton';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const photos = Array.from({ length: 3 }, () => sampleDataForPhotoListItem);
// Note: Rendering a single component to build components in isolation
const App = () => {
  console.log(photos);
  return (
    <div className="App">
      {photos.map((photo, index) => (
        <PhotoListItem
          key={index}
          id={photo.id}
          location={photo.location}
          username={photo.username}
          postImage={photo.imageSource}
          profileImage={photo.profile}/>
      ))}
    </div>
  );
};

export default App;
