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

    handleSubmit = () => {
        this.props.onFormSubmit({
            id     : this.props.id,
            title  : this.state.title,
            project: this.state.project
        });
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
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
                            <button
                                type      = "button"
                                className = "btn btn-info"
                                onClick   = {this.handleSubmit}>
                                {submitText}
                            </button>
                            <button
                                type      = "button"
                                className = "btn btn-danger"
                                onClick   = {this.props.onFormClose}>
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
