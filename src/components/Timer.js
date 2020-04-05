import React, {Component} from "react";

class Timer extends Component {

  componentDidMount() {
    this.interval = setInterval(() => this.render() , 60 * 1000);
  }

  render() {
        // Find the distance between now and the count down date
        var now = new Date();
        var expirationDate = new Date(this.props.expirationTime);
        var distance = expirationDate - now;
    
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
        // Display the result
        var display = "Expires in " + hours + "h " + minutes + "mins ";
    return <div id="expiration">Price expires in {display}</div>;
  }
}

export default Timer;
