// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA33nlSDwP2YWOMfE6M72_PxxM5Y1cX5zg",
  authDomain: "booking-system-e6f02.firebaseapp.com",
  projectId: "booking-system-e6f02",
  storageBucket: "booking-system-e6f02.firebasestorage.app",
  messagingSenderId: "85537235202",
  appId: "1:85537235202:web:7e4b4bcdb11a55eea2a21b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app