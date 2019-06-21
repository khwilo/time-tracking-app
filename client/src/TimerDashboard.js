import React, { Component } from 'react';
import uuid from 'uuid';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

import { getTimers } from './client';

class TimerDashboard extends Component {
  state = {
    timers: [],
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    getTimers((serverTimers) => {
      this.setState({ timers: serverTimers })
    });
  }

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

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(
        timer => timer.id !== timerId
      )
    });
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed     : timer.elapsed + lastElapsed,
            runningSince: null
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
            onTrashClick = {this.handleTrashClick}
            onStartClick = {this.handleStartClick}
            onStopClick  = {this.handleStopClick}
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
