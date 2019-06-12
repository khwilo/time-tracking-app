import React, { Component } from 'react';

class TimerForm extends Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label for="Title">Title</label>
                            <input
                                className    = "form-control"
                                type         = "text"
                                id           = "title"
                                placeholder  = "title"
                                defaultValue = {this.props.title}
                            />
                        </div>
                        <div className="form-group">
                            <label for="Project">Project</label>
                            <input
                                className    = "form-control"
                                type         = "text"
                                id           = "project"
                                placeholder  = "project"
                                defaultValue = {this.props.project}
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
