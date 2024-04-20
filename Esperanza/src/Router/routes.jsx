import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Inicio from "../Views/Inicio";
import LoginRegistro from "../Views/LoginRegistro";


const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/LoginRegistro", element: <LoginRegistro/> },
 
]);

export default router;