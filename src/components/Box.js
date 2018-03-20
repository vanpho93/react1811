import React, { Component } from 'react';

export class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 100 };
    }
    render() {
        return (
            <div>
                <h3 style={{ color: 'green' }}>Value: { this.state.count }</h3>
                <button
                    onClick={() => {
                        this.setState(prevState => ({ count: prevState.count + 1 }));
                        this.setState(prevState => ({ count: prevState.count + 1 }));
                    }}
                >
                    Increase
                </button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>
                    Descrease
                </button>
                <button onClick={() => this.setState({ count: 1 })}>
                    Reset
                </button>
            </div>
        );
    }
}
