
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyBUTkhZBvUiA9lIM00LbFaMijNMI7Vzk1o',
    authDomain: 'ucf-master-calendar.firebaseapp.com',
    databaseURL: 'https://ucf-master-calendar.firebaseio.com',
    projectId: 'ucf-master-calendar',
    storageBucket: 'ucf-master-calendar.appspot.com',
    messagingSenderId: '641833784596',
    appId: '1:641833784596:web:2b32efb77a94a470be5e01',
    measurementId: 'G-486GH9KB3W',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
