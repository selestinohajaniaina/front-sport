// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDioyqlYBm-z9qOqF3mt6j7Kz4tIar4bNw",
    authDomain: "sport-dff16.firebaseapp.com",
    projectId: "sport-dff16",
    storageBucket: "sport-dff16.appspot.com",
    messagingSenderId: "895896079261",
    appId: "1:895896079261:web:3c2e81cad136e1fd35bd74",
    measurementId: "G-60Z5DTR8K2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;