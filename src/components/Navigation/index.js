import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {auth} from "../Firebase/firebase.js";


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
    };
  }
componentDidMount() {
  auth.onAuthStateChanged(user => {
    this.setState({ isSignedIn: !!user })
  })
}

handleClick = (e) => {
  auth.signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  });
}

render(){
  return(
    <div className="nav" >
    <ul>
      {this.state.isSignedIn &&<li>
       <a href="#" onClick={() => { this.handleClick() }}>Sign Out</a>
      </li>}
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
    </ul>
  </div>
  )
}
}

export default Navigation;

