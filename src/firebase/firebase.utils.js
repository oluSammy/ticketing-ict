import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDHx_CRqy_smenFgvr0DwS2xdZH0hA76R4",
    authDomain: "ticketing-2be0d.firebaseapp.com",
    databaseURL: "https://ticketing-2be0d.firebaseio.com",
    projectId: "ticketing-2be0d",
    storageBucket: "ticketing-2be0d.appspot.com",
    messagingSenderId: "458917862451",
    appId: "1:458917862451:web:2e7666df249f8e8849d746",
    measurementId: "G-4MY6Q9RWYH"
};

firebase.initializeApp(firebaseConfig);

//enable persistence
firebase.firestore().enablePersistence();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue.serverTimestamp();

export default firebase;