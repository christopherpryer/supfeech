// Initialize Firebase
var config = {
  apiKey: "AIzaSyA19nR6eSsDHRIewBs1WAjyGs5NCCKEvFs",
  authDomain: "supfeech.firebaseapp.com",
  databaseURL: "https://supfeech.firebaseio.com",
  storageBucket: "supfeech.appspot.com",
  messagingSenderId: "355684958639"
  };
firebase.initializeApp(config);

//static set for first message in chatbox
var text0 = document.getElementById('text0');
var realDb0 = firebase.database().ref('chat').child(0);
realDb0.on('value', snap => text0.innerText = snap.val());

//function for writing data to firebase database
function postMessage(){
  //sets new branch to chat and adds message1 with newText value
  var oldText = document.getElementById('text0').innerText;
  var newText = document.getElementById('usermsg').value;
  firebase.database().ref('chat').set({
  0: oldText,
  1: newText
});

  //inserts new message into second p element within chatbox (static)
  var text1 = document.getElementById("text1");
  var realDb1 = firebase.database().ref('chat').child(1);
  realDb1.on('value', snap => text1.innerText = snap.val());
}
