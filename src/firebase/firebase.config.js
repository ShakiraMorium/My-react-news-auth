// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpFILb4j-yawrkQ1CgA7q_4dNuZtuEp6Y",
  authDomain: "my-news-project-9b3dd.firebaseapp.com",
  projectId: "my-news-project-9b3dd",
  storageBucket: "my-news-project-9b3dd.appspot.com",
  messagingSenderId: "449761552042",
  appId: "1:449761552042:web:bb61699373ce8536a5d2d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;