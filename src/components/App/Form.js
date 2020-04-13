import React from "react";
import {auth, db} from "../Firebase/firebase.js";
import { nextExpiringDate, composeHashkey } from "../../helper/functions.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted:false,
      price: 0,
      islandName: "",
      ownerName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  writeUserData = () => {
    var today = new Date();
    db
    .ref("market/" + composeHashkey(today) + "/")
      .push({
        name: this.props.data.name,
        island: this.props.data.island,
        price: this.state.price,
        createdAtTimestamp: today.toISOString(),
        expiringAtTimestamp: nextExpiringDate(today).toISOString(),
        userid: auth.currentUser.uid,
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
    this.setState({
      isSubmitted: true
    });
    event.preventDefault();
  }
  render() {
    return (this.state.isSubmitted ? <div className="submitted"><div className="submitted-confirm">
    Submitted, Thank you!</div></div>:
      
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="question">
          <label htmlFor="basic">
            Current Stalk price on your island
          </label>
          <br />
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
        <input id="myBtn" type="submit" />
      </form>
    );
  }
}

export default Form;