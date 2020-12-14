import React, { Component } from 'react';
import './style.css';

class Content extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div className="content">{this.props.children}</div>
        );
    }
}

export default Content;