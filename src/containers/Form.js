import React from "react";
import Firebase from "../components/firebase.js";
import { nextExpiringDate, composeHashkey } from "../helper/functions.js";

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
    Firebase.database()
      .ref("market/" + composeHashkey(today) + "/")
      .push({
        name: this.state.ownerName,
        island: this.state.islandName,
        price: this.state.price,
        createdAtTimestamp: today.toISOString(),
        expiringAtTimestamp: nextExpiringDate(today).toISOString()
      });

    console.log("DATA SAVED");
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
            What's the current Stalk price on your island?
          </label>
          <br />
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
        </div>
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

export default Form;
