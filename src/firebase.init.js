// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { auth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmQF3vAPwbmQCtBfn9LWHaxNAyUqrNJRI",
    authDomain: "ema-john-simple-ac443.firebaseapp.com",
    projectId: "ema-john-simple-ac443",
    storageBucket: "ema-john-simple-ac443.appspot.com",
    messagingSenderId: "403353989229",
    appId: "1:403353989229:web:495f78167130de6f794f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
