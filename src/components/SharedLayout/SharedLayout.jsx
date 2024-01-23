import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Wrapper } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};