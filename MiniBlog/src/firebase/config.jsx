// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP5KC6vmxyLCfCjWhFmVSaqzbY3fmPKMY",
  authDomain: "miniblog-9ae1d.firebaseapp.com",
  projectId: "miniblog-9ae1d",
  storageBucket: "miniblog-9ae1d.appspot.com",
  messagingSenderId: "548557406472",
  appId: "1:548557406472:web:7046ebe34bb9a1ff4eecbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };