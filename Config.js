import firebase from 'firebase';
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBAz8OrE1VXRAXxLuBtS1U4L0rdYZoSmGA",
    authDomain: "attendance-app-99cd4.firebaseapp.com",
    databaseURL: "https://attendance-app-99cd4.firebaseio.com",
    projectId: "attendance-app-99cd4",
    storageBucket: "attendance-app-99cd4.appspot.com",
    messagingSenderId: "87658528183",
    appId: "1:87658528183:web:6bcfcc7a4efe9755827c32"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();