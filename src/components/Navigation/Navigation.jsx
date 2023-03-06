import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'Hooks/useAuth';

import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/goit-react-hw-08-phonebook">Home</NavLink>

      {/* <NavLink to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink> */}
      {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>}
    </nav>
  );
};
