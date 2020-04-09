import React, {Component} from "react";
import Timer from "../Timer";

class Header extends Component {

  render() {
    return (
      <div className="Header">
        <span id="max-price">{this.props.data[0].price}</span>
        <br />
        <span id="best-island">at {this.props.data[0].island}</span>
        <Timer expirationTime={this.props.data[0].expiringAtTimestamp} />
      </div>
    );
  }
}

export default Header;
