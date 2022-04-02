import  firebase from 'firebase';

import 'firebase/firestore';
import '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAr-QbVdVx7kJdi8jtjHx0a2g93cCid_rE",
  authDomain: "bhargava-42d79.firebaseapp.com",
  projectId: "bhargava-42d79",
  storageBucket: "bhargava-42d79.appspot.com",
  messagingSenderId: "288769851704",
  appId: "1:288769851704:web:4eb82ff0a632bc0cf7c1cd",
  measurementId: "G-VD06GMW9SM"
};

// Initialize Firebase

if(!firebase.apps.length){
 const app =   firebase.initializeApp(firebaseConfig);
   }
   const db=firebase.firestore(app);
   export default db;
