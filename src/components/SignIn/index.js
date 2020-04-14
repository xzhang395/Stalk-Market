import React from "react";
import { auth, db } from "../Firebase/firebase.js";
import firebase from "firebase/app";
import google from "../../img/google.png";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = e => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    auth
      .signInWithPopup(provider)
      .then(result => {
        var user = result.user;
        console.log("user [" + user.displayName + "] signed in successfully");
        // this.writeUserData();
      })
      .catch(blah => console.log("error", blah));
  };

  writeUserData = () => {
    db.ref(
      "user/" + auth.currentUser.uid + "/"
    ).set({
      email: auth.currentUser.email,
      misc: auth.currentUser.photoURL,
      lastLoginAt: new Date().toISOString()
    });
  };
  render() {
    return (
      <div>
        <button className="LoginButtn" onClick={e => this.handleClick(e)}>
          {" "}
          <img className="google" src={google} />
          <span>Sign in with Google to enter your price</span>
        </button>
      </div>
    );
  }
}

export default SignInPage;
