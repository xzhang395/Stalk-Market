import React from 'react';
import Timer from '../components/Timer.js'

class Header extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = { items: [], text: '' };
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    // }
  
    render() {
      return (
        <div className="Header">
        <span id="max-price">---</span>
        <br />
        <span id="best-island">at -</span>
        <Timer />
      </div>
      );
    }
  }

  export default Header;