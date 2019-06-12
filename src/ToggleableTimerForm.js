import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <TimerForm />
            );
        } else {
            return (
                <div className="mt-5 d-flex justify-content-center align-items-center">
                    <button className="btn">
                        <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;
