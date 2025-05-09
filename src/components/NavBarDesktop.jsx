import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../utils/routes';
import '../styles/NavBar.css';
import menuPicture from '../assets/Menu.svg';
import logoPicture from '../assets/logo.png';


function NavBarDesktop({ toggleNav }) {
    return (
        <>
            <nav className="nav-bar">
                <button className="menu-toggle" onClick={ toggleNav } >
                    <figure>
                        <img src={ menuPicture } alt="menu" />
                    </figure>
                </button>
                <figure className="logo">
                    <img src={ logoPicture } alt="boy-dev" />
                </figure>
                <ul className="navigation">
                    {routes.map(item => (
                        <li key={item.to}>
                            <NavLink to={item.to} className={({ isActive })=> `btn-link-blue-white ${isActive? 'text-primary': ''}`} key={item.value}>
                                <i className={`fa ${item.icon} link-nav`} aria-hidden="true"></i>
                                {item.value}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <h1 className="title">
                    <i className={`fa fa-briefcase link-nav`} aria-hidden="true"></i>
                    Mi Portafolio
                </h1>
            </nav>
        </>
    )
}

export { NavBarDesktop };