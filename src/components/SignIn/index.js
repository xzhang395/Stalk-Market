
import React from "react";
import { auth } from "../Firebase/firebase.js";
import firebase from 'firebase/app';
import google from "../../img/google.png";

class SignInPage extends React.Component{
  constructor(props) {
    super(props);}
   handleClick = e => {
    // this.props.history.push(ROUTES.ACCOUNT);
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    auth.signInWithPopup(provider).then(function(result) 
    {
      var user = result.user;
      console.log("User: " + user);
    }).catch((blah) => console.log('error', blah));
  };
render(){
  return (
    <div>
        <button className="LoginButtn" onClick={e => this.handleClick(e)} > <img className="google" src={google} /><span>Sign in with Google to enter your price</span></button>
    </div>
  );}
};

export default SignInPage;
