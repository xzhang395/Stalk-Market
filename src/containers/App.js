import React from 'react';
import './App.css';
import pig from '../img/daisy.png'
import Form from './Form.js'
import Rank from './Rank.js'
import Header from './Header.js'
import Firebase from '../components/firebase.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    }
  }

  writeUserData = () => {
    Firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }

  getUserData = () => {
    let ref = Firebase.database().ref('/');
    var array = [];
    ref.on('value', snapshot => {
      const dataset = snapshot.val();
      var keys = Object.keys(dataset);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        array.push(dataset[k]);
      }
      array.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
      console.log(array);
      this.setState((array) => ({ userData:array }));
      console.log("Nika: " + this.state.userData);
    });
  }

 

  componentDidMount() {
    this.getUserData();
  }

  render() {
    return (
      <div>
        <div className="container">
          <img className="pig" src={pig} />
          <Header data={this.state.userData}/>
          <Form />
        </div>
        <div className="ranking">
          <span className="rank-title">Current price around the world</span>
          <Rank />
        </div>
      </div>
    );
  }
}
function compareEntry(a, b) {
  if (Number(a.price) > Number(b.price)) return -1;
  if (Number(b.price) > Number(a.price)) return 1;
  return 0;
}
export default App;
