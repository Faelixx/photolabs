import React from "react";

import "../styles/PhotoListItem.scss";


// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

const PhotoListItem = (props) => {
  return (
    <div>
      <img src={props.sampleDataForPhotoListItem.imageSource}></img>
      <img src={props.sampleDataForPhotoListItem.profile}></img>
      <p>{props.sampleDataForPhotoListItem.username}</p>
      <p>{props.sampleDataForPhotoListItem.location.city}, {props.sampleDataForPhotoListItem.location.country}</p>
    </div>
  );
};

export default PhotoListItem;
