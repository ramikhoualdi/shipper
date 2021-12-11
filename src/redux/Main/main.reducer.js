// import { createSlice, configureStore } from '@reduxjs/toolkit'
import mainTypes from "./main.types";

const INITIAL_STATE = {
  currentUser: null,
  signInSuccess: false,
  signUpSuccess: false,
  recoveryPasswordSuccess: false,
  fetchUserD: null,
  errors: [],
};

// const mainSlice = createSlice({
//   name: 'main',
//   initialState: {
//     INITIAL_STATE,
//   },
//   reducers: {
//     incremented: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decremented: state => {
//       state.value -= 1
//     }
//   }
// })

// export const { incremented, decremented } = counterSlice.actions

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// 

const mainReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
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
