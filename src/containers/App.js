import React from 'react';
import './App.css';
import pig from '../img/daisy.png'
import Form from './Form.js'
import Rank from './Rank.js'
import Header from './Header.js'
// import Firebase from '../components/firebase.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { userData: [], text: '' };
    this.state = {
        test:1
 };
  
  }

  // componentDidMount() {
  //   this.GetData().then(res =>
  //     this.setState({data:3)
  //   )
  //   // this.getUserData();
  //   this.setState({ test:3 }, () =>
  //   this.render()
  // );
  // console.log("outside callback" +this.state.test);
      
  // }
  // GetData(){
  //   this.setState({test: 3})
  // }
  // componentDidMount() {
  //   this.GetData().then(res =>
  //     this.setState({test: 3})
  //   )
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      `this.state.clickCounts(♻️ componentDidUpdate)`,
      this.state.test
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <img className="pig" src={pig} />
          <Header data={this.state.test} />
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
// function compareEntry(a, b) {
//   if (Number(a.price) > Number(b.price)) return -1;
//   if (Number(b.price) > Number(a.price)) return 1;
//   return 0;
// }

// function composeHashKey(date) {
//   var fullDate = composeDateString(date);
//   if (date.getHours() < 12) {
//     return fullDate + "-0"; // morning price
//   }
//   return fullDate + "-1"; // afternoon price
// }
// function composeDateString(date) {
//   var dd = String(date.getDate()).padStart(2, "0");
//   var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
//   var yyyy = date.getFullYear();
//   return yyyy + "-" + mm + "-" + dd;
// }
export default App;
