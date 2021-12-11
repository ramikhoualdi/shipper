import carrierTypes from "./carrier.types";

const INITIAL_STATE = {
  currentUser: null,
  carrierSignInSuccess: false,
  carrierSignUpSuccess: false,
  carrierRecoveryPasswordSuccess: false,
  fetchCarrierD: null,
  errors: [],
};

const carrierReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case carrierTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        carrierSignInSuccess: action.payload,
      };
    case carrierTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        carrierSignUpSuccess: action.payload,
      };
    case carrierTypes.RECOVERY_SUCCESS:
      return {
        ...state,
        carrierRecoveryPasswordSuccess: action.payload,
      };
    case carrierTypes.FETCH_SHIPPER:
      return {
        ...state,
        fetchCarrierD: action.payload,
      };
    //  DEFAULT
    default:
      return state;
  }
};

export default carrierReducer;
