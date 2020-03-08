import firebase from 'firebase/app'
// database
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDLGfbKcwfXa5HbjnabX9IXy7e6qHL6NqY',
  authDomain: 'inventorify-85e47.firebaseapp.com',
  databaseURL: 'https://inventorify-85e47.firebaseio.com',
  projectId: 'inventorify-85e47',
  storageBucket: 'inventorify-85e47.appspot.com',
  messagingSenderId: '487931708758',
  appId: '1:487931708758:web:2bae620975d268986c02f7'
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
