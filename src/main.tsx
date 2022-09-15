import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { MainPage } from './components/MainPage';
import { CategoryPage } from './components/CategoryPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<App />}>
          <Route path={'/'} element={<CategoryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
