import React from "react";
import {auth, db} from "../Firebase/firebase.js";
import {
	withRouter
} from 'react-router-dom';
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

      console.log("MXQ: "+ auth.currentUser.uid);

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
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="question">
          <label htmlFor="basic">What's the name of your island?</label>
          <br />
          <input
            type="text"
            name="islandName"
            value={this.state.islandName}
            onChange={this.handleChange}
          />
        </div>
        <div className="question">
          <label htmlFor="basic">What's your name?</label>
          <br />
          <input
            type="text"
            name="ownerName"
            value={this.state.ownerName}
            onChange={this.handleChange}
          />
        </div>
        <input id="myBtn" type="submit" />
      </form>
    );
  }
}

export default AccountPage;
