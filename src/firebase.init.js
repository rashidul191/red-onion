// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_LC74HhXbvOyrjjbeUOqg0uoXprBrpK8",
  authDomain: "red-onion-80766.firebaseapp.com",
  projectId: "red-onion-80766",
  storageBucket: "red-onion-80766.appspot.com",
  messagingSenderId: "992016881161",
  appId: "1:992016881161:web:5b97de20c02d636c784ad8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
