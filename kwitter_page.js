//YOUR FIREBASE LINKS
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
    
  
var room_name=localStorage.getItem("roomname");
var user_name=localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
username=message_data['name'];
message=message_data['messages'];
like=message_data['like'];
namewithtag="<h4>"+username+"<img src='tick.png' class='user_tick'> </h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
buttonwithtag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'> ";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
row=namewithtag+messagewithtag+buttonwithtag+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send(){ 
      msg = document.getElementById("message").value;
 firebase.database().ref(room_name).push({ name: user_name, messages:msg, like:0 }); 
 document.getElementById("message").value = ""; }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}
function updatelike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updatedlikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
     like:updatedlikes 
});
}