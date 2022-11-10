// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGm1GtbDKDnOk0BNWBOgrbWjZFPhSzsDk",
  authDomain: "crypto-blog-app.firebaseapp.com",
  projectId: "crypto-blog-app",
  storageBucket: "crypto-blog-app.appspot.com",
  messagingSenderId: "49442262329",
  appId: "1:49442262329:web:26030cf9bff079efefece8",
  measurementId: "G-YS56P56VRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);