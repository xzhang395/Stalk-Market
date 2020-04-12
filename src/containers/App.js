import React from "react";
import { composeHashkey, composePrevHashkey } from "../helper/functions.js";
import "./App.css";
import pig from "../img/daisy.png";
import timmy from "../img/timmy.png";
import tommy from "../img/tommy.png";
import Form from "./Form.js";
import Rank from "./Rank.js";
import Header from "./Header.js";
import Firebase from "../components/firebase.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
      isSunday : new Date().getDay()==0,
      userData: [
        {
          price: 0,
          island: "",
          name: ""
        }
      ]
    };
  }

  getUserData = () => {
    // var now = new Date();
    let now = this.state.now;
    var hashkey = composeHashkey(now);
    var prevHashkey = composePrevHashkey(now);
    var db = Firebase.database();
    var ref = db.ref("market/" + hashkey + "/");
    ref.on(
      "value",
      snapshot => {
        let array = extractUnexpiredEntriesFromSnapshot(snapshot);
        db.ref("market/" + prevHashkey + "/")
          .once("value")
          .then(pastSnapshot => {
            // using this cuz array.concat() didn't work.
            let merged = [
              ...array,
              ...extractUnexpiredEntriesFromSnapshot(pastSnapshot)
            ];
            merged.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
            if (merged.length === 0) {
              this.setState({
                userData: [{ price: "-", name: "-", island: "-" }]
              });
            } else {
              this.setState({ userData: merged });
            }
          });
      },
      function(error) {
        console.log("Error: " + error.code);
      }
    );
  };

  componentDidMount() {
    this.getUserData();
    this.setState({ now: new Date() });
  }

  render() {
    return (
      <div>
      {this.state.isSunday && <div className="banner">It's Turnip Day!</div>}
        <div className="container">
        {/* {this.state.isSunday && <img className="pig" src={pig} />}
        {this.state.isSunday && <img className="timmy" src={timmy} /> <img className="tommy" src={tommy} />} */}
        {this.state.isSunday? <img className="pig" src={pig} />:<div><img className="timmy" src={timmy} /> <img className="tommy" src={tommy} /></div>}
          <Header data={this.state.userData} />
          <Form />
        </div>
        <div className="ranking">
          <span className="rank-title">Current price around the world</span>
          <Rank data={this.state.userData} />
        </div>
      </div>
    );
  }
}

//compose data key
function compareEntry(a, b) {
  var now = new Date();
  if(now.getDay()!=0){
    // console.log(now.getDay());
  if (Number(a.price) > Number(b.price)) return -1;
  if (Number(b.price) > Number(a.price)) return 1;
  return 0;}
  else{
    if (Number(a.price) < Number(b.price)) return -1;
    if (Number(b.price) < Number(a.price)) return 1;
    return 0;}
}

function extractUnexpiredEntriesFromSnapshot(asdf) {
  let b = [];
  let now = new Date();
  let dataset = asdf.val();
  let keys = Object.keys(dataset);
  let dataEntry, expiringTimestamp;
  for (var i = 0; i < keys.length; i++) {
    let k = keys[i];
    dataEntry = dataset[k];
    expiringTimestamp = new Date(dataEntry.expiringAtTimestamp);
    if (now.getTime() < expiringTimestamp.getTime()) {
      b.push(dataEntry);
    }
  }
  return b;
}

export default App;
