import React from 'react';
import { NavLink } from 'react-router-dom';
import { router } from '../../servises/router';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink exact to={router.HOME_PAGE}>
              HomePage
            </NavLink>
          </li>

          <li>
            <NavLink to={router.FORM_PAGE}>FormPage</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
