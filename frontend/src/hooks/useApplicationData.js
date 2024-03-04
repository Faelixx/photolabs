// import { stat } from 'fs';
import React, { useState, useReducer, useEffect } from 'react';

const initialState = {
  favPhotos: [],
  modalOpen: false,
  modalDetails: '',
  photoData: [],
  topicData: []
};

const ACTIONS = {
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS: 'SET_TOPICS'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.TOGGLE_FAV_PHOTO:
    return {
      ...state,
      favPhotos: state.favPhotos.includes(action.payload)
        ? state.favPhotos.filter(id => id !== action.payload)
        : [...state.favPhotos, action.payload]
    };
  case ACTIONS.TOGGLE_MODAL:
    return {
      ...state,
      modalOpen: !state.modalOpen,
      modalDetails: action.payload || ''
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload
    };
  case ACTIONS.SET_TOPICS:
    return {
      ...state,
      topicData: action.payload
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
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: photoId });
  };

  const toggleModal = (details) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: details });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data}));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPICS, payload: data}));
  }, []);

  return {
    photos: state.photoData,
    topics: state.topicData,
    favPhotos: state.favPhotos,
    modalOpen: state.modalOpen,
    modalDetails: state.modalDetails,
    toggleModal,
    toggleFavPhoto
  }

  ;
};

export default useApplicationData;

