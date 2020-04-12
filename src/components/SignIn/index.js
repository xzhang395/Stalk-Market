
import React from "react";
import { auth } from "../Firebase/firebase.js";
import firebase from 'firebase/app';

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
        <button className="LoginButtn" onClick={e => this.handleClick(e)} >Login</button>
    </div>
  );}
};

export default SignInPage;
