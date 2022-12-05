// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSdAeCsxhvvBrSmlgE1TGO88aHloB78Rg",
  authDomain: "tienda-online-384e7.firebaseapp.com",
  projectId: "tienda-online-384e7",
  storageBucket: "tienda-online-384e7.appspot.com",
  messagingSenderId: "121066004718",
  appId: "1:121066004718:web:a99d841e2c12075abf93ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore=()=> app
