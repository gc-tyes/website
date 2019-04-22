import Firebase from 'firebase';  
let config = {  
    apiKey: "AIzaSyCHhX5PmpsmLQhY95HmLnm2VYc0m81mos0",
    authDomain: "tyes-web-478b4.firebaseapp.com",
    databaseURL: "https://tyes-web-478b4.firebaseio.com",
    projectId: "tyes-web-478b4",
    storageBucket: "tyes-web-478b4.appspot.com",
    messagingSenderId: "496916704132"
};
let app = Firebase.initializeApp(config);  
export const db = app.database();  