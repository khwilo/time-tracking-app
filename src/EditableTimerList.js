import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
    render() {
        return (
            <div id="timers">
                <EditableTimer
                    title   = "Learn React"
                    project = "Web Domination" />
            </div>
        );
    }
}

export default EditableTimerList;
