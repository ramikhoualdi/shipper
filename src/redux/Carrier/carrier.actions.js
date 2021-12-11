import carrierTypes from "./carrier.types";
import { auth, db, storage } from "../../firebase/utils";


// AUTH
export const setCurrentProperty = () => ({
  type: carrierTypes.SIGN_IN_SUCCESS,
  payload: true,
});
export const signInCarrier = ({ email, password }) => {
  try {
    console.log("Email & Password from carrier action");
    console.log(email, " <=> ", password);
  } catch (err) {
    console.log("catch from signin carrier");
    console.log(err);
  }
};
export const resetsigninCarrier = () => ({
    type: carrierTypes.RESET_SIGN_IN_SUCCESS,
  });
export const signUpCarrier = ({ name, email, password }) => {
  let createdAt = new Date();
  let updatedAt = new Date();
  let deletedAt = new Date();
  let type = "2";
  try {
    console.log("Data from carrier action");
    console.log(name, email, password, type, createdAt, updatedAt, deletedAt);
  } catch (err) {
    console.log("catch from signup carrier");
    console.log(err);
  }
};
export const RecoveryPasswordCarrier = ({ email }) => {
  try {
    console.log("Email from RecoveryPasswordCarrier action");
    console.log(email);
  } catch (err) {
    console.log("catch from recovery carrier");
    console.log(err);
  }
};
