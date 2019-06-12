import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimerDashboard extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div>
          <EditableTimerList />
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

export default TimerDashboard;
