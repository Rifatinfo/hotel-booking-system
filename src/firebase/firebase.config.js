// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu05awbuVIKSzqKug_-SSB_vC0GTC89CQ",
  authDomain: "hotel-booking-e54b7.firebaseapp.com",
  projectId: "hotel-booking-e54b7",
  storageBucket: "hotel-booking-e54b7.firebasestorage.app",
  messagingSenderId: "734905848830",
  appId: "1:734905848830:web:c579c2fab40808a0dde6af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app