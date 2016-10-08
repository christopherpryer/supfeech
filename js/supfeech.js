// Initialize Firebase
var config = {
  apiKey: "AIzaSyA19nR6eSsDHRIewBs1WAjyGs5NCCKEvFs",
  authDomain: "supfeech.firebaseapp.com",
  databaseURL: "https://supfeech.firebaseio.com",
  storageBucket: "supfeech.appspot.com",
  messagingSenderId: "355684958639"
  };
firebase.initializeApp(config);
populateChat();

//function for writing data to firebase database
function postMessage(){
  //sets new branch to chat and adds message with newText value
  var newText = document.getElementById('usermsg').value;
  var countRef = firebase.database().ref('counter/');
  var counter = 0;
  countRef.on('value', function(snapshot) {
      counter = snapshot.val();
  });
  var newCounter = counter + 1;
  countRef.set(newCounter);
  firebase.database().ref('chat').child(newCounter).set(newText);
  populateChat();
}

function populateChat(){
  var countRef = firebase.database().ref('counter/');
  var counter = 0;
  countRef.on('value', function(snapshot) {
      counter = snapshot.val();
  });

  //for testing -- need to research reading json from firebase
  for (var i = 0; i <= counter; i++) {
      //beware of type conversion
      var textHolder = 'text' + i;
      var text = document.getElementById(textHolder);
      var chatRef = firebase.database().ref('chat').child(i);
      chatRef.on('value', snap => text.innerText = snap.val());
  }
}

/*
var text0 = document.getElementById('text0');
var realDb0 = firebase.database().ref('chat').child(0);
realDb0.on('value', snap => text0.innerText = snap.val());

var text1 = document.getElementById("text1");
var realDb1 = firebase.database().ref('chat').child(1);
realDb1.on('value', snap => text1.innerText = snap.val());

var text2 = document.getElementById("text2");
var realDb2 = firebase.database().ref('chat').child(2);
realDb2.on('value', snap => text2.innerText = snap.val());
*/
