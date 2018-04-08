import React from 'react';

const TodoFactory = ({ todo, onClick }) => (
    <li className="todo" onClick={onClick}>
        {todo.title}
    </li>
);

export default ({ todos }) => (
    <ul>
        {todos.map(todo => TodoFactory({ todo, onClick: console.log }))}
    </ul>
)