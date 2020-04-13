import React from "react";
import { auth, db } from "../Firebase/firebase.js";
import { Link } from 'react-router-dom';
import { ReactComponent as BackButtn } from "../../img/back.svg";
import * as ROUTES from '../../constants/routes';

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      islandName: "",
      ownerName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  writeUserData = () => {

    console.log("MXQ: " + auth.currentUser.uid);

    db.ref("user/" + auth.currentUser.uid + "/")
      .set({
        name: this.state.ownerName,
        island: this.state.islandName,
      });
  };

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }

  handleSubmit(event) {
    this.writeUserData();
    this.props.history.push(ROUTES.LANDING);
    event.preventDefault();
  }
  render() {
    return (  
      <div className="account">
      {/* {console.log(this.props.location.state.currentUser.newUser)} */}
        <Link to={ROUTES.LANDING}><BackButtn className="back" /></Link> 
<h1>My profile</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="question">
            <label htmlFor="basic">Island name</label>
            <br />
            <input
              type="text"
              name="islandName"
              value={this.state.islandName}
              onChange={this.handleChange}
            />
          </div>
          <div className="question">
            <label htmlFor="basic">Your name</label>
            <br />
            <input
              type="text"
              name="ownerName"
              value={this.state.ownerName}
              onChange={this.handleChange}
            />
          </div>
          <input value="Save" id="myBtn" type="submit" />
        </form>
      </div>
    );
  }
}

export default AccountPage;
