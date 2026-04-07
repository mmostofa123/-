// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnNK1RJ1ASXPnOG0fdX7zXQDbUFuGCYwU",
  authDomain: "synctask-pro-1-bdf9f.firebaseapp.com",
  databaseURL: "https://synctask-pro-1-bdf9f-default-rtdb.firebaseio.com",
  projectId: "synctask-pro-1-bdf9f",
  storageBucket: "synctask-pro-1-bdf9f.firebasestorage.app",
  messagingSenderId: "627264366585",
  appId: "1:627264366585:web:40d59ad7de276d33ae7f28",
  measurementId: "G-CYC0EB81JH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
