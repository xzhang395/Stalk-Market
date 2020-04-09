
import React, { useState, useContext } from "react";
import { AuthContext } from "../App";
import Firebase from "../Firebase/firebase.js";
import firebase from 'firebase/app';

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  // var provider = new firebase.auth.GoogleAuthProvider();
  const Auth = useContext(AuthContext);
  const handleForm = e => {
    console.log("loggedin");
    Firebase.auth().signInWithPopup(new firebase.auth().GoogleAuthProvider()).then(function(result) {
     
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      console.log("loggedin");
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    Auth.setLoggedIn(true);
    console.log("loggedin");
  };

  return (
    <div>
      <h1>Login</h1>
      {/* {    console.log("loggedin")} */}
      <form onSubmit={e => handleForm(e)}>
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
        <span>{error}</span>
      </form>
    </div>
  );
};

export default SignInPage;

























