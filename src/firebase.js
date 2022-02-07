import firebase from 'firebase'

// Sua key do firebase adicione ela aqui em baixo

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const fireDb = firebase.initializeApp(firebaseConfig);
const firebaseDB = fireDb.database().ref()

export default firebaseDB