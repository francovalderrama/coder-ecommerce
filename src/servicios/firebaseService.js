import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = ({
    apiKey: "AIzaSyDxdy0G8repej_Yib1PNHiBuaEpC88-QTs",
    authDomain: "react-ecommerce-9367c.firebaseapp.com",
    projectId: "react-ecommerce-9367c",
    storageBucket: "react-ecommerce-9367c.appspot.com",
    messagingSenderId: "813444086711",
    appId: "1:813444086711:web:93f0ab867c20c0b1188632"

  });

  // Initialize Firebase

 const app2 = firebase.initializeApp(firebaseConfig);


 export function getFirebase(){
     return app2
 }

 export function getFirestore(){
     return firebase.firestore(app2)
 }