// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBr3y6P4atYJFzcxTSHjnisZAah1CqNT6o",
    authDomain: "tools-manufacturer-17ba8.firebaseapp.com",
    projectId: "tools-manufacturer-17ba8",
    storageBucket: "tools-manufacturer-17ba8.appspot.com",
    messagingSenderId: "366646293308",
    appId: "1:366646293308:web:0c630a4e72aab80511a439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;