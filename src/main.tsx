import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { MainPage } from './components/MainPage';
import { CategoryPage } from './components/CategoryPage';
import { CommunityPage } from './components/CommunityPage';
import './index.css';
import { ProductPage } from './components/ProductPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<MainPage />} />
          <Route path={'/category'} element={<CategoryPage />} />
          <Route path={'/community'} element={<CommunityPage />} />
          <Route path={'/:docId'} element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
