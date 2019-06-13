import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm />
            );
        } else {
            return (
                <div className="mt-5 d-flex justify-content-center align-items-center">
                    <button
                        className = "btn"
                        onClick   = {this.handleFormOpen}
                    >
                        <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;
