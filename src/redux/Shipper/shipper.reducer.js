import shipperTypes from "./shipper.types";

const INITIAL_STATE = {
  currentUser: null,
  shipperSignInSuccess: false,
  shipperSignUpSuccess: false,
  shipperRecoveryPasswordSuccess: false,
  fetchShipperD: null,
  errors: [],
};

const shipperReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case shipperTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        shipperSignInSuccess: action.payload,
      };
    case shipperTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        shipperSignUpSuccess: action.payload,
      };
    case shipperTypes.RECOVERY_SUCCESS:
      return {
        ...state,
        shipperRecoveryPasswordSuccess: action.payload,
      };
    case shipperTypes.FETCH_SHIPPER:
      return {
        ...state,
        fetchShipperD: action.payload,
      };
    //  DEFAULT
    default:
      return state;
  }
};

export default shipperReducer;
