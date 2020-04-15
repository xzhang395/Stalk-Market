import React from "react";
import { auth, db } from "../Firebase/firebase.js";
import { Link } from "react-router-dom";
import { ReactComponent as BackButtn } from "../../img/back.svg";
import * as ROUTES from "../../constants/routes";

class AccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: true,
      island: "",
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  writeUserData = () => {
    db.ref("user/" + auth.currentUser.uid + "/").update({
      name: this.state.name,
      island: this.state.island
    });
  };

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value
    });
  }
  componentDidMount() {
    var ref = db.ref("user/");
    ref.on("value", snapshot => {
      const dataset = snapshot.val();
      var keys = Object.keys(dataset);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var dataEntry = dataset[k];
        if (k == auth.currentUser.uid) {
          this.setState({
            newUser: false,
            island: dataEntry.island,
            name: dataEntry.name
          });
        }
      }
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
        {/* {console.log(this.state.newUser)} */}
        {!this.state.newUser && (
          <Link to={ROUTES.LANDING}>
            <BackButtn className="back" />
          </Link>
        )}
        {this.state.newUser ? (
          <h1>Set up your profile</h1>
        ) : (
          <h1>My profile</h1>
        )}
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="question">
            <label htmlFor="basic">Island name</label>
            <br />
            <input
              type="text"
              name="island"
              value={this.state.island}
              onChange={this.handleChange}
            />
          </div>
          <div className="question">
            <label htmlFor="basic">Your name</label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          {this.state.newUser ? (
            <input value="Save" id="myBtn" type="submit" />
          ) : (
            <input value="Save Changes" id="myBtn" type="submit" />
          )}
        </form>
      </div>
    );
  }
}

export default AccountPage;
