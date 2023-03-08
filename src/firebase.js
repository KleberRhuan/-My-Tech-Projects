// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export { db, storage };

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB5eoskEwXhxBgmqS92QKB9zMh3vULqws",
  authDomain: "bikcraft-61424.firebaseapp.com",
  projectId: "bikcraft-61424",
  storageBucket: "bikcraft-61424.appspot.com",
  messagingSenderId: "169265430939",
  appId: "1:169265430939:web:9fc5d99015fd30b60c213e",
  measurementId: "G-RK4ED5CB8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);