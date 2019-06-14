import React, { Component } from 'react';

class Timer extends Component {
    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    };

    render() {
        return (
            <div className="card mt-2">
                <div className="card-body">
                    <div className="card-title h3">
                        {this.props.title}
                    </div>
                    <div className="card-subtitle text-muted">
                        {this.props.project}
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-2">
                        <h2>{this.props.onRenderElapsedString}</h2>
                    </div>
                    <div className="extra content d-flex">
                        <span
                            className = "ml-auto edit-btn"
                            onClick   = {this.props.onEditClick}
                        >
                            <i className="fa fa-pencil-square-o" aria-hidden="true" />
                        </span>
                        <span
                            className = "ml-2 delete-btn"
                            onClick   = {this.handleTrashClick}
                        >
                            <i className="fa fa-trash" aria-hidden="true" />
                        </span>
                    </div>
                </div>
                <div className="card-footer text-center bg-transparent text-info start-btn">
                    Start
                </div>
            </div>
        );
    }
}

export default Timer;
