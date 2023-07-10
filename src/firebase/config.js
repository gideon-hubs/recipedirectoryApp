import firebase from "firebase/app";
import  'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAJHxmAgc9bLTTWc82ZUCGdrA1GrHJ4iJQ",
    authDomain: "recipedirectory-836e2.firebaseapp.com",
    projectId: "recipedirectory-836e2",
    storageBucket: "recipedirectory-836e2.appspot.com",
    messagingSenderId: "904077521490",
    appId: "1:904077521490:web:5716bbf5882779ecdc258b"
  };

 firebase.initializeApp(firebaseConfig)

 firebase.firestore()

 const projectFirestore = firebase.firestore()

 export { projectFirestore }