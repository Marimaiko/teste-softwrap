import *as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCpyu8GAO2WATmwLiMANpT99Fvlr_q4FQU",
    authDomain: "teste-softwrap-f9ae4.firebaseapp.com",
    databaseURL: "https://teste-softwrap-f9ae4.firebaseio.com/",
    projectId: "teste-softwrap-f9ae4",
    storageBucket: "teste-softwrap-f9ae4.appspot.com",
    messagingSenderId: "238365379971",
    appId: "1:238365379971:web:c01db149b814e2d87e3ab6",
    measurementId: "G-4ZEHNNNK3H"
  };
  // Initialize Firebase
 let fireDB = firebase.initializeApp(firebaseConfig);

 export default fireDB.database().ref();