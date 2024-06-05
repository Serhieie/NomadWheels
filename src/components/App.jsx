import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import 'normalize.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.scss';

const CatalogPage = lazy(() => import('../pages/CatalogPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const FavoritePage = lazy(() => import('../pages/FavoritesPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/Catalog" element={<CatalogPage />} />
        <Route path="/Favorites" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
