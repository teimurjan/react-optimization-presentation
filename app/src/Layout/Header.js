import React from 'react';
import PropTypes from 'prop-types';
import NavItem from '../Common/NavItem';
import {Link} from 'react-router-dom';

const Header = ({title}) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">{title}</Link>
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
                <NavItem key={1} path='/'>Home</NavItem>
                <NavItem key={2} path='/features'>Features</NavItem>
                <NavItem key={3} path='/about'>About</NavItem>
            </ul>
        </div>
    </nav>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;