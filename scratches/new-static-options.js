import React from 'react';

export default class extends React.PureComponent {
    render() {
        return (
            <TodoList
                options={{
                    wrap: false,
                    maximizeOnFoucs: true
                }}
            />
        );
    }
}