import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC73dNP0nJ6YC80miIDC1m_ayYS7ugn1e4",
  authDomain: "innovaagrotech-a5a42.firebaseapp.com",
  projectId: "innovaagrotech-a5a42",
  storageBucket: "innovaagrotech-a5a42.firebasestorage.app",
  messagingSenderId: "877017627706",
  appId: "1:877017627706:web:7462ed9e0c2a1a46c5c903",
  measurementId: "G-CK1JDD7QNJ"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}