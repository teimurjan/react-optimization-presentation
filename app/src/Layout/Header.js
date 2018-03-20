import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../Common/NavItem';
import { Link } from 'react-router-dom';
export default class extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    };

    state = {
        open: false
    }

    handleTogglerClick = e => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { title } = this.props;
        return (
            <nav className="navbar navbar-expand-xs navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">{title}</Link>
                <button className="navbar-toggler" onClick={this.handleTogglerClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${this.state.open ? 'show' : ''}`} id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <NavItem key={1} path='/'>Home</NavItem>
                        <NavItem key={2} path='/features'>Features</NavItem>
                        <NavItem key={3} path='/about'>About</NavItem>
                    </ul>
                </div>
            </nav>
        )
    }
};