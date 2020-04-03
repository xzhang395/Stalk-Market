import React from 'react';
import Firebase from '../components/firebase.js'

class Rank extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userData: [{price:0,
        island:'',
        name:''
        }] };
      }

      getUserData = () => {
        var today = new Date();
        var ref = Firebase.database().ref("market/" + composeHashKey(today) + "/");
        let array = [];
        ref.on('value', snapshot => {
          const dataset = snapshot.val();
          var keys = Object.keys(dataset);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            array.push(dataset[k]);
          }
          array.sort(compareEntry); // this array is sorted from highest -> lowest, starting with 0
          // console.log(array);
          this.setState({ userData: array });
        });
      }
      componentDidMount() {
      this.getUserData();
      console.log("header value "+this.props.data);
    }
    renderTableData() {
        return this.state.userData.map((student, index) => {
           const { price, island, name } = student //destructuring
           return (
              <tr key={index}>
                 <td>{index+1}</td>
                 <td>{price}</td>
                 <td>{island}</td>
                 <td>{name}</td>
              </tr>
           )
        })
     }

    render() {
      return (
        <table className="table">
         <tbody>
        <tr>
          <th>Ranking</th>
          <th>Price</th>
          <th>Island</th>
          <th>Owner</th>
        </tr>
        {this.renderTableData()}
        </tbody>
      </table>
      );
    }
  }

//TODO: move to app.js
function compareEntry(a, b) {
    if (Number(a.price) > Number(b.price)) return -1;
    if (Number(b.price) > Number(a.price)) return 1;
    return 0;
  }
  
  function composeHashKey(date) {
    var fullDate = composeDateString(date);
    if (date.getHours() < 12) {
      return fullDate + "-0"; // morning price
    }
    return fullDate + "-1"; // afternoon price
  }
  function composeDateString(date) {
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  }

  export default Rank;