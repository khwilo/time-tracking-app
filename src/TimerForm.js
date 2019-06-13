import React, { Component } from 'react';

class TimerForm extends Component {
    state = {
        title  : this.props.title || "",
        project: this.props.project || "",
    };

    handleTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };

    handleProjectChange = (e) => {
        this.setState({ project: e.target.value });
    };

    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="Title">Title</label>
                            <input
                                className   = "form-control"
                                type        = "text"
                                placeholder = "title"
                                value       = {this.state.title}
                                onChange    = {this.handleTitleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Project">Project</label>
                            <input
                                className   = "form-control"
                                type        = "text"
                                placeholder = "project"
                                value       = {this.state.project}
                                onChange    = {this.handleProjectChange}
                            />
                        </div>
                        <div className="form-group btn-group d-flex">
                            <button className="btn btn-info">
                                {submitText}
                            </button>
                            <button className="btn btn-danger">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TimerForm;
