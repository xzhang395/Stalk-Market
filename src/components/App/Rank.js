import React, { Component } from "react";

class Rank extends Component {
  renderTableData() {
    return this.props.data.map((student, index) => {
      const { price, island, name } = student; //destructuring
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{price}</td>
          <td>{island}</td>
          <td>{name}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <th>#</th>
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

export default Rank;