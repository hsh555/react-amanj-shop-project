import React, { Component } from 'react';
import './style.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="not-found">
                <p><span>Error</span>: 404 not page found</p>
            </div>
        );
    }
}

export default NotFound;