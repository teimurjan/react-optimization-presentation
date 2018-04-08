class TodoList extends React.PureComponent {
    handleClick(todoId) {
        this.setState({
            [todoId]: {clicked: true}
        });
    }
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <Todo
                        todo={todo}
                        onClick={this.props.handleClick}
                    />
                ))}
            </ul>
        );
    }
}