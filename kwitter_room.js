var firebaseConfig = {
    apiKey: "AIzaSyCAyCC05pE6DiWHcTG49SpV9lv3VQlD1SM",
    authDomain: "letschat-4c86c.firebaseapp.com",
    databaseURL: "https://letschat-4c86c-default-rtdb.firebaseio.com",
    projectId: "letschat-4c86c",
    storageBucket: "letschat-4c86c.appspot.com",
    messagingSenderId: "373317648165",
    appId: "1:373317648165:web:28fd406d45d06df0b424cc",
    measurementId: "G-ZYJW2J4KG3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function AddRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({     purpose : "adding room name"});
    localStorage.setItem("roomname", room_name);
    window.location="kwitter_page.html";
    }
    function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
          //Start code
    console.log('room name-'+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
  
    //End code
          });});}
    getData();
    function redirectToRoom(names){
     console.log(names);
     localStorage.setItem("room_name",names);
     window.location="kwitter_page.html";     
    }
    function Logout(){
     localStorage.removeItem("user_name");     
     localStorage.removeItem("roomname") ;  
     window.location="index.html";
    }
    function Send(){
    msg=document.getElementById("msg").value;  
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    likes:0      
    });
    document.getElementById("msg").value="";
    }
    