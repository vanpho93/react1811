import React, { Component } from 'react';
import { Word } from './Word';

export class ListWord extends Component {
    genWordItem(word) {
        const color = word.isMemorized ? 'green' : 'red';
        return (
            <div key={word._id}>
                <h3 style={{ color }}>{word.en}</h3>
                <p>{word.vn}</p>
            </div>
        )
    }
    render() {
        const words = [
            { _id: 'abcd1', en: 'One', vn: 'Mot', isMemorized: true },
            { _id: 'abcd2', en: 'Two', vn: 'Hai', isMemorized: false },
            { _id: 'abcd3', en: 'Three', vn: 'Ba', isMemorized: false },
            { _id: 'abcd4', en: 'Four', vn: 'Bon', isMemorized: true },
        ];
        return (
            <div>
                <button onClick={() => alert(123)}>Click me!!!</button>
                <h3>List word works!</h3>
                {/* {words.map(this.genWordItem)} */}
                { words.map(w => <Word key={w._id} wordInfo={w} />) }
            </div>
        );
    }
}
