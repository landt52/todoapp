import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDj_CTwpr7_bhQoHnvOtP0Ag8P8ip7L8-Q",
    authDomain: "todo-app-217a2.firebaseapp.com",
    databaseURL: "https://todo-app-217a2.firebaseio.com",
    projectId: "todo-app-217a2",
    storageBucket: "todo-app-217a2.appspot.com",
    messagingSenderId: "440756000946",
    appId: "1:440756000946:web:f3abb34d419d0603cc51ab",
    measurementId: "G-FJW0NN9MVK"
})

const unsubscribeFirebase = (docType) => {
    return firebaseConfig.firestore().collection(docType);
}

export default unsubscribeFirebase;