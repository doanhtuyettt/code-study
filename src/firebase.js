// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import firebase from "firebase/app";
// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REDIRECT_API_KEY,
    authDomain: "code-study-6e373.firebaseapp.com",
    projectId: "code-study-6e373",
    storageBucket: "code-study-6e373.appspot.com",
    messagingSenderId: "49641626235",
    appId: "1:49641626235:web:273b231cd4cd05572560de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export default app;
// export const auth = getAuth(app);