import React from 'react';
import Timer from '../components/Timer.js'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps({ someProp }) {
    this.setState({ ...this.state, someProp })
  }

  render() {
    return (
      <div className="Header">
        <span id="max-price">{this.props.data[0].price}</span>
        <br />
        <span id="best-island">at {this.props.data[0].island}</span>
        <Timer />
      </div>
    );
  }
}

export default Header;