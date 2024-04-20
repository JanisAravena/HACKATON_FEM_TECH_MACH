import React from 'react';
import './Banca.css'; // Asegúrate de incluir el archivo CSS adecuado

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>Mi Banco</li>
          <li>Inversiones</li>
          <li>Transferencias</li>
          <li>Tarjetas</li>
          <li>Créditos</li>
          <li>Pagos y Recargas</li>
          <li>Seguros</li>
        </ul>
      </nav>
      <div className="user-info">
        Hola, xxxxx | <a href="#">Cerrar sesión</a>
      </div>
    </header>
  );
};

export default Header;
