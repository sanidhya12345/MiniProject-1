let databaseRef = firebase.database();



//write new user inb the database
function writeNewUser(userID, displayname, email, emailVerified){
  databaseRef.ref('users/' + userID).set({
    username:displayname,
    email:email,
    emailVerified: emailVerified
  }).then( e => {
    window.location.href ='../index.html';
  });
}