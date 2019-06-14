import React, { Component } from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';

class EditableTimer extends Component {
    state = {
        editFormOpen: false,
    };

    handleEditClick = () => {
        this.openForm();
    };

    handleFormClose = () => {
        this.closeForm();
    };

    handleSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.closeForm();
    };

    closeForm = () => {
        this.setState({ editFormOpen: false });
    };

    openForm = () => {
        this.setState({ editFormOpen: true });
    }

    render() {
        if (this.state.editFormOpen) {
            return (
                <TimerForm
                    id           = {this.props.id}
                    title        = {this.props.title}
                    project      = {this.props.project}
                    onFormSubmit = {this.handleSubmit}
                    onFormClose  = {this.handleFormClose}
                />
            );
        } else {
            return (
                <Timer
                    id                    = {this.props.id}
                    title                 = {this.props.title}
                    project               = {this.props.project}
                    elapsed               = {this.props.elapsed}
                    runningSince          = {this.props.runningSince}
                    onRenderElapsedString = {this.props.onRenderElapsedString}
                    onEditClick           = {this.handleEditClick}
                    onTrashClick          = {this.props.onTrashClick}
                />
            );
        }
    }
}

export default EditableTimer;
