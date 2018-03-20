import React, { Component } from 'react';

export class Word extends Component {
    getBody(isHighlight) {
        if (isHighlight) return (
            <h3 style={{ color: 'green' }}>
                Word component works!
            </h3>
        );
        return (
            <h3 style={{ color: '#ccc' }}>
                Word component works!
            </h3>
        );
    }
    render() {
        const isHighlight = false;
        return (
            <div>
                { this.getBody(isHighlight) }
            </div>
        );
    }
}
