import React, { Component } from 'react';

export class Word extends Component {
    render() {
        const { en, vn, isMemorized } = this.props.wordInfo;
        const color = isMemorized ? 'green' : 'red';
        return (
            <div>
                <h3 style={{ color }}>{en}</h3>
                <p>{vn}</p>
            </div>
        );
    }
}
