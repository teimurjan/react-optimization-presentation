import React from 'react';

export default class extends React.PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        return !(
            shallowEqual(nextProps, this.props) &&
            shallowEqual(nextState, this.state)
        );
    }
}