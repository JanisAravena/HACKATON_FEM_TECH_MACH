import React from 'react';
import './Banca.css'; 
import logoMach from '../../../Imagenes/logo-mach.png'
import logoTarjeta from '../../../Imagenes/tarjeta.png'
import logoMoneda from '../../../Imagenes/moneda.png'
import logoRetiro from '../../../Imagenes/retiro.png'
// Header component
const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar p-3">
      <img src={logoMach} alt="Logo de MACH" width="150" />
      </nav>
      <div className="user-info">
        Hola, Usuario | <a href="#">Cerrar sesión</a>
        
      </div>
    </header>
  );
};

// Home component
const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="homeContent">
        {/* Bloque QR */}
        <div className="homeBlock">
        <img src={logoTarjeta} alt="Logo de MACH" width="150" />
          <h2>Tarjeta Débito física y virtual</h2>
          <p>Compra en todos los comercios.</p>
          <button>Aprende cómo</button>
        </div>

        {/* Bloque Beneficios */}
        <div className="homeBlock">
        <img src={logoRetiro} alt="Logo de MACH" width="150" />
          <h2>Retira efectivo</h2>
          <p>sin costo en todos los cajeros de Chile.</p>
          <button>Conoce más</button>
        </div>

        {/* Bloque Ahorro */}
        <div className="homeBlock">
        <img src={logoMoneda} alt="Logo de MACH" width="150" />
          <h2>Transfiere Seguro</h2>
          <p>a todos los bancos gratis y a otros países.</p>
          <button>Aprende cómo</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
