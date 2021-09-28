import firebase from "firebase";


const firebaseConfig = {
   
  apiKey: "AIzaSyASW6FZjX_XVW3Yhce3aiD5YX4naj-5270",
  authDomain: "contacts-295d6.firebaseapp.com",
  projectId: "contacts-295d6",
  storageBucket: "contacts-295d6.appspot.com",
  messagingSenderId: "424232875364",
  appId: "1:424232875364:web:34206824b01e64d3667671"}
  

firebase.initializeApp(firebaseConfig);

export default firebase;