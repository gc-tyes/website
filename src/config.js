import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyC5E_D_wqu8FskqMyu2wN8Il-OLTEK53x8",
    authDomain: "tyes-web.firebaseapp.com",
    databaseURL: "https://tyes-web.firebaseio.com",
    projectId: "tyes-web",
    storageBucket: "tyes-web.appspot.com",
    messagingSenderId: "720580829368"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  