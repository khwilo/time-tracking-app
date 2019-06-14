import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
    handleRenderElapsedString = (elapsed, runningSince) => {
        let totalElapsed = elapsed;
        if (runningSince) {
            totalElapsed += Date.now() - runningSince;
        }

        return this.formatTime(totalElapsed);
    };

    formatTime = (milliseconds) => {
        const seconds = Math.floor((milliseconds / 1000) % 60);
        const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
        const hours   = Math.floor(milliseconds / 1000 / 60 / 60);

        return [
            parseInt(hours),
            parseInt(minutes),
            parseInt(seconds)
        ].join(":").replace(/\b(\d)\b/g, "0$1");
    };

    render() {
        const timers = this.props.timers.map((timer) => (
            <EditableTimer
                key                   = {timer.id}
                id                    = {timer.id}
                title                 = {timer.title}
                project               = {timer.project}
                elapsed               = {timer.elapsed}
                runningSince          = {timer.runningSince}
                onRenderElapsedString = {this.handleRenderElapsedString}
                onFormSubmit          = {this.props.onFormSubmit}
                onTrashClick          = {this.props.onTrashClick}
            />
        ));
        return (
            <div id="timers">
                {timers}
            </div>
        );
    }
}

export default EditableTimerList;
