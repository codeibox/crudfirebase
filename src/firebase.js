import firebase from 'firebase'

// Sua key do firebase adicione ela aqui em baixo

const firebaseConfig = {
  apiKey: "AIzaSyCeBfDBG_cS8cOaLeJO0-79sc4GtqQr_YY",
  authDomain: "appdasos-56cf2.firebaseapp.com",
  databaseURL: "https://appdasos-56cf2-default-rtdb.firebaseio.com",
  projectId: "appdasos-56cf2",
  storageBucket: "appdasos-56cf2.appspot.com",
  messagingSenderId: "497041951362",
  appId: "1:497041951362:web:99205a9a1760729934029b"
};

const fireDb = firebase.initializeApp(firebaseConfig);
const firebaseDB = fireDb.database().ref()

export default firebaseDB
