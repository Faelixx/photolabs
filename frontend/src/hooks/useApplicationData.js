import React, { useState, useReducer } from 'react';

const initialState = {
  favPhotos: [],
  modalOpen: false,
  modalDetails: ''
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'TOGGLE_FAV_PHOTO':
    return {
      ...state,
      favPhotos: state.favPhotos.includes(action.payload)
        ? state.favPhotos.filter(id => id !== action.payload)
        : [...state.favPhotos, action.payload]
    };
  case 'TOGGLE_MODAL':
    return {
      ...state,
      modalOpen: !state.modalOpen,
      modalDetails: action.payload || ''
    };
  default:
    return state;
  }
};
//useApplicationData custom hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Like/unlike photos
  const toggleFavPhoto = (photoId) => {
    dispatch({ type: 'TOGGLE_FAV_PHOTO', payload: photoId });
  };

  const toggleModal = (details) => {
    dispatch({ type:'TOGGLE_MODAL', payload: details });
  };

  return {
    favPhotos: state.favPhotos,
    modalOpen: state.modalOpen,
    modalDetails: state.modalDetails,
    toggleModal,
    toggleFavPhoto
  }

  ;
};

export default useApplicationData;

