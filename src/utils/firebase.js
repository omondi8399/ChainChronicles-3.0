// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "my-blog-d29da.firebaseapp.com",
  projectId: "my-blog-d29da",
  storageBucket: "my-blog-d29da.appspot.com",
  messagingSenderId: "1013847305591",
  appId: "1:1013847305591:web:001de2b20532ee4e4ac572",
  measurementId: "G-3FJ40L3SQN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);