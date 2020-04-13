import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { auth } from "../Firebase/firebase.js";
import { Route , withRouter} from 'react-router-dom';


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: {
          newUser: false,
          island: '',
          name: ''
        },
      isSignedIn: false 
  };
}
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  handleClick = (e) => {
    auth.signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });
  }

  handleClickAccout = (e) => {
    this.props.history.push({
      pathname: ROUTES.ACCOUNT,
      state: {
        currentUser: {
          newUser: false,
          island: '',
          name: ''
        }
      }
    });
  }

  render() {
    return (
      <div className="nav" >
        {this.state.isSignedIn &&
          <ul>
            <li>
              <a href="#" onClick={() => { this.handleClick() }}>Sign Out</a>
            </li>
            <li>
            <a href="#" onClick={() => { this.handleClickAccout() }}>Account</a>
              {/* <Link to={ROUTES.ACCOUNT}>Account</Link> */}
            </li>
          </ul>
        }
      </div>
    )
  }
}

export default withRouter(Navigation);

