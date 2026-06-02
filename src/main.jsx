import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Tours from './pages/tours';         // Импортируем страницу Экскурсий
import './index.css';
import Cabinet from './pages/cabinet';         // Импортируем страницу Экскурсий

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/tours",       // Этот путь должен совпадать с <Link to="/tours">
    element: <Tours />,
  },
    {
    path: "/cabinet",       // Этот путь должен совпадать с <Link to="/tours">
    element: <Cabinet />,
  },
 
 
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);