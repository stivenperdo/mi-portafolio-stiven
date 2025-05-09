import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import routes from '../utils/routes';

function NavBarMovile({ toggleNav }) {
  return (
    <>
        <ul className="navigation-movile" id="movileMenu">
          {routes.map(route => (
            <NavLink to={route.to} className='btn-link-blue-white' onClick={ toggleNav }>
              <i className={`fa ${route.icon} link-nav`} aria-hidden="true"></i>
              <span>{route.value}</span>
            </NavLink>
          ))}
        </ul>
    </>
  )
}

export { NavBarMovile };