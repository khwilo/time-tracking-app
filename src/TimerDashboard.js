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

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  createTimer = (timer) => {
    const t = this.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t)
    });
  };

  newTimer = (attributes) => {
    let { ...attrs } = attributes ;

    const timer        = {
      title  : attrs.title || "Timer",
      project: attrs.project || "Project",
      id     : uuid.v4(),
      elapsed: 0
    };

    return timer;
  }

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title  : attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };


  render() {
    return (
      <div className="d-flex justify-content-center">
        <div>
          <EditableTimerList
            timers       = {this.state.timers}
            onFormSubmit = {this.handleEditFormSubmit}
          />
          <ToggleableTimerForm
            onFormSubmit = {this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}

export default TimerDashboard;
