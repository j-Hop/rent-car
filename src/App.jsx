import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'components/GlobalStyle';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import ScrollToTop from 'react-scroll-to-top';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ScrollToTop smooth color="#3470FF" />
    </>
  );
};
