
import React, { useState, useContext } from "react";
import { auth } from "../Firebase/firebase.js";
import firebase from 'firebase/app';

const SignInPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setErrors] = useState("");
  const handleForm = e => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    console.log("got into form sending");
    auth.signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      console.log("Token: " + token);
      // The signed-in user info.
      var user = result.user;
      console.log("User: " + user);
      setTimeout(function(){ alert("Hello"); }, 3000);
    }).catch((blah) => console.log('error', blah));
    // Firebase.auth().signInWithPopup(new firebase.auth().GoogleAuthProvider()).then(function(result) {
     
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    //   // ...
    // }).catch(function(error) {
    //   console.log("Processing ERROR");
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
    // Auth.setLoggedIn(true);
    console.log("loggedin");
  };

  return (
    <div>
      <h1>Login</h1>
      {/* {    console.log("loggedin")} */}
      <div onSubmit={e => handleForm(e)}>
      {/* <form > */}
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Firebase.auth()}/> */}
        <button className="googleBtn" type="button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Login With Google
        </button>
        <button type="submit">Login</button>
        {/* <span>{error}</span> */}
      </div>
    </div>
  );
};

export default SignInPage;
