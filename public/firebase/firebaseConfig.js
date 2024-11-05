
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7ZkmKJIWPJA6kAM407_R0bZR9p1aq6nM",
  authDomain: "innovaagrotech-bb5c1.firebaseapp.com",
  projectId: "innovaagrotech-bb5c1",
  storageBucket: "innovaagrotech-bb5c1.firebasestorage.app",
  messagingSenderId: "600440000154",
  appId: "1:600440000154:web:8c690df65682e3109b1923",
  measurementId: "G-80081221P4"
};

const auth = getAuth(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);