import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoginRegistro from "../Views/LoginRegistro";
import Registros from "../Views/Registros";
import Header from "../Views/SesionIniciada"


const router = createBrowserRouter([
  { path: "/", element: <LoginRegistro/> },
  { path: "/Login", element: <Registros /> },
  { path: "/Header", element: <Header/> },
 
]);

export default router;