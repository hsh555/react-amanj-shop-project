import React, { Component } from 'react';
import './style.css';

class RouteAuth extends Component {
    render() {
        const { isAuthenticated } = this.props;
        if (isAuthenticated) {
            return this.props.children
        }
        return <p className="access-denied">You Don't Access To Here. Please Login And Try Again!</p>
    }
}

export default RouteAuth;