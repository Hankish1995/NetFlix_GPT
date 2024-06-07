// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBx-G-CNSXBrqbs-dff2o94THtMA6m8rIs",
    authDomain: "netflixgpt-d6e81.firebaseapp.com",
    projectId: "netflixgpt-d6e81",
    storageBucket: "netflixgpt-d6e81.appspot.com",
    messagingSenderId: "701416842541",
    appId: "1:701416842541:web:b240571d21d1bfdb021fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()