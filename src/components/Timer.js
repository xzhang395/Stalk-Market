import React, { Component } from "react";

class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.render(), 60 * 1000);
  }

  render() {
    var display;
    // Find the distance between now and the count down date
    var now = new Date();
    var expirationDate = new Date(this.props.expirationTime);
    var distance = expirationDate - now;
    // if there's nobody current on the high score list, sub in a "-" in the interim.
    if (Number.isNaN(distance)) {
      display = "-";
    } else {
      // Time calculations for days, hours, minutes and seconds
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      // Display the result
      display = hours + "h " + minutes + "mins";
    }
    return <div id="expiration">Price expires in {display}</div>;
  }
}

export default Timer;
