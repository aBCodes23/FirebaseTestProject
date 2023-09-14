import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqAgWhIHrseVtIUHnCNNc1DKN5tpm4w5w",
  authDomain: "testprojectfirebase-b49d4.firebaseapp.com",
  projectId: "testprojectfirebase-b49d4",
  storageBucket: "testprojectfirebase-b49d4.appspot.com",
  messagingSenderId: "892105064262",
  appId: "1:892105064262:web:fdea9fa8944fce1f2aef47",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, firebase };
