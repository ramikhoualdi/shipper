// import { createSlice, configureStore } from '@reduxjs/toolkit'
import mainTypes from "./main.types";

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  recoveryPasswordSuccess: false,
  fetchUserD: null,
  errors: null,
};

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case mainTypes.SET_CURRENT:
      return {
        ...state,
        currentUser: action.payload,
      };
    case mainTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: action.payload,
      };
    case mainTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: action.payload,
      };
    case mainTypes.RECOVERY_SUCCESS:
      return {
        ...state,
        recoveryPasswordSuccess: action.payload,
      };
    case mainTypes.FETCH_CURRENT_USER:
      return {
        ...state,
        fetchUserD: action.payload,
      };
    case mainTypes.AUTH_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    case mainTypes.RESET_AUTH_STATE:
      return {
        ...state,
        signInSuccess: false,
        signUpSuccess: false,
        recoveryPasswordSuccess: false,
      };
    //  DEFAULT
    default:
      return state;
  }
};

export default mainReducer;
