import React from 'react';

export default (props) => {
    return (
        <div className="progress-container">
            <h2>
                {props.title}
            </h2>
            <progress value={props.progress} max="100" className="progress"/>
            <div>
                {props.progress} %
            </div>
        </div>
    )
}