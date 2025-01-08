// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVW0InFLzJ83veK72B6f7vw-yVQD727FA",
  authDomain: "notes-app-c4181.firebaseapp.com",
  projectId: "notes-app-c4181",
  storageBucket: "notes-app-c4181.firebasestorage.app",
  messagingSenderId: "221428999129",
  appId: "1:221428999129:web:2d49572925360048126fc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export{
    app
}