import { Outlet } from 'react-router-dom';
import { AppBarComp } from 'components';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBarComp />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
