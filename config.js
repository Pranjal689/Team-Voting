import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
const firebaseConfig = {
  apiKey: "AIzaSyA-PSSQYIfQHP-3MpGWyUgzwUHbrdTqbGw",
  authDomain: "voting-9063a.firebaseapp.com",
  projectId: "voting-9063a",
  storageBucket: "voting-9063a.appspot.com",
  messagingSenderId: "258820387892",
  appId: "1:258820387892:web:e0fda03bb57a65a09b4661"
};

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
