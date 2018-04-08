import React from 'react';

class Todo extends React.PureComponent {
    render() {
        return (
            <li className="todo" onClick={this.props.onClick}>
                {this.props.todo}
            </li>
        )
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <Todo
                        todo={todo}
                        onClick={() => this.props.onTodoClick(todo.id)}
                    />
                ))}
            </ul>
        );
    }
}