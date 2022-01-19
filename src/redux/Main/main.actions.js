import mainTypes from "./main.types";
// import { auth, db, storage } from "../../firebase/utils";
import { auth, db } from "../../firebase/utils";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, addDoc, setDoc } from "firebase/firestore";

// AUTH
export const setCurrentUser = (props) => ({
  type: mainTypes.CURRENT_USER,
  payload: props,
});

// export const signOutUser = () => ({
//   type: mainTypes.CURRENT_USER,
//   payload: false,
// });

// export const signOutUser = () => ({
//   type: mainTypes.CURRENT_USER,
//   payload: null,
// });

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      console.log("From Sign In action");
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch({
            type: mainTypes.SIGN_IN_SUCCESS,
            payload: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("catch from signin main");
      console.log(err);
    }
  };

export const signUpUser =
  ({ fname, email, password, type }) =>
  async (dispatch) => {
    console.log("Props from signUpUser ", { fname, email, password, type });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential ", userCredential);
        let kind = "";
        if (type === "1") kind = "shipper";
        if (type === "2") kind = "carrier";
        setDoc(doc(db, kind, email), {
          username: fname,
          email: email,
          password: password,
          kind: kind,
          phone: "",
          country: "",
          city: "",
          address: "",
          zip: "",
        });
        dispatch({
          type: mainTypes.SIGN_UP_SUCCESS,
          payload: true,
        });
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        console.log("error Line 51", error);
        dispatch({
          type: mainTypes.AUTH_ERROR,
          payload: error.message,
        });
      });
  };
export const resetAuthSuccess = () => ({
  type: mainTypes.RESET_AUTH_STATE,
});

export const signOutUser = () => async (dispatch) => {
  try {
    signOut(auth).then(() => {
      console.log("User signed out!");
      dispatch({
        type: mainTypes.SIGN_OUT_SUCCESS,
      });
      console.log("User Signed out From Action ::");
    });
  } catch (err) {
    console.log("Error from Sign out action !!");
    console.log(err);
  }
};

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
