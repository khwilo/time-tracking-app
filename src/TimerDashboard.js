import React, { Component } from 'react';
import uuid from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimerDashboard extends Component {
  state = {
    timers: [
      {
        title       : "Practice squat",
        project     : "Gym Chores",
        id          : uuid.v4(),
        elapsed     : 5456099,
        runningSince: Date.now(),
      },
      {
        title       : "Bake squash",
        project     : "Kitchen Chores",
        id          : uuid.v4(),
        elapsed     : 1273998,
        runningSince: null,
      }
    ],
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <EditableTimerList
            timers = {this.state.timers}
          />
          <ToggleableTimerForm />
        </div>
      </div>
    );
  }
}

export default TimerDashboard;
