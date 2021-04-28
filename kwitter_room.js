var firebaseConfig = {
      apiKey: "AIzaSyBnt87hnifsAbevN7r11Ma5vlZdDIRlfhA",
      authDomain: "kwitter-f8da7.firebaseapp.com",
      databaseURL: "https://kwitter-f8da7-default-rtdb.firebaseio.com",
      projectId: "kwitter-f8da7",
      storageBucket: "kwitter-f8da7.appspot.com",
      messagingSenderId: "665472264259",
      appId: "1:665472264259:web:3adc36fc995a6cb6a78cf6",
      measurementId: "G-K15YW233RL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
  
//ADD YOUR FIREBASE LINKS HERE
var username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+username;
function addroom_name(){
       room=document.getElementById("roomname").value;
      console.log(room);
      firebase.database().ref("/").child(room).update({
            purpose:"addingroomname"
      });
      localStorage.setItem("roomname", room);
      window.location="kwitter_page.html";
}
function getData() {
       firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
            Room_names = childKey; 
            console.log("Room Name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
             document.getElementById("output").innerHTML += row; }); }); }
getData();
function redirectToRoomName(name){
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}