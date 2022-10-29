import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyA7Yb2g6e6Ry9YKTjLnRdX6XBWTWaL-fh0",
    authDomain: "foodwebsite-f8e42.firebaseapp.com",
    databaseURL: "https://foodwebsite-f8e42-default-rtdb.firebaseio.com",
    projectId: "foodwebsite-f8e42",
    storageBucket: "foodwebsite-f8e42.appspot.com",
    messagingSenderId: "803983826940",
    appId: "1:803983826940:web:298787c38c38fd972a9c79"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage};