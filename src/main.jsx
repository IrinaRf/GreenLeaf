import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Accueil from './pages/Accueil.jsx';
import ProduitsEtServices from './pages/ProduitsEtServices.jsx';
import Contact from './pages/Contact.jsx';
import Faq from './pages/Faq.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "produitsetservices",
        element: <ProduitsEtServices />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);