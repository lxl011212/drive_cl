import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAQflwHC-E-IlYsb_EAmJYMCJfw1vS_lnQ",
    authDomain: "drive-clone-92f40.firebaseapp.com",
    projectId: "drive-clone-92f40",
    storageBucket: "drive-clone-92f40.appspot.com",
    messagingSenderId: "572998713303",
    appId: "1:572998713303:web:f0aaa75f9eaa25ceb01592"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
