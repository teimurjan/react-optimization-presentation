import React from 'react';

const TODO_LIST_OPTIONS = {
    wrap: false,
    maximizeOnFoucs: true
};

export default class extends React.PureComponent {
    render() {
        return (
            <TodoList
                options={TODO_LIST_OPTIONS}
            />
        );
    }
}