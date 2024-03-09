// import { stat } from 'fs';
import React, { useReducer, useEffect } from 'react';

const initialState = {
  favPhotos: [],
  modalOpen: false,
  modalDetails: '',
  photoData: [],
  topicData: [],
  topicClicked: false,
  topicId: null
};

// Reducer actions to prevent typos
const ACTIONS = {
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPICS: 'SET_TOPICS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_TOPIC_CLICKED: 'SET_TOPIC_CLICKED',
  SET_CLICKED_TOPIC_ID: 'SET_CLICKED_TOPIC_ID'
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
      modalDetails: action.payload
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
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return {
      ...state,
      photoData: action.payload
    };
  case ACTIONS.SET_TOPIC_CLICKED:
    return {
      ...state,
      topicClicked: action.payload
    };

  case ACTIONS.SET_CLICKED_TOPIC_ID:
    return {
      ...state,
      clickedTopicId: action.payload
    };
  default:
    return state;
  }
};
// useApplicationData custom hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Like/unlike photos
  const toggleFavPhoto = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, payload: photoId });
  };

  const toggleModal = (details) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: details });
  };
  
  // Filter main page photo list
  const setTopicClicked = (clicked, topicId = null) => {
    dispatch({ type: ACTIONS.SET_TOPIC_CLICKED, payload: clicked});
    if (topicId !== null) {
      dispatch({ type: ACTIONS.SET_CLICKED_TOPIC_ID, payload: topicId });
    }
  };

  useEffect(() => {
    if (state.topicClicked) {
      if (state.clickedTopicId) {
        fetch(`/api/topics/photos/${state.clickedTopicId}`)
          .then(res => res.json())
          .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}));
      }
    }
  }, [state.topicClicked, state.clickedTopicId]);


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
    toggleFavPhoto,
    setTopicClicked
  }

  ;
};

export default useApplicationData;

