import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDJUgyd6OhjmHJXjEZ83xiqjVkOkbjD7_I",
  authDomain: "hearttrainer-c055e.firebaseapp.com",
  projectId: "hearttrainer-c055e",
  storageBucket: "hearttrainer-c055e.appspot.com",
  messagingSenderId: "127691524239",
  appId: "1:127691524239:web:bde011ef172acff8d388fa",
  measurementId: "G-7ERZ4PLKQ5",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firebaseDb = getFirestore(firebaseApp);

export default firebaseApp;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
