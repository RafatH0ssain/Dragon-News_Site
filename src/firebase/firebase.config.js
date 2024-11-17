// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsfmGO4jtLzjIGyzrBKuAHOt4vJYA7R_g",
    authDomain: "dragon-news-c7f7f.firebaseapp.com",
    projectId: "dragon-news-c7f7f",
    storageBucket: "dragon-news-c7f7f.firebasestorage.app",
    messagingSenderId: "80415124965",
    appId: "1:80415124965:web:d9acd1202822dc99ba530c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;