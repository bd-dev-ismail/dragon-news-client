// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBie0qmwjsLMgLzzrJJ5ArvPEgjLz8DsA",
  authDomain: "dragon-news-e4dc9.firebaseapp.com",
  projectId: "dragon-news-e4dc9",
  storageBucket: "dragon-news-e4dc9.appspot.com",
  messagingSenderId: "817913533811",
  appId: "1:817913533811:web:7f5f17afca7d75d8fda106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;