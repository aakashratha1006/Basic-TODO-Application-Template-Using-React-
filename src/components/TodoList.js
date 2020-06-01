import React, { Component } from 'react';
import Item from './TodoItem';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <TodoItem/>
            </div>
        )
    }
}
