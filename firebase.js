// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnIEjfjv9reTwJ1VVt2GR_jwhgtsqfMPc",
  authDomain: "lacglo.firebaseapp.com",
  projectId: "lacglo",
  storageBucket: "lacglo.appspot.com",
  messagingSenderId: "940215268768",
  appId: "1:940215268768:web:69fc53f1c58308da3120c5",
  measurementId: "G-ZQ6BF0K4VW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
