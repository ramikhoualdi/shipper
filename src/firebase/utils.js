import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiDaa-h46HERKjzmSHKfcwv7vIHXnj-s8",
  authDomain: "shipper-25468.firebaseapp.com",
  projectId: "shipper-25468",
  storageBucket: "shipper-25468.appspot.com",
  messagingSenderId: "539540441178",
  appId: "1:539540441178:web:73f1d7a2311c3ddfd23063",
  measurementId: "G-98W0C20G8E",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
