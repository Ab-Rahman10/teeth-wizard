// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Eeg-R8OWDMX9RZ2Vl5LxpH0buTak9CQ",
  authDomain: "teeth-wizard-2453e.firebaseapp.com",
  projectId: "teeth-wizard-2453e",
  storageBucket: "teeth-wizard-2453e.firebasestorage.app",
  messagingSenderId: "12357581566",
  appId: "1:12357581566:web:a842a52129658f7cc5c3af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
