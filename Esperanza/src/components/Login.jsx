import React, { useState } from 'react';
import './style.css'; 
import logoMach from '../img/logo-mach.png';
import logoWhite from '../../Imagenes/logo-mach-blanco.png';

function Login() {
  const [isActive, setIsActive] = useState(false);

  // Función para manejar el inicio de sesión
  const loguear = () => {
    console.log('Iniciando sesión...');
  };

  // Funciones para manejar el estado 'active' del contenedor
  const activateContainer = () => setIsActive(true);
  const deactivateContainer = () => setIsActive(false);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Crear Cuenta</h1>
          <br />
          <input type="text" placeholder="Usuario" />
          <input type="email" placeholder="Correo Electrónico" />
          <input type="password" placeholder="Contraseña" />
          <button style={{ color: 'white'}} type="submit">Registrarse</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Ingresar</h1>
          <br />
          <input type="email" placeholder="Correo Electrónico" id="email" />
          <input type="password" placeholder="Contraseña" id="password" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <input type="button" value="ingresar" onClick={loguear} />
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <img src={logoWhite} alt="Logo de MACH" width="150" />
            <h1>¡Registrate MACH!</h1>
            <p>¿Ya tienes una cuenta?</p>
            <button className="hidden" id="login" onClick={deactivateContainer}>Ingresa a tu cuenta</button>
          </div>
          <div className="toggle-panel toggle-right">
            <img src={logoMach} alt="Logo de MACH" width="150" />
            <h1>¡Bienvenido a MACH!</h1>
            <p>Si no estás registrado puedes hacerlo aquí</p>
            <button className="hidden" id="register" onClick={activateContainer}>Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
