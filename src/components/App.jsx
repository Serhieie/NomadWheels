import { useEffect, lazy } from 'react';
import { getAdverts } from '../api/axiosInstance';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import 'normalize.css';
import '../styles/main.scss';

// const Cast = lazy(() => import('./Features/Features'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
const InfoPage = lazy(() => import('../pages/InfoPage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const HomePage = lazy(() => import('../pages/HomePage'));

function App() {
  useEffect(() => {
    getAdverts();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Catalog" element={<CatalogPage />} />
        <Route path="/Favorite" element={<InfoPage />} />
        <Route path="*" element={<div>Not Found ...</div>} />
      </Route>
    </Routes>
  );
}

export default App;