import React, { Component } from 'react';
import TimerForm from './TimerForm';

class EditableTimer extends Component {
    render() {
        return (
            <TimerForm
                title   = {this.props.title}
                project = {this.props.project} />
        );
    }
}

export default EditableTimer;
