import React, { Component } from "react";

class TimerActionButton extends Component {
    render() {
        if(this.props.timerIsRunning) {
            return (
                <div
                    className = "card-footer text-center bg-transparent text-danger stop-btn"
                    onClick   = {this.props.onStopClick}
                >
                    Stop
                </div>
            );
        } else {
            return (
                <div
                    className = "card-footer text-center bg-transparent text-success start-btn"
                    onClick   = {this.props.onStartClick}
                >
                    Start
                </div>
            );
        }
    }
}

export default TimerActionButton;
