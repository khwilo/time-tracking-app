import React, { Component } from 'react';

import TimerActionButon from "./TimerActionButton";

class Timer extends Component {
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval)
    }

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    }

    render() {
        const elapsedString =  this.props.onRenderElapsedString(
            this.props.elapsed, this.props.runningSince
        );

        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div className="card-title h3">
                        {this.props.title}
                    </div>
                    <div className="card-subtitle text-muted">
                        {this.props.project}
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className="extra content d-flex">
                        <span
                            className = "ml-auto edit-btn"
                            onClick   = {this.props.onEditClick}
                        >
                            <i className="fa fa-pencil-square-o" aria-hidden="true" />
                        </span>
                        <span
                            className = "ml-2 delete-btn"
                            onClick   = {this.handleTrashClick}
                        >
                            <i className="fa fa-trash" aria-hidden="true" />
                        </span>
                    </div>
                </div>
                <TimerActionButon
                    timerIsRunning = {!!this.props.runningSince}
                    onStartClick   = {this.handleStartClick}
                    onStopClick    = {this.handleStopClick}
                />
            </div>
        );
    }
}

export default Timer;
