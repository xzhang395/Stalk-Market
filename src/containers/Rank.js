import React from 'react';

class Rank extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { items: [], text: '' };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
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
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
      );
    }
  }

  export default Rank;