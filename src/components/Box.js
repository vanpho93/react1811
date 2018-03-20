import React, { Component } from 'react';

export class Box extends Component {
    render() {
        return (
            <div>
                <h3 style={{ color: 'green' }}>Value: 1</h3>
                <button>Increase</button>
            </div>
        );
    }
}
