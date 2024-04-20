import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Inicio from "../Views/Inicio";
import Registros from "../Views/Registros";


const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/Login", element: <Registros /> },
 
]);

export default router;