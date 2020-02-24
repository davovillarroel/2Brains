import firebase from 'firebase'

const firebaseConfig = {
apiKey: "AIzaSyARxSxy5-CkOMmvPrAhVXYy9WXw9Q5Z_Bo",
authDomain: "brains-apply.firebaseapp.com",
databaseURL: "https://brains-apply.firebaseio.com",
projectId: "brains-apply",
storageBucket: "brains-apply.appspot.com",
messagingSenderId: "251972094253",
appId: "1:251972094253:web:d9a085b1af70529263aba4",
measurementId: "G-JHWYHYTT3C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();