import React from "react";
import { composeHashKey } from "../../helper/functions.js";
import "./App.css";
import pig from "../../img/daisy.png";
import Form from "./Form.js";
import Rank from "./Rank.js";
import Header from "./Header.js";
import Firebase from "../Firebase/firebase.js";

// import  { FirebaseContext } from '../Firebase';
export const AuthContext = React.createContext(null);

class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      isLoggedIn: false,
      setLoggedIn: false,
      userData: [
        {
          price: 0,
          island: "",
          name: ""
        }
      ]
    };
  }
  
  // uiConfig = {
  //   signInFlow: "popup",
  //   signInOptions: [
  //     Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //     Firebase.auth.EmailAuthProvider.PROVIDER_ID
  //   ],
  //   callbacks: {
  //     signInSuccess: () => false
  //   }
  // }
  getUserData = () => {
    var now = new Date();
    var hashKey = composeHashKey(now);
    var ref = Firebase.database().ref("market/" + hashKey + "/");
    let array;
    ref.on("value", snapshot => {
      array = [];
      const dataset = snapshot.val();
      var keys = Object.keys(dataset);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var dataEntry = dataset[k];
        var expiringTimestamp = new Date(dataEntry.expiringAtTimestamp);
        if (now.getTime() < expiringTimestamp.getTime()) {
          array.push(dataEntry);
        }
      }
      array.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
      this.setState({ userData: array });
    });
  };

  componentDidMount() {
    this.getUserData();
    Firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  authListener() {
    Firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');   
      }
    });
  }
  render() {
    return (
      <AuthContext.Provider value={{ isLoggedIn:this.state.isLoggedIn, setLoggedIn:this.state.setLoggedIn }}>
      {/* Is logged in? {JSON.stringify(isLoggedIn)} */}
      <div>
        <div className="container">
          {this.state.isLoggedIn ? <div>Signed In!</div>
          : <div>Not Signed In</div>}
          <img className="pig" src={pig} />
          <Header data={this.state.userData} />
          <Form />
        </div>
        <div className="ranking">
          <span className="rank-title">Current price around the world</span>
          <Rank data={this.state.userData} />
        </div>
      </div>

      </AuthContext.Provider>

    );
  }
}

//compose data key
function compareEntry(a, b) {
  if (Number(a.price) > Number(b.price)) return -1;
  if (Number(b.price) > Number(a.price)) return 1;
  return 0;
}

export default App;
