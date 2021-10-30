import React from 'react';
import './App.css'

export default function List() {
    return (
        <div>
            <h2 className="listTitle">Things I need to do: </h2>
            <ul className="todoList">
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </div>
    )
}
