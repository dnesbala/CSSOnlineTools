import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="Navbar teal">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">CSS TOOLS</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/text-shadow-gen" activeClassName="active">Text Shadow</NavLink></li>
                        <li><NavLink to="/box-shadow-gen" activeClassName="active">Box Shadow</NavLink></li>
                        <li><NavLink to="/css-transform-gen" activeClassName="active">CSS Transforms</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;