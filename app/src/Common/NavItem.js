import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavItem = ({path, children}) => {
    const isActive = window.location.pathname === path;
    return (
        <li className={`nav-item ${isActive
            ? 'active'
            : ''}`}>
            <Link to={path} className="nav-link">{children}</Link>
        </li>
    );
}

NavItem.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default NavItem;