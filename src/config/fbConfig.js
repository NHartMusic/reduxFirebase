 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAV8vnI1wGPQhqg4nNMLraAAEsYMWpqf8U",
    authDomain: "redux-firebase-test-27c75.firebaseapp.com",
    databaseURL: "https://redux-firebase-test-27c75.firebaseio.com",
    projectId: "redux-firebase-test-27c75",
    storageBucket: "redux-firebase-test-27c75.appspot.com",
    messagingSenderId: "790861257528"
  }

  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase