import React, { Component } from 'react';

import './css/button.css';


class Button extends React.Component {
    render() {
        return (
            <button
                className={ this.props.light ? 'light-button' : 'dark-button' }
                onClick={this.props.onClick}>
                Refresh color
            </button>
        );
    }
}

export default Button;