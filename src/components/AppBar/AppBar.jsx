import React from 'react';
import { Navigation } from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'Hooks/useAuth';
import { UserMenu } from 'components';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
