class TodoList extends React.PureComponent {
    handleClick(todoId) {
        this.setState({
            [todoId]: {clicked: true}
        });
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <Todo
                        todo={todo}
                        onClick={this.props.handleClick.bind(this)}
                    />
                ))}
            </ul>
        );
    }
}