import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countDown: "" };
    }

    tick() {
        var countDownDate = new Date("Mar 31, 2020 20:00:00").getTime();
        // Find the distance between now and the count down date
        var now = new Date();
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        var display = "Expires in " + hours + "h " + minutes + "mins ";
        this.setState(state => ({
            countDown: display
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div id="expiration">Price expires in {this.state.countDown}</div>
        );
    }
}

export default Timer;