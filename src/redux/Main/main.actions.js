import mainTypes from "./main.types";
// import { auth, db, storage } from "../../firebase/utils";
import { auth, db } from "../../firebase/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, addDoc } from "firebase/firestore";

// AUTH
export const setCurrentUser = () => ({
  type: mainTypes.SIGN_IN_SUCCESS,
  payload: true,
});

export const signIn = ({ email, password }) => {
  try {
    console.log("Email & Password from main action");
    console.log(email, " <=> ", password);
  } catch (err) {
    console.log("catch from signin main");
    console.log(err);
  }
};
export const signUpUser = (props) => async (dispatch) => {
  console.log("Props from signUpUser ", props);
  dispatch({
    type: mainTypes.SIGN_UP_SUCCESS,
    payload: true,
  });
};
export const resetAuthSuccess = () => ({
  type: mainTypes.RESET_AUTH_STATE,
});
export const signUp = (name, email, password, type) => async (dispatch) => {
  console.log("HERE main action Sign Up");
  let createdAt = new Date();
  let updatedAt = new Date();
  let deletedAt = new Date();
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("User data =>", user);
        try {
          const docRef = addDoc(doc(db, "users"), {
            name,
            email,
            password,
            type,
            createdAt,
            updatedAt,
            deletedAt,
          });
          console.log("Document written with ID: ", docRef.id);
          //   await setDoc(docRef, {
          //     id: docRef.id,
          //     name,
          //     email,
          //     password,
          //     type,
          //     createdAt,
          //     updatedAt,
          //     deletedAt,
          //   });
          //   dispatch({
          //     type: mainTypes.SIGN_UP_SUCCESS,
          //     payload: true,
          //   });
          //   dispatch({
          //     type: mainTypes.SET_CURRENT,
          //     payload: {
          //       id: docRef.id,
          //       name,
          //       email,
          //       password,
          //       type,
          //       createdAt,
          //       updatedAt,
          //       deletedAt,
          //     },
          //   });
          console.log("SUCCESS SIGNUP =========================");
        } catch (err) {
          console.log("Error Storing SignUp Data", err);
        }
      })
      .catch((err) => {
        console.log("SignUp Error", err);
      });
  } catch (err) {
    console.log("catch from signup main");
    console.log(err);
  }
};
export const recoveryPassword = ({ email }) => {
  try {
    console.log("Email from main action");
    console.log(email);
  } catch (err) {
    console.log("catch from recovery main");
    console.log(err);
  }
};
